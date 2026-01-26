const { ImageAnnotatorClient } = require('@google-cloud/vision');

let visionClient;

const getVisionClient = () => {
  if (!visionClient) {
    if (!process.env.GOOGLE_CREDENTIALS) {
      throw new Error('GOOGLE_CREDENTIALS not configured in Netlify');
    }
    try {
      const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
      visionClient = new ImageAnnotatorClient({ credentials });
    } catch (error) {
      throw new Error('Invalid GOOGLE_CREDENTIALS format: ' + error.message);
    }
  }
  return visionClient;
};

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
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
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { image } = body;
    
    if (!image) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: 'No image provided' 
        })
      };
    }

    let client;
    try {
      client = getVisionClient();
    } catch (credError) {
      console.error('Credential error:', credError.message);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: credError.message
        })
      };
    }

    const base64Image = image.split(',')[1] || image;

    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Vision API timeout after 25s')), 25000)
    );

    const visionPromise = client.textDetection({
      image: { content: base64Image }
    });

    let result;
    try {
      [result] = await Promise.race([visionPromise, timeoutPromise]);
    } catch (visionError) {
      console.error('Vision API error:', visionError.message);
      return {
        statusCode: visionError.message.includes('timeout') ? 504 : 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Vision API error: ' + visionError.message
        })
      };
    }

    const detections = result.textAnnotations;
    
    if (!detections || detections.length === 0) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'No text detected in image'
        })
      };
    }

    const fullText = detections[0].description;
    console.log('OCR Raw text:', fullText.substring(0, 200) + '...');
    
    const resultado = procesarGuiaKitchenCenter(fullText);

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
    console.error('Handler error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message || 'Unknown error processing image'
      })
    };
  }
};

function procesarGuiaKitchenCenter(texto) {
  const lineas = texto.split('\n').map(l => l.trim()).filter(l => l);
  
  let numeroFactura = '';
  let fechaFactura = '';
  let fechaOrden = '';
  let folio = '';
  let tienda = '';
  let productos = [];
  
  // DETECTAR NÚMERO DE FACTURA
  const facturaMatch = texto.match(/Factura\s*[:\s]*(\d+)/i);
  if (facturaMatch) {
    numeroFactura = facturaMatch[1];
  }
  
  // DETECTAR FECHA FACTURA
  const fechaFacturaMatch = texto.match(/Fecha\s+Factura\s*[:\s]*(\d{2}\/\d{2}\/\d{4})/i);
  if (fechaFacturaMatch) {
    fechaFactura = fechaFacturaMatch[1];
  }
  
  // DETECTAR FECHA ORDEN DE COMPRA
  const fechaOrdenMatch = texto.match(/Fecha\s+Orden\s+de\s+Compra\s*[:\s]*(\d{2}\/\d{2}\/\d{4})/i);
  if (fechaOrdenMatch) {
    fechaOrden = fechaOrdenMatch[1];
  }
  
  // DETECTAR FOLIO - múltiples patrones
  let folioMatch = texto.match(/FOLIO\s*\[\s*(\d+)\s*\]/i);
  if (!folioMatch) {
    folioMatch = texto.match(/FOLIO\s*[:\s]*(\d+)/i);
  }
  if (!folioMatch) {
    folioMatch = texto.match(/Folio\s*[:\s]*(\d+)/i);
  }
  if (folioMatch) {
    folio = folioMatch[1];
  }
  
  // DETECTAR TIENDA
  const tiendaMatch = texto.match(/Tienda\s*[:\s]*(COQUINARIA[^\n]+)/i);
  if (tiendaMatch) {
    tienda = tiendaMatch[1];
  }
  
  // DETECTAR PRODUCTOS - más robusto
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i];
    
    // Buscar código que empiece con 80 y tenga 5 dígitos
    if (linea.match(/^80\d{3}$/)) {
      const codigo = linea;
      let descripcion = '';
      let cantidad = 0;
      let recepcion = 0;
      let diferencia = 0;
      
      // Buscar descripción en las siguientes líneas
      for (let j = i + 1; j < Math.min(i + 5, lineas.length); j++) {
        const siguienteLinea = lineas[j];
        
        if (siguienteLinea.length > 10 && 
            !siguienteLinea.match(/^[\d\s]+$/) &&
            !siguienteLinea.match(/^80\d{3}/) &&
            !siguienteLinea.match(/TOTAL|Proveedor|Dirección|Comuna|Ciudad|Factura|NETO|IVA|RUT|Orden/i)) {
          
          descripcion = siguienteLinea.replace(/80\d{3}\s*$/, '').trim();
          
          // Buscar números después de la descripción
          for (let k = j + 1; k < Math.min(j + 5, lineas.length); k++) {
            const numeroLinea = lineas[k];
            
            // Patrón: cantidad recepcion diferencia
            const numMatch = numeroLinea.match(/^(\d+)\s+(\d+)\s+(\d+)/);
            if (numMatch) {
              cantidad = parseInt(numMatch[1]);
              recepcion = parseInt(numMatch[2]);
              diferencia = parseInt(numMatch[3]);
              break;
            }
          }
          break;
        }
      }
      
      if (codigo && descripcion && cantidad > 0) {
        productos.push({
          codigo,
          descripcion,
          cantidad,
          recepcion,
          diferencia
        });
      }
    }
  }
  
  console.log(`✅ Productos detectados: ${productos.length}`);
  console.log(`📋 Folio: ${folio}, Factura: ${numeroFactura}`);
  
  return {
    numeroGuia: numeroFactura || folio,
    numeroFactura,
    fechaFactura,
    fechaOrden,
    folio,
    tienda,
    productos,
    cantidadProductos: productos.length,
    totalUnidades: productos.reduce((sum, p) => sum + p.cantidad, 0)
  };
}
