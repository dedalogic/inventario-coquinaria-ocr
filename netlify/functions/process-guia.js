// process-guia.js - Usando Gemini 2.0 Flash (gratuito hasta 1500 req/día)

exports.handler = async (event) => {
  // CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: ''
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { image } = body;

    if (!image) {
      throw new Error("No se recibió la imagen");
    }

    // Extraer base64 limpio (sin el prefijo data:image/...)
    const base64Data = image.includes(',') ? image.split(',')[1] : image;
    
    // Detectar tipo de archivo
    let mimeType = 'image/jpeg';
    if (image.includes('data:image/png')) mimeType = 'image/png';
    if (image.includes('data:application/pdf') || image.startsWith('JVBERi0')) mimeType = 'application/pdf';

    // Llamar a Gemini 2.0 Flash
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                inline_data: {
                  mime_type: mimeType,
                  data: base64Data
                }
              },
              {
                text: `Analiza esta imagen de una guía de despacho o factura de Kitchen Center Chile.

EXTRAE LA SIGUIENTE INFORMACIÓN:

1. NÚMERO DE FACTURA o GUÍA (busca "Factura", "Folio", "N°", "Nro")
2. FECHA del documento
3. LISTA DE PRODUCTOS con formato:
   - Código/SKU (números de 5 dígitos que empiezan con 80, ej: 80123)
   - Descripción del producto
   - Cantidad/Unidades

RESPONDE ÚNICAMENTE en este formato JSON exacto, sin markdown ni explicaciones:
{
  "numeroFactura": "123456",
  "folio": "123456",
  "fechaFactura": "27/01/2025",
  "tienda": "nombre de tienda si aparece",
  "productos": [
    {"codigo": "80123", "descripcion": "Nombre del producto", "cantidad": 5},
    {"codigo": "80456", "descripcion": "Otro producto", "cantidad": 3}
  ],
  "totalUnidades": 8
}

IMPORTANTE:
- Los SKU de Kitchen Center SIEMPRE empiezan con 80 y tienen 5 dígitos
- Si un producto aparece varias veces, suma las cantidades
- Si no encuentras algún dato, usa "" para texto o 0 para números
- Responde SOLO el JSON, nada más`
              }
            ]
          }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 4096
          }
        })
      }
    );

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Error Gemini:', errorText);
      throw new Error(`Error de Gemini: ${geminiResponse.status}`);
    }

    const geminiData = await geminiResponse.json();
    
    // Extraer el texto de la respuesta
    const responseText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    if (!responseText) {
      throw new Error('Gemini no devolvió respuesta');
    }

    // Limpiar el JSON (quitar posibles backticks de markdown)
    let cleanJson = responseText
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    // Parsear el JSON
    let parsedData;
    try {
      parsedData = JSON.parse(cleanJson);
    } catch (parseError) {
      console.error('JSON recibido:', cleanJson);
      throw new Error('No se pudo parsear la respuesta de Gemini');
    }

    // Validar y limpiar productos
    const productosLimpios = (parsedData.productos || [])
      .filter(p => p.codigo && p.codigo.toString().startsWith('80'))
      .map(p => ({
        codigo: p.codigo.toString(),
        descripcion: p.descripcion || '',
        cantidad: parseInt(p.cantidad) || 0
      }));

    // Calcular total si no viene
    const totalUnidades = parsedData.totalUnidades || 
      productosLimpios.reduce((sum, p) => sum + p.cantidad, 0);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        success: true,
        numeroFactura: parsedData.numeroFactura || parsedData.folio || "S/N",
        folio: parsedData.folio || parsedData.numeroFactura || "S/N",
        fechaFactura: parsedData.fechaFactura || "",
        tienda: parsedData.tienda || "",
        productos: productosLimpios,
        totalUnidades: totalUnidades,
        // Compatibilidad con formato antiguo
        numeroGuia: parsedData.numeroFactura || parsedData.folio || "S/N",
        fecha: parsedData.fechaFactura || ""
      })
    };

  } catch (err) {
    console.error('Error en process-guia:', err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        success: false,
        error: err.message || 'Error procesando la guía'
      })
    };
  }
};
