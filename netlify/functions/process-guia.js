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

  // ===== DETECTAR NÚMERO DE GUÍA =====
  const patronesGuia = [
    /N[°º]\s*(\d{10})/i,
    /(\d{10})/
  ];

  for (const patron of patronesGuia) {
    const match = texto.match(patron);
    if (match) {
      numeroGuia = match[1];
      break;
    }
  }

  // ===== DETECTAR FECHA =====
  const fechaMatch = texto.match(/FECHA\s+EMISI[OÓ]N\s*[:\s]*(\d{2}\/\d{2}\/\d{4})/i);
  if (fechaMatch) {
    fechaEmision = fechaMatch[1];
  }

  // ===== DETECTAR PRODUCTOS =====
  // Buscar la línea que contiene "CÓDIGO" para saber dónde empieza la tabla
  let indiceTabla = -1;
  for (let i = 0; i < lineas.length; i++) {
    if (lineas[i].match(/^C[OÓ]DIGO\s*$/i) || lineas[i].match(/C[OÓ]DIGO.*DESCRIPCI[OÓ]N/i)) {
      indiceTabla = i;
      break;
    }
  }

  if (indiceTabla === -1) {
    // Si no encuentra "CÓDIGO" solo, buscar cualquier línea con ese patrón
    for (let i = 0; i < lineas.length; i++) {
      if (lineas[i].match(/C[OÓ]DIGO/i)) {
        indiceTabla = i;
        break;
      }
    }
  }

  // Procesar desde la línea después de "CÓDIGO" hasta encontrar algo que no sea producto
  if (indiceTabla >= 0) {
    for (let i = indiceTabla + 1; i < lineas.length; i++) {
      const linea = lineas[i];
      
      // Detener si encontramos el fin de la tabla
      if (linea.match(/Total\s+Unidades|Patente|Puerto|Nave\s+Transportadora/i)) {
        break;
      }
      
      // Buscar líneas que empiecen con 4 o 5 dígitos (código de producto)
      const codigoMatch = linea.match(/^(\d{4,5})\s*$/);
      
      if (codigoMatch) {
        // El código está solo en una línea, buscar descripción y cantidad en las siguientes
        const codigo = codigoMatch[1];
        let descripcion = '';
        let cantidad = 0;
        
        // Buscar en las siguientes líneas
        for (let j = i + 1; j < Math.min(i + 5, lineas.length); j++) {
          const siguienteLinea = lineas[j];
          
          // Si encuentra otra línea con código, detener
          if (siguienteLinea.match(/^\d{4,5}\s*$/)) {
            break;
          }
          
          // Si la línea tiene texto y números, podría ser descripción + cantidad
          if (descripcion === '' && siguienteLinea.length > 3 && !siguienteLinea.match(/^\d+$/)) {
            descripcion = siguienteLinea;
          }
          
          // Buscar la cantidad (número solo, entre 1 y 999)
          if (cantidad === 0 && siguienteLinea.match(/^\d{1,3}$/)) {
            const num = parseInt(siguienteLinea);
            if (num > 0 && num < 1000) {
              cantidad = num;
              break;
            }
          }
        }
        
        if (descripcion && cantidad > 0) {
          productos.push({
            codigo: codigo,
            descripcion: descripcion,
            cantidad: cantidad
          });
        }
      } else {
        // Intentar detectar si todo está en una sola línea
        // Formato: CÓDIGO DESCRIPCIÓN CANTIDAD P.UNITARIO TOTAL
        const match = linea.match(/^(\d{4,5})\s+(.+?)\s+(\d{1,3})\s+[\d.,]+\s+[\d.,]+$/);
        
        if (match) {
          const codigo = match[1];
          const descripcion = match[2].trim();
          const cantidad = parseInt(match[3]);
          
          if (cantidad > 0 && cantidad < 1000 && descripcion.length > 3) {
            productos.push({
              codigo: codigo,
              descripcion: descripcion,
              cantidad: cantidad
            });
          }
        }
      }
    }
  }

  // Si no se encontraron productos con el método anterior, buscar de forma más agresiva
  if (productos.length === 0) {
    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i];
      
      // Saltar líneas que claramente no son productos
      if (linea.match(/KITCHEN|RUT|GUIA|DIRECCI|COMUNA|FECHA|ORDEN|Ciudad|Tel|SEÑORES|Total\s+Unidades/i)) {
        continue;
      }
      
      // Buscar patrón: código de 4-5 dígitos + texto + números
      const match = linea.match(/(\d{4,5})\s+(.+?)\s+(\d{1,3})\s+[\d.,]+/);
      
      if (match) {
        const codigo = match[1];
        const descripcion = match[2].trim();
        const cantidad = parseInt(match[3]);
        
        // Validar que no sea una línea de encabezado o datos administrativos
        if (cantidad > 0 && cantidad < 1000 && descripcion.length > 5 && !descripcion.match(/CÓDIGO|DESCRIPCI|CANTIDAD/i)) {
          productos.push({
            codigo: codigo,
            descripcion: descripcion,
            cantidad: cantidad
          });
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
