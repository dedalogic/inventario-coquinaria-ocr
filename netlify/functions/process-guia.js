const { ImageAnnotatorClient } = require('@google-cloud/vision');

let visionClient;

const getVisionClient = () => {
  if (!visionClient) {
    if (!process.env.GOOGLE_CREDENTIALS) {
      throw new Error('GOOGLE_CREDENTIALS no configuradas');
    }
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    visionClient = new ImageAnnotatorClient({ credentials });
  }
  return visionClient;
};

exports.handler = async (event) => {
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { image } = body; // Aquí recibimos el base64

    if (!image) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, error: 'No se recibió archivo' })
      };
    }

    const client = getVisionClient();
    const base64Data = image.split(',')[1] || image;
    
    // Detectamos si es PDF revisando la cabecera del base64
    const isPDF = image.includes('application/pdf') || image.startsWith('JVBERi0');

    let fullText = "";

    if (isPDF) {
      // Lógica para PDF (Soporta hasta 5 páginas síncronamente)
      const request = {
        requests: [{
          inputConfig: {
            mimeType: 'application/pdf',
            content: base64Data,
          },
          features: [{ type: 'DOCUMENT_TEXT_DETECTION' }],
          pages: [1] // Solo procesamos la primera página para rapidez
        }]
      };
      const [result] = await client.batchAnnotateFiles(request);
      // Extraemos el texto de la respuesta de archivo
      const responses = result.responses[0].responses;
      fullText = responses.map(r => r.fullTextAnnotation ? r.fullTextAnnotation.text : "").join("\n");
    } else {
      // Lógica para IMÁGENES
      const [result] = await client.documentTextDetection({
        image: { content: base64Data }
      });
      fullText = result.fullTextAnnotation ? result.fullTextAnnotation.text : '';
    }

    if (!fullText) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, error: 'No se pudo extraer texto' })
      };
    }

    // --- PROCESAMIENTO DE LA GUÍA (Igual que el anterior pero optimizado) ---
    const lineas = fullText.split('\n');
    const productosEncontrados = [];
    let folio = "No detectado";
    let fecha = "No detectada";

    lineas.forEach(linea => {
      // Captura Folio
      const folioMatch = linea.match(/(?:FOLIO|GUIA|NRO|N°|NUMERO)[\s:\[]*(\d+)/i);
      if (folioMatch && folio === "No detectado") folio = folioMatch[1];

      // Captura Fecha
      const fechaMatch = linea.match(/(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/);
      if (fechaMatch && fecha === "No detectada") fecha = fechaMatch[1];

      // Captura de SKU (Formato 80XXX)
      const skuMatch = linea.match(/\b(80\d{3})\b/);
      if (skuMatch) {
        const sku = skuMatch[1];
        const numerosEnLinea = linea.match(/\d+/g) || [];
        const candidatosCantidad = numerosEnLinea.filter(n => n !== sku);
        
        // Asumimos que la cantidad es el último número de la línea (típico en tablas)
        let cantidad = 1;
        if (candidatosCantidad.length > 0) {
          cantidad = parseInt(candidatosCantidad[candidatosCantidad.length - 1]);
        }

        if (!productosEncontrados.some(p => p.codigo === sku)) {
          productosEncontrados.push({
            codigo: sku,
            cantidad: cantidad
          });
        }
      }
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        folio,
        fecha,
        productos: productosEncontrados,
        debug: { tipoArchivo: isPDF ? 'PDF' : 'Imagen' }
      })
    };

  } catch (error) {
    console.error('Error detallado:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
