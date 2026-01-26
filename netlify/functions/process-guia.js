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
    console.log('🔍 OCR detectado');
    
    // Detectar qué tipo de documento es
    const esGuiaElectronica = /GUÍA DE DESPACHO\s+ELECTRÓNICA|N°\s*001\d+/i.test(fullText);
    const esKitchenCenter = /KITCHEN CENTER|FOLIO\s*\[\s*\d+\s*\]/i.test(fullText);
    
    console.log(`📄 Tipo: ${esGuiaElectronica ? 'Guía Electrónica' : esKitchenCenter ? 'Kitchen Center' : 'Desconocido'}`);
    
    let resultado;
    
    if (esGuiaElectronica) {
      resultado = procesarGuiaElectronica(fullText);
    } else if (esKitchenCenter) {
      resultado = procesarKitchenCenter(fullText);
    } else {
      resultado = procesarGuiaElectronica(fullText); // Intenta parsear como guía por defecto
    }
    
    console.log(`✅ Resultado: ${resultado.productos.length} productos, Guía: ${resultado.numeroGuia}`);

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

// PROCESAR GUÍA DE DESPACHO ELECTRÓNICA (foto)
function procesarGuiaElectronica(texto) {
  let numeroGuia = '';
  let fecha = '';
  let productos = [];
  
  // EXTRAER NÚMERO DE GUÍA - más flexible
  let guiaMatch = texto.match(/N°\s*(\d{12})/i);
  if (!guiaMatch) {
    guiaMatch = texto.match(/N°\s*(\d+)/i);
  }
  if (guiaMatch) {
    numeroGuia = guiaMatch[1];
  }
  
  // EXTRAER FECHA EMISIÓN
  let fechaMatch = texto.match(/FECHA\s+EMISIÓN\s*:\s*(\d{1,2}\/\d{1,2}\/\d{4})/i);
  if (!fechaMatch) {
    fechaMatch = texto.match(/FECHA\s+EMISIÓN\s*:\s*(\d{2}\.\d{2}\.\d{4})/i);
  }
  if (fechaMatch) {
    fecha = fechaMatch[1];
  }
  
  console.log(`📋 Guía Electrónica: ${numeroGuia}, Fecha: ${fecha}`);
  
  // EXTRAER PRODUCTOS - versión mejorada
  const lineas = texto.split('\n');
  let enTablaProductos = false;
  
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i].trim();
    
    // Detectar inicio de tabla de productos
    if ((linea.match(/CÓDIGO/i) && linea.match(/DESCRIPCIÓN/i)) || 
        (linea.match(/CODIGO/i) && linea.match(/CANTIDAD/i))) {
      enTablaProductos = true;
      console.log('📊 Detectada tabla de productos');
      continue;
    }
    
    // Salir de la tabla si llegamos a totales o resumen
    if (enTablaProductos && (linea.match(/TOTAL/i) || linea.match(/^Total/) || linea.match(/neto/i))) {
      break;
    }
    
    // Si estamos en la tabla y encontramos SKU
    if (enTablaProductos && linea.match(/^80\d{3}/)) {
      // Intenta varios patrones
      let sku = '';
      let descripcion = '';
      let cantidad = 0;
      
      // Patrón 1: 80XXX descripción cantidad unitario total
      let productoMatch = linea.match(/^(80\d{3})\s+(.+?)\s+(\d+)\s+[\d,.]+\s+[\d,.]+/);
      
      // Patrón 2: 80XXX | descripción | cantidad
      if (!productoMatch) {
        productoMatch = linea.match(/^(80\d{3})\s*\|\s*(.+?)\s*\|\s*(\d+)/);
      }
      
      // Patrón 3: 80XXX descripción cantidad (sin precio)
      if (!productoMatch) {
        productoMatch = linea.match(/^(80\d{3})\s+(.+?)\s+(\d+)$/);
      }
      
      // Patrón 4: Solo extraer SKU y buscar cantidad en siguiente línea
      if (!productoMatch) {
        const skuMatch = linea.match(/^(80\d{3})\s+(.+)/);
        if (skuMatch) {
          sku = skuMatch[1];
          descripcion = skuMatch[2].trim();
          
          // Buscar cantidad en línea siguiente
          if (i + 1 < lineas.length) {
            const proximaLinea = lineas[i + 1].trim();
            const cantMatch = proximaLinea.match(/^(\d+)\s+/);
            if (cantMatch) {
              cantidad = parseInt(cantMatch[1]);
            }
          }
        }
      }
      
      if (productoMatch) {
        sku = productoMatch[1];
        descripcion = productoMatch[2].trim();
        cantidad = parseInt(productoMatch[3]);
      }
      
      if (sku && cantidad > 0) {
        productos.push({
          codigo: sku,
          descripcion: descripcion,
          cantidad: cantidad,
          recepcion: cantidad,
          diferencia: 0
        });
        console.log(`  ✓ ${sku}: ${descripcion.substring(0, 40)}... (${cantidad} un.)`);
      }
    }
  }
  
  console.log(`✅ Productos encontrados en Guía Electrónica: ${productos.length}`);
  
  return {
    numeroGuia: numeroGuia,
    numeroFactura: numeroGuia,
    fechaFactura: fecha,
    fechaOrden: fecha,
    folio: numeroGuia,
    tienda: '',
    productos: productos,
    cantidadProductos: productos.length,
    totalUnidades: productos.reduce((sum, p) => sum + p.cantidad, 0)
  };
}

