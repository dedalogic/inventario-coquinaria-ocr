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

    // Verificar que las credenciales están configuradas
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

    // Configurar credenciales desde variable de entorno
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    const client = new ImageAnnotatorClient({ credentials });

    // Extraer base64 (remover data:image/...;base64,)
    const base64Image = image.split(',')[1] || image;

    // Llamar a Google Vision API
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

    // El primer elemento contiene todo el texto detectado
    const fullText = detections[0].description;
    console.log('Texto detectado:', fullText);

    // Procesar el texto para extraer información
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

// Función para procesar el texto y extraer información
function procesarTextoGuia(texto) {
  const lineas = texto.split('\n').map(l => l.trim()).filter(l => l);
  
  let numeroGuia = '';
  let productos = [];

  // Buscar número de guía en el formato de Kitchen Center
  // Patrón: N° seguido de dígitos (ejemplo: N° 0012360788)
  const patronesGuia = [
    /N[°º\s]*(\d{10})/i,           // N° 0012360788
    /N[°º\s]*(\d+)/i,               // N° seguido de números
    /GUIA.*?(\d{10})/i,             // GUÍA DE DESPACHO ... números
    /DESPACHO.*?(\d{8,})/i,         // DESPACHO ... números largos
  ];

  for (const patron of patronesGuia) {
    const match = texto.match(patron);
    if (match) {
      numeroGuia = match[1];
      break;
    }
  }

  // Si no se encontró, intentar extraer de la primera línea con números largos
  if (!numeroGuia) {
    const matchNumLargo = texto.match(/(\d{8,})/);
    if (matchNumLargo) {
      numeroGuia = matchNumLargo[1];
    } else {
      numeroGuia = 'GD-' + Math.floor(Math.random() * 100000);
    }
  }

  console.log('Número de guía detectado:', numeroGuia);
  console.log('Texto completo a analizar:', texto);

  // MÉTODO 1: Buscar productos en formato tabular (Kitchen Center)
  // Formato: CÓDIGO | DESCRIPCIÓN | CANTIDAD | PUNITARIO | TOTAL
  // Ejemplo: 80991 | Set 3 cuchillos para quesos Coquinaria | 4 | 16.798 | 67.193
  
  // Buscar bloques que contengan código de 5 dígitos
  const patronTabular = /(\d{5})\s+([^\d]+?)\s+(\d+)\s+[\d.,]+\s+[\d.,]+/gi;
  let match;
  
  while ((match = patronTabular.exec(texto)) !== null) {
    const sku = match[1];
    let descripcion = match[2].trim();
    const cantidad = parseInt(match[3]);

    // Limpiar descripción (remover palabras comunes de encabezados)
    descripcion = descripcion
      .replace(/DESCRIPCI[OÓ]N/gi, '')
      .replace(/Set\s+/gi, 'Set ')
      .trim();

    if (sku && cantidad > 0 && descripcion) {
      productos.push({
        codigo: sku,
        descripcion: descripcion.substring(0, 80),
        cantidad: cantidad
      });
    }
  }

  console.log('Productos encontrados (método tabular):', productos.length);

  // MÉTODO 2: Si no se encontró nada, buscar línea por línea
  if (productos.length === 0) {
    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i];
      
      // Buscar SKU de 5 dígitos al inicio de la línea
      const skuMatch = linea.match(/^(\d{5})\s+(.+)/);
      
      if (skuMatch) {
        const sku = skuMatch[1];
        const restoDeLínea = skuMatch[2];
        
        // Extraer descripción y cantidad
        // Buscar números al final que podrían ser cantidad, punitario, total
        const numerosMatch = restoDeLínea.match(/^(.+?)\s+(\d+)\s+[\d.,]+/);
        
        if (numerosMatch) {
          const descripcion = numerosMatch[1].trim();
          const cantidad = parseInt(numerosMatch[2]);
          
          if (cantidad > 0 && descripcion) {
            productos.push({
              codigo: sku,
              descripcion: descripcion.substring(0, 80),
              cantidad: cantidad
            });
          }
        }
      }
    }
  }

  console.log('Productos encontrados (método línea por línea):', productos.length);

  // MÉTODO 3: Buscar patrones específicos conocidos
  if (productos.length === 0) {
    // Patrón: 5 dígitos + texto + número solo
    const patronSimple = /(\d{5})\s+(.+?)\s+(\d+)\s*$/gm;
    let matchSimple;
    
    while ((matchSimple = patronSimple.exec(texto)) !== null) {
      const sku = matchSimple[1];
      const descripcion = matchSimple[2].trim();
      const cantidad = parseInt(matchSimple[3]);

      if (sku && cantidad > 0 && cantidad < 1000) { // Cantidad razonable
        productos.push({
          codigo: sku,
          descripcion: descripcion.substring(0, 80),
          cantidad: cantidad
        });
      }
    }
  }

  console.log('Total de productos detectados:', productos.length);

  return {
    numeroGuia,
    productos,
    cantidadProductos: productos.length
  };
}
