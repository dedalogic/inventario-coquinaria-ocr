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
          pages: [1] // Procesamos la primera página
        }]
      };
      const [result] = await client.batchAnnotateFiles(request);
      const fileResponse = result.responses[0];
      if (fileResponse && fileResponse.responses) {
        fullText = fileResponse.responses.map(r => r.fullTextAnnotation ? r.fullTextAnnotation.text : "").join("\n");
      }
    } else {
      const [result] = await client.documentTextDetection({ image: { content: base64Data } });
      fullText = result.fullTextAnnotation ? result.fullTextAnnotation.text : '';
    }

    if (!fullText) throw new Error("No se pudo extraer texto del documento");

    // --- EXTRACCIÓN DE CABECERA (FACTURA Y FECHA) ---
    
    // Buscamos Factura, si no está, usamos Folio (como en tu PDF G.pdf)
    const facturaMatch = fullText.match(/FACTURA\s*[:#]?\s*(\d+)/i) || fullText.match(/FOLIO\s*[\[:]*\s*(\d+)/i);
    const numeroGuia = facturaMatch ? facturaMatch[1] : "No detectado";

    // Buscamos la fecha de factura o de orden
    const fechaMatch = fullText.match(/Fecha\s+(?:Factura|Orden|Emisión|Guía)[\s:]*(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/i);
    const fechaGuia = fechaMatch ? fechaMatch[1] : "No detectada";

    // --- EXTRACCIÓN DE PRODUCTOS (Lógica Global) ---
    // Limpiamos el texto de ruidos del OCR (comillas y saltos de línea innecesarios)
    const cleanText = fullText.replace(/"/g, '').replace(/[\r\n]+/g, ' ');

    const productos = [];
    // Patrón: SKU (80xxx) -> Texto (Nombre) -> SKU (Repetido) -> Cantidad
    const productRegex = /(80\d{3})\s+(.+?)\s+\1\s+(\d+)/g;
    
    let match;
    while ((match = productRegex.exec(cleanText)) !== null) {
      productos.push({
        sku: match[1],
        nombre: match[2].trim(),
        unidades: parseInt(match[3])
      });
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        numeroGuia,
        fecha: fechaGuia,
        productos,
        debugText: cleanText.substring(0, 200) // Para verificar si leyó bien
      })
    };

  } catch (error) {
    console.error("Error OCR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
