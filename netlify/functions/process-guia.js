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
  // Estrategia: Buscar índices de las palabras clave y extraer valores
  
  let indiceCodigo = -1;
  let indiceDescripcion = -1;
  let indiceCantidad = -1;
  
  // Encontrar los índices de los encabezados de columna
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i];
    
    if (linea.match(/^C[OÓ]DIGO$/i)) {
      indiceCodigo = i;
    }
    if (linea.match(/^DESCRIPCI[OÓ]N$/i)) {
      indiceDescripcion = i;
    }
    if (linea.match(/^CANTIDAD$/i)) {
      indiceCantidad = i;
    }
  }

  // Si encontramos los 3 encabezados, extraer los valores
  if (indiceCodigo > 0 && indiceDescripcion > 0 && indiceCantidad > 0) {
    // Buscar el código (siguiente línea después de "CÓDIGO")
    let codigo = '';
    for (let i = indiceCodigo + 1; i < lineas.length; i++) {
      if (lineas[i].match(/^\d{4,5}$/)) {
        codigo = lineas[i];
        break;
      }
    }
    
    // Buscar la descripción (siguiente línea después de "DESCRIPCIÓN")
    let descripcion = '';
    for (let i = indiceDescripcion + 1; i < lineas.length; i++) {
      const linea = lineas[i];
      // La descripción es texto, no números puros
      if (linea.length > 3 && !linea.match(/^[\d.,]+$/) && !linea.match(/^(Ciudad|Comuna|Puerto|Nave|Nombre|Rut|Patente)/i)) {
        descripcion = linea;
        break;
      }
    }
    
    // Buscar la cantidad (siguiente línea después de "CANTIDAD")
    let cantidad = 0;
    for (let i = indiceCantidad + 1; i < Math.min(indiceCantidad + 5, lineas.length); i++) {
      const linea = lineas[i];
      if (linea.match(/^\d{1,4}$/)) {
        const num = parseInt(linea);
        if (num > 0 && num < 10000) {
          cantidad = num;
          break;
        }
      }
    }
    
    // Si encontramos los 3 valores, agregar el producto
    if (codigo && descripcion && cantidad > 0) {
      productos.push({
        codigo: codigo,
        descripcion: descripcion,
        cantidad: cantidad
      });
    }
  }

  // MÉTODO ALTERNATIVO: Si no funcionó el anterior, buscar por proximidad
  if (productos.length === 0) {
    // Buscar códigos de 4-5 dígitos que estén solos en una línea
    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i];
      
      if (linea.match(/^\d{4,5}$/)) {
        const codigo = linea;
        let descripcion = '';
        let cantidad = 0;
        
        // Buscar descripción en las siguientes líneas (texto largo)
        for (let j = i + 1; j < Math.min(i + 10, lineas.length); j++) {
          const siguienteLinea = lineas[j];
          
          if (siguienteLinea.length > 10 && !siguienteLinea.match(/^[\d.,]+$/) && !siguienteLinea.match(/CÓDIGO|DESCRIPCI|CANTIDAD|Ciudad|Comuna/i)) {
            descripcion = siguienteLinea;
            break;
          }
        }
        
        // Buscar cantidad después de la descripción (número entre 1-999)
        for (let j = i + 1; j < Math.min(i + 15, lineas.length); j++) {
          const siguienteLinea = lineas[j];
          
          if (siguienteLinea.match(/^\d{1,3}$/)) {
            const num = parseInt(siguienteLinea);
            if (num > 0 && num < 1000) {
              cantidad = num;
              break;
            }
          }
        }
        
        // Si encontramos código + descripción + cantidad, agregarlo
        if (codigo && descripcion && cantidad > 0) {
          // Verificar que no sea una dirección o teléfono
          if (!descripcion.match(/KITCHEN|KENNEDY|Telefon|RUT|DIRECCI/i)) {
            productos.push({
              codigo: codigo,
              descripcion: descripcion,
              cantidad: cantidad
            });
            break; // Solo tomar el primer producto encontrado
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
