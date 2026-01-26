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
      console.error('❌ Credential error:', credError.message);
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
      console.error('❌ Vision API error:', visionError.message);
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
    console.log('✅ OCR detectado correctamente');
    
    const resultado = procesarKitchenCenter(fullText);

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
    console.error('❌ Handler error:', error);
    
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

// PROCESAR KITCHEN CENTER PDF
// Formato exacto:
// FOLIO [ 52 ]
// Fecha Orden de Compra : 14/01/2026
// Tienda : COQUINARIA PARQUE ARAUCO
// 80013 Cebolla Caramelizada... 80013 7 7 0 6.714 46.998
// Factura : 12364348 Fecha Factura : 14/01/2026

function procesarKitchenCenter(texto) {
  let numeroFactura = '';
  let fechaFactura = '';
  let fechaOrden = '';
  let folio = '';
  let tienda = '';
  let productos = [];
  
  // 1. DETECTAR FOLIO
  const folioMatch = texto.match(/FOLIO\s*\[\s*(\d+)\s*\]/);
  if (folioMatch) {
    folio = folioMatch[1];
    console.log(`📋 Folio detectado: ${folio}`);
  }
  
  // 2. DETECTAR NÚMERO DE FACTURA
  const facturaMatch = texto.match(/Factura\s*:\s*(\d+)/);
  if (facturaMatch) {
    numeroFactura = facturaMatch[1];
    console.log(`📄 Factura: ${numeroFactura}`);
  }
  
  // 3. DETECTAR FECHA FACTURA
  const fechaFacturaMatch = texto.match(/Fecha\s+Factura\s*:\s*(\d{1,2}\/\d{1,2}\/\d{4})/);
  if (fechaFacturaMatch) {
    fechaFactura = fechaFacturaMatch[1];
  }
  
  // 4. DETECTAR FECHA ORDEN
  const fechaOrdenMatch = texto.match(/Fecha\s+Orden\s+de\s+Compra\s*:\s*(\d{1,2}\/\d{1,2}\/\d{4})/);
  if (fechaOrdenMatch) {
    fechaOrden = fechaOrdenMatch[1];
  }
  
  // 5. DETECTAR TIENDA
  const tiendaMatch = texto.match(/Tienda\s*:\s*([^\n]+)/);
  if (tiendaMatch) {
    tienda = tiendaMatch[1].trim();
  }
  
  // 6. EXTRAER PRODUCTOS
  // Patrón: 80XXX descripción 80XXX cantidad recepción diferencia precio total
  const lineas = texto.split('\n');
  let productosEncontrados = 0;
  
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i].trim();
    
    // Buscar líneas que empiezan con 80XXX (SKU)
    if (/^80\d{3}\s/.test(linea)) {
      // Patrón: 80XXX descripción 80XXX cantidad recepción diferencia ...
      // El SKU aparece DOS VECES: al inicio y antes de los números
      const match = linea.match(/^(80\d{3})\s+(.+?)\s+(80\d{3})\s+(\d+)\s+(\d+)\s+(\d+)/);
      
      if (match) {
        const sku = match[1];
        const descripcion = match[2].trim();
        const cantidad = parseInt(match[4]);
        const recepcion = parseInt(match[5]);
        const diferencia = parseInt(match[6]);
        
        if (sku && descripcion && cantidad > 0) {
          productos.push({
            codigo: sku,
            descripcion: descripcion,
            cantidad: cantidad,
            recepcion: recepcion,
            diferencia: diferencia
          });
          productosEncontrados++;
          console.log(`  ✓ ${sku}: ${descripcion.substring(0, 50)}... → ${cantidad} unidades`);
        }
      }
    }
  }
  
  console.log(`✅ Total productos: ${productosEncontrados}`);
  
  return {
    numeroGuia: folio || numeroFactura,
    numeroFactura: numeroFactura,
    fechaFactura: fechaFactura,
    fechaOrden: fechaOrden,
    folio: folio,
    tienda: tienda,
    productos: productos,
    cantidadProductos: productos.length,
    totalUnidades: productos.reduce((sum, p) => sum + p.cantidad, 0)
  };
}
