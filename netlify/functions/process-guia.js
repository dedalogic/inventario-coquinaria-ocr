const { ImageAnnotatorClient } = require('@google-cloud/vision');

let visionClient;

const getVisionClient = () => {
  if (!visionClient) {
    if (!process.env.GOOGLE_CREDENTIALS) {
      throw new Error('GOOGLE_CREDENTIALS not configured');
    }
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    visionClient = new ImageAnnotatorClient({ credentials });
  }
  return visionClient;
};

exports.handler = async (event) => {
  try {
    // Parse request
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { image } = body;

    if (!image) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, error: 'No image' })
      };
    }

    // Get Vision client
    const client = getVisionClient();
    const base64Image = image.split(',')[1] || image;

    // Call Vision API
    const [result] = await client.textDetection({
      image: { content: base64Image }
    });

    const detections = result.textAnnotations;
    if (!detections || detections.length === 0) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          success: false, 
          error: 'No text detected' 
        })
      };
    }

    const fullText = detections[0].description;
    const resultado = procesarKitchenCenter(fullText);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        ...resultado,
        textoCompleto: fullText
      })
    };

  } catch (error) {
    console.error('ERROR:', error.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};

function procesarKitchenCenter(texto) {
  let numeroFactura = '';
  let fechaFactura = '';
  let fechaOrden = '';
  let folio = '';
  let tienda = '';
  let productos = [];

  // FOLIO
  const folioMatch = texto.match(/FOLIO\s*\[\s*(\d+)\s*\]/);
  if (folioMatch) folio = folioMatch[1];

  // FACTURA
  const facturaMatch = texto.match(/Factura\s*:\s*(\d+)/);
  if (facturaMatch) numeroFactura = facturaMatch[1];

  // FECHA FACTURA
  const fechaFacturaMatch = texto.match(/Fecha\s+Factura\s*:\s*(\d{1,2}\/\d{1,2}\/\d{4})/);
  if (fechaFacturaMatch) fechaFactura = fechaFacturaMatch[1];

  // FECHA ORDEN
  const fechaOrdenMatch = texto.match(/Fecha\s+Orden\s+de\s+Compra\s*:\s*(\d{1,2}\/\d{1,2}\/\d{4})/);
  if (fechaOrdenMatch) fechaOrden = fechaOrdenMatch[1];

  // TIENDA
  const tiendaMatch = texto.match(/Tienda\s*:\s*([^\n]+)/);
  if (tiendaMatch) tienda = tiendaMatch[1].trim();

  // PRODUCTOS
  const lineas = texto.split('\n');
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i].trim();

    if (/^80\d{3}\s/.test(linea)) {
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
        }
      }
    }
  }

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
