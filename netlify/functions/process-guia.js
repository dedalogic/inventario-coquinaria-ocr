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
    console.log('Texto completo detectado:', fullText);

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

  // ===== DETECTAR FECHA DE EMISIÓN =====
  const fechaMatch = texto.match(/FECHA\s+EMISI[OÓ]N\s*[:\s]*(\d{2}\/\d{2}\/\d{4})/i);
  if (fechaMatch) {
    fechaEmision = fechaMatch[1];
  }

  console.log('Número de guía:', numeroGuia);
  console.log('Fecha emisión:', fechaEmision);

  // ===== DETECTAR PRODUCTOS =====
  
  // MÉTODO 1: Buscar la tabla de productos específicamente
  // Primero, encontrar dónde empieza y termina la tabla
  let enTabla = false;
  let lineaInicio = -1;
  let lineaFin = lineas.length;

  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i];
    
    // Detectar inicio de tabla (encabezado con CÓDIGO, DESCRIPCIÓN, CANTIDAD)
    if (linea.match(/C[OÓ]DIGO.*DESCRIPCI[OÓ]N.*CANTIDAD/i)) {
      enTabla = true;
      lineaInicio = i + 1;
      console.log('Inicio de tabla detectado en línea:', i);
      continue;
    }
    
    // Detectar fin de tabla (Total Unidades, Patente, etc)
    if (enTabla && linea.match(/Total\s+Unidades|Patente|Nro\s+Contenedor|Puerto/i)) {
      lineaFin = i;
      console.log('Fin de tabla detectado en línea:', i);
      break;
    }
  }

  // Si encontramos la tabla, procesar solo esas líneas
  if (lineaInicio > 0) {
    console.log('Procesando líneas de tabla desde', lineaInicio, 'hasta', lineaFin);
    
    for (let i = lineaInicio; i < lineaFin; i++) {
      const linea = lineas[i];
      
      // Patrón mejorado para detectar productos en la tabla
      // Formato: CÓDIGO (5 dígitos) + DESCRIPCIÓN + CANTIDAD + números decimales
      const match = linea.match(/^(\d{5})\s+(.+?)\s+(\d+)\s+[\d.,]+\s+[\d.,]+$/);
      
      if (match) {
        const codigo = match[1];
        let descripcion = match[2].trim();
        const cantidad = parseInt(match[3]);
        
        // Limpiar descripción de palabras clave que no son parte del nombre
        descripcion = descripcion
          .replace(/^(Set|Juego|Kit)\s*/i, '') // Remover prefijos comunes al inicio
          .trim();
        
        if (cantidad > 0 && cantidad < 10000) { // Validar cantidad razonable
          productos.push({
            codigo: codigo,
            descripcion: descripcion,
            cantidad: cantidad
          });
          console.log('Producto detectado:', { codigo, descripcion, cantidad });
        }
      }
    }
  }

  // MÉTODO 2: Si no se encontraron productos en la tabla, buscar por patrón más flexible
  if (productos.length === 0) {
    console.log('No se encontraron productos en tabla, buscando con patrón flexible...');
    
    // Buscar líneas que empiecen con 5 dígitos
    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i];
      
      // Saltar líneas que claramente no son productos
      if (linea.match(/ORDEN|NRO|Carga|FECHA|EMISI|RUT|DIRECCI|COMUNA|Ciudad|Tel/i)) {
        continue;
      }
      
      // Buscar patrón: 5 dígitos + texto + número
      const match = linea.match(/^(\d{5})\s+(.+)/);
      
      if (match) {
        const codigo = match[1];
        const resto = match[2];
        
        // Intentar extraer cantidad (número entre 1 y 4 dígitos antes de decimales)
        const cantMatch = resto.match(/\s+(\d{1,4})\s+[\d.,]+/);
        
        if (cantMatch) {
          const cantidad = parseInt(cantMatch[1]);
          
          // Extraer descripción (todo antes de la cantidad)
          const descripcion = resto.substring(0, resto.indexOf(cantMatch[0])).trim();
          
          if (cantidad > 0 && cantidad < 10000 && descripcion.length > 3) {
            productos.push({
              codigo: codigo,
              descripcion: descripcion,
              cantidad: cantidad
            });
            console.log('Producto detectado (método flexible):', { codigo, descripcion, cantidad });
          }
        }
      }
    }
  }

  console.log('Total de productos detectados:', productos.length);

  return {
    numeroGuia,
    fechaEmision,
    productos,
    cantidadProductos: productos.length
  };
}
