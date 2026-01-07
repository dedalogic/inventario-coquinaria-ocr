// netlify/functions/process-guia.js
const { ImageAnnotatorClient } = require('@google-cloud/vision');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: JSON.stringify({ error: 'Solo se permite método POST' })
    };
  }

  try {
    if (!process.env.GOOGLE_CREDENTIALS) {
      throw new Error('GOOGLE_CREDENTIALS no configurado');
    }

    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    const client = new ImageAnnotatorClient({ credentials });

    const { image } = JSON.parse(event.body);
    if (!image) throw new Error('No se recibió imagen');

    const imageBytes = image.includes(',') ? image.split(',')[1] : image;

    const [result] = await client.documentTextDetection({
      image: { content: imageBytes }
    });

    const fullText = result.fullTextAnnotation?.text || '';
    if (!fullText) throw new Error('No se detectó texto');

    const guiaMatch = fullText.match(/N[°º]\s*(\d{10,})/i);
    const numeroGuia = guiaMatch ? guiaMatch[1] : null;
    const productos = extractProductos(fullText);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        numeroGuia,
        productos,
        textoCompleto: fullText
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        error: error.message
      })
    };
  }
};

function extractProductos(text) {
  const productos = [];
  const lines = text.split('\n');
  let inTable = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.match(/C[ÓO]DIGO.*DESCRIPCI[ÓO]N.*CANTIDAD/i)) {
      inTable = true;
      continue;
    }
    
    if (inTable && line) {
      const match = line.match(/^(\d{4,6})\s+(.+?)\s+(\d+)\s+[\d.,]+\s+[\d.,]+$/);
      if (match) {
        productos.push({
          codigo: match[1],
          descripcion: match[2].trim(),
          cantidad: parseInt(match[3])
        });
      }
    }
    
    if (line.match(/TOTAL|Patente:|Total Unidades/i)) {
      inTable = false;
    }
  }
  
  return productos;
}
