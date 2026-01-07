// netlify/functions/process-guia.js
const { ImageAnnotatorClient } = require('@google-cloud/vision');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { image } = JSON.parse(event.body);
    
    if (!image) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'No image provided' })
      };
    }

    if (!process.env.GOOGLE_CREDENTIALS) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Google Vision API credentials not configured',
          success: false 
        })
      };
    }

    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    const client = new ImageAnnotatorClient({ credentials });

    const base64Image = image.split(',')[1] || image;

    const [result] = await client.textDetection({
      image: { content: base64Image }
    });

    const detections = result.textAnnotations;
    
    if (!detections || detections.length === 0) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'No se detectó texto en la imagen'
        })
      };
    }

    const fullText = detections[0].description;
    const resultado = procesarTextoGuia(fullText);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        ...resultado,
        textoCompleto: fullText
      })
    };

  } catch (error) {
    console.error('Error procesando imagen:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error.message || 'Error procesando la imagen',
        success: false
      })
    };
  }
};

function procesarTextoGuia(texto) {
  const lineas = texto.split('\n').map(l => l.trim()).filter(l => l);
  
  let numeroGuia = '';
  let productos = [];
  let fechaEmision = '';

  // Detectar número de guía
  const patronesGuia = [
    /N[°º\s]*(\d{10})/i,
    /GUIA.*?(\d{10})/i,
  ];

  for (const patron of patronesGuia) {
    const match = texto.match(patron);
    if (match) {
      numeroGuia = match[1];
      break;
    }
  }

  // Detectar fecha de emisión
  const fechaMatch = texto.match(/FECHA\s+EMISI[OÓ]N\s*[:\s]*(\d{2}\/\d{2}\/\d{4})/i);
  if (fechaMatch) {
    fechaEmision = fechaMatch[1];
  }

  // MÉTODO SIMPLIFICADO: Buscar cualquier línea con patrón de producto
  // Formato esperado: 80991 Set 3 cuchillos para quesos Coquinaria 4 16.798 67.193
  
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i];
    
    // Saltar líneas que claramente NO son productos
    if (linea.match(/KITCHEN|RUT|GUIA|DIRECCI|COMUNA|FECHA|ORDEN|NRO|Carga|Ciudad|Tel|Patente|Puerto|Contenedor|Booking|Total\s+Unidades/i)) {
      continue;
    }
    
    // Buscar líneas que empiecen con exactamente 5 dígitos
    if (/^\d{5}\s/.test(linea)) {
      // Intentar extraer: CÓDIGO + DESCRIPCIÓN + CANTIDAD + decimales
      
      // Patrón más flexible: código de 5 dígitos, texto, luego números
      const match = linea.match(/^(\d{5})\s+(.+?)\s+(\d+)\s+[\d.,]+/);
      
      if (match) {
        const codigo = match[1];
        const descripcion = match[2].trim();
        const cantidad = parseInt(match[3]);
        
        // Validar que la cantidad sea razonable (no es un precio)
        if (cantidad > 0 && cantidad < 1000) {
          productos.push({
            codigo: codigo,
            descripcion: descripcion,
            cantidad: cantidad
          });
        }
      } else {
        // Si no coincide con el patrón estricto, intentar patrón más flexible
        const partes = linea.split(/\s+/);
        if (partes.length >= 3) {
          const codigo = partes[0];
          
          // Buscar el primer número que podría ser cantidad (después de la descripción)
          for (let j = partes.length - 1; j >= 1; j--) {
            const num = parseInt(partes[j]);
            if (!isNaN(num) && num > 0 && num < 1000 && partes[j].length <= 4) {
              // Este podría ser la cantidad
              const descripcion = partes.slice(1, j).join(' ');
              
              if (descripcion.length > 3) {
                productos.push({
                  codigo: codigo,
                  descripcion: descripcion,
                  cantidad: num
                });
                break;
              }
            }
          }
        }
      }
    }
  }

  return {
    numeroGuia,
    fechaEmision,
    productos,
    cantidadProductos: productos.length
  };
}
