const { ImageAnnotatorClient } = require('@google-cloud/vision');

let visionClient;

const getVisionClient = () => {
  if (!visionClient) {
    if (!process.env.GOOGLE_CREDENTIALS) {
      throw new Error('GOOGLE_CREDENTIALS no configurada');
    }
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    visionClient = new ImageAnnotatorClient({ credentials });
  }
  return visionClient;
};

exports.handler = async (event) => {
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { image } = body;

    if (!image) {
      return { statusCode: 400, body: JSON.stringify({ success: false, error: 'Sin archivo' }) };
    }

    const client = getVisionClient();
    const base64Data = image.split(',')[1] || image;
    const isPDF = image.includes('application/pdf') || image.startsWith('JVBERi0');

    let fullText = "";

    if (isPDF) {
      const request = {
        requests: [{
          inputConfig: { mimeType: 'application/pdf', content: base64Data },
          features: [{ type: 'DOCUMENT_TEXT_DETECTION' }],
          pages: [1]
        }]
      };
      const [result] = await client.batchAnnotateFiles(request);
      fullText = result.responses[0].responses.map(r => r.fullTextAnnotation ? r.fullTextAnnotation.text : "").join("\n");
    } else {
      const [result] = await client.documentTextDetection({ image: { content: base64Data } });
      fullText = result.fullTextAnnotation ? result.fullTextAnnotation.text : '';
    }

    // --- PROCESAMIENTO DE CABECERA ---
    
    // 1. Extraer Fecha (Busca "Fecha Orden de Compra" o "Fecha Factura")
    const fechaMatch = fullText.match(/Fecha\s+(?:Orden\s+de\s+Compra|Factura|Guía|Guia)[\s:]*(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/i);
    const fechaGuia = fechaMatch ? fechaMatch[1] : "No detectada";

    // 2. Extraer Número de Factura/Folio
    const idGuiaMatch = fullText.match(/(?:FACTURA|FOLIO|NRO|GUIA)[\s:\[]*(\d+)/i);
    const numeroGuia = idGuiaMatch ? idGuiaMatch[1] : "No detectado";

    // --- PROCESAMIENTO DE PRODUCTOS ---
    const lineas = fullText.split('\n');
    const productos = [];

    lineas.forEach(linea => {
      // Patron específico: SKU -> Descripción -> SKU -> Cantidad
      // Ejemplo en tu PDF: "80172","Tartina de alachofa...","80172","12"
      const match = linea.match(/(80\d{3})[\s",]+(.+?)[\s",]+(80\d{3})[\s",]+(\d+)/);
      
      if (match) {
        const sku = match[1];
        const nombre = match[2].replace(/[",\r\n\\]/g, '').trim();
        const cantidad = parseInt(match[4]);

        if (!productos.some(p => p.sku === sku)) {
          productos.push({
            sku: sku,
            nombre: nombre,
            unidades: cantidad
          });
        }
      }
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        numeroGuia,
        fecha: fechaGuia,
        productos,
        count: productos.length
      })
    };

  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ success: false, error: error.message }) };
  }
};