// PROCESAR KITCHEN CENTER (PDF)
function procesarKitchenCenter(texto) {
  let numeroFactura = '';
  let fechaFactura = '';
  let fechaOrden = '';
  let folio = '';
  let tienda = '';
  let productos = [];
  
  // DETECTAR FOLIO
  const folioMatch = texto.match(/FOLIO\s*\[\s*(\d+)\s*\]/i);
  if (folioMatch) {
    folio = folioMatch[1];
  }
  
  // DETECTAR NÚMERO DE FACTURA
  const facturaMatch = texto.match(/Factura\s*:\s*(\d+)/i);
  if (facturaMatch) {
    numeroFactura = facturaMatch[1];
  }
  
  // DETECTAR FECHA FACTURA
  const fechaFacturaMatch = texto.match(/Fecha\s+Factura\s*:\s*(\d{1,2}\/\d{1,2}\/\d{4})/i);
  if (fechaFacturaMatch) {
    fechaFactura = fechaFacturaMatch[1];
  }
  
  // DETECTAR FECHA ORDEN DE COMPRA
  const fechaOrdenMatch = texto.match(/Fecha\s+Orden\s+de\s+Compra\s*:\s*(\d{1,2}\/\d{1,2}\/\d{4})/i);
  if (fechaOrdenMatch) {
    fechaOrden = fechaOrdenMatch[1];
  }
  
  // DETECTAR TIENDA
  const tiendaMatch = texto.match(/Tienda\s*:\s*([^\n]+)/i);
  if (tiendaMatch) {
    tienda = tiendaMatch[1].trim();
  }
  
  console.log(`📋 Kitchen Center - Folio: ${folio}, Factura: ${numeroFactura}`);
  
  // PROCESAR PRODUCTOS
  // Formato: 80XXX descripción 80XXX cantidad recepción diferencia ...
  const lineas = texto.split('\n');
  
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i].trim();
    
    // Buscar líneas que empiezan con 80XXX
    if (linea.match(/^80\d{3}\s/)) {
      // Patrón: 80XXX descripción 80XXX cantidad recepción diferencia precio total
      const productoMatch = linea.match(
        /^(80\d{3})\s+(.+?)\s+(80\d{3})\s+(\d+)\s+(\d+)\s+(\d+)/
      );
      
      if (productoMatch) {
        const sku = productoMatch[1];
        const descripcion = productoMatch[2].trim();
        const cantidad = parseInt(productoMatch[4]);
        const recepcion = parseInt(productoMatch[5]);
        const diferencia = parseInt(productoMatch[6]);
        
        if (sku && cantidad > 0) {
          productos.push({
            codigo: sku,
            descripcion: descripcion,
            cantidad: cantidad,
            recepcion: recepcion,
            diferencia: diferencia
          });
          console.log(`  ✓ ${sku}: ${descripcion.substring(0, 40)}... (${cantidad} un.)`);
        }
      }
    }
  }
  
  // Eliminar duplicados
  const productosUnicos = [];
  const skusVistos = new Set();
  
  productos.forEach(prod => {
    if (!skusVistos.has(prod.codigo)) {
      skusVistos.add(prod.codigo);
      productosUnicos.push(prod);
    }
  });
  
  return {
    numeroGuia: numeroFactura || folio,
    numeroFactura,
    fechaFactura,
    fechaOrden,
    folio,
    tienda,
    productos: productosUnicos,
    cantidadProductos: productosUnicos.length,
    totalUnidades: productosUnicos.reduce((sum, p) => sum + p.cantidad, 0)
  };
}
