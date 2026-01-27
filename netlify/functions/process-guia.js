const { ImageAnnotatorClient } = require('@google-cloud/vision');

let visionClient;

const getVisionClient = () => {
  if (!visionClient) {
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    visionClient = new ImageAnnotatorClient({ credentials });
  }
  return visionClient;
};

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { image } = body;
    if (!image) throw new Error("No se recibió archivo");

    const client = getVisionClient();
    const base64Data = image.split(',')[1] || image;
    const isPDF = image.includes('application/pdf') || image.startsWith('JVBERi0');

    let fullText = "";

    if (isPDF) {
      // PROCESAMIENTO DE PDF
      const request = {
        requests: [{
          inputConfig: { mimeType: 'application/pdf', content: base64Data },
          features: [{ type: 'DOCUMENT_TEXT_DETECTION' }],
          pages: [1] 
        }]
      };
      const [result] = await client.batchAnnotateFiles(request);
      // Estructura de respuesta de Google Vision para archivos
      const responses = result.responses[0].responses || [];
      fullText = responses.map(r => r.fullTextAnnotation ? r.fullTextAnnotation.text : "").join("\n");
    } else {
      // PROCESAMIENTO DE IMAGEN
      const [result] = await client.documentTextDetection({ image: { content: base64Data } });
      fullText = result.fullTextAnnotation ? result.fullTextAnnotation.text : '';
    }

    if (!fullText) throw new Error("No se detectó texto");

    // --- EXTRACCIÓN ROBUSTA ---
    const facturaMatch = fullText.match(/(?:FACTURA|FOLIO|NRO)[\s:\[]*(\d+)/i);
    const fechaMatch = fullText.match(/Fecha[\s\w]*[:]*\s*(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/i);

    // Limpiamos texto para la regex de productos
    const textoLimpio = fullText.replace(/[\r\n]+/g, ' ').replace(/"/g, '');
    const productos = [];
    // Esta regex busca: SKU -> Nombre -> SKU Repetido -> Cantidad
    const regexKC = /(80\d{3})\s+(.+?)\s+\1\s+(\d+)/g;

    let match;
    while ((match = regexKC.exec(textoLimpio)) !== null) {
      productos.push({
        sku: match[1],
        nombre: match[2].trim(),
        unidades: parseInt(match[3])
      });
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        numeroGuia: facturaMatch ? facturaMatch[1] : "S/N",
        fecha: fechaMatch ? fechaMatch[1] : "S/F",
        productos
      })
    };

  } catch (err) {
    console.error("ERROR OCR:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message })
    };
  }
};
