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

  // ===== DETECTAR PRODUCTOS (MÚLTIPLES) =====
  // Buscar TODOS los códigos de 4-5 dígitos que cumplan criterios
  const codigosEncontrados = new Set(); // Evitar duplicados
  
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i];
    
    // Buscar códigos de 4-5 dígitos que estén solos en una línea
    if (linea.match(/^\d{4,5}$/)) {
      const codigo = linea;
      
      // Evitar duplicados
      if (codigosEncontrados.has(codigo)) {
        continue;
      }
      
      let descripcion = '';
      let cantidad = 0;
      
      // Buscar descripción en las siguientes líneas (texto largo)
      for (let j = i + 1; j < Math.min(i + 10, lineas.length); j++) {
        const siguienteLinea = lineas[j];
        
        // La descripción debe ser texto (no números puros) y no palabras clave
        if (siguienteLinea.length > 10 && 
            !siguienteLinea.match(/^[\d.,]+$/) && 
            !siguienteLinea.match(/CÓDIGO|DESCRIPCI|CANTIDAD|Ciudad|Comuna|Puerto|Nave|Nombre|Rut|Patente|KITCHEN|KENNEDY|Telefon|RUT|DIRECCI|EMISI/i)) {
          descripcion = siguienteLinea;
          break;
        }
      }
      
      // Buscar cantidad después de la descripción (número entre 1-9999)
      for (let j = i + 1; j < Math.min(i + 15, lineas.length); j++) {
        const siguienteLinea = lineas[j];
        
        if (siguienteLinea.match(/^\d{1,4}$/)) {
          const num = parseInt(siguienteLinea);
          if (num > 0 && num < 10000) {
            cantidad = num;
            break;
          }
        }
      }
      
      // Si encontramos código + descripción + cantidad, agregarlo
      if (codigo && descripcion && cantidad > 0) {
        productos.push({
          codigo: codigo,
          descripcion: descripcion,
          cantidad: cantidad
        });
        codigosEncontrados.add(codigo);
        
        console.log(`✅ Producto detectado: ${codigo} - ${descripcion.substring(0, 30)}... (${cantidad})`);
      }
    }
  }

  console.log(`🎯 Total productos encontrados: ${productos.length}`);

  return {
    numeroGuia,
    fechaEmision,
    productos,
    cantidadProductos: productos.length
  };
}
