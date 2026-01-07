import React, { useState } from 'react';
import { Upload, CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function GuiaScanner() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const processImage = async (file) => {
    setLoading(true);
    setError(null);
    setProgress(30);
    
    try {
      // Convertir imagen a base64
      const reader = new FileReader();
      const base64 = await new Promise((resolve, reject) => {
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      setImage(base64);
      setProgress(50);

      // Llamar a la función de Netlify
      const response = await fetch('/.netlify/functions/process-guia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: base64 })
      });

      setProgress(80);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error procesando la imagen');
      }

      const data = await response.json();
      setProgress(100);
      setResultado(data);

    } catch (err) {
      console.error('Error:', err);
      setError('Error procesando la imagen: ' + err.message);
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validar tamaño (máx 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('La imagen es muy grande. Máximo 10MB.');
        return;
      }
      processImage(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Escáner de Guías de Despacho
          </h1>
          <p className="text-gray-600">
            Sube una foto de tu guía y extrae automáticamente el número y productos
          </p>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-indigo-300 rounded-xl cursor-pointer hover:bg-indigo-50 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-16 h-16 text-indigo-400 mb-4" />
              <p className="mb-2 text-lg text-gray-700">
                <span className="font-semibold">Click para subir</span> o arrastra tu guía
              </p>
              <p className="text-sm text-gray-500">PNG, JPG (máx. 10MB)</p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={loading}
            />
          </label>
        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Loader2 className="w-6 h-6 text-blue-600 mr-3 animate-spin" />
                <span className="text-blue-800 font-medium">
                  Procesando guía con Google Vision AI...
                </span>
              </div>
              <span className="text-blue-600 font-bold">{progress}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 font-semibold mb-2">{error}</p>
                <p className="text-red-600 text-sm">
                  Verifica que la imagen sea clara y que la guía esté completa.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Resultados */}
        {resultado && resultado.success && (
          <div className="space-y-6">
            {/* Número de Guía */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                Información de Guía
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg p-6">
                <span className="text-sm text-gray-600 font-medium">Nº Guía de Despacho:</span>
                <p className="text-4xl font-bold text-red-600 mt-2 tracking-wider">
                  {resultado.numeroGuia || 'No detectado'}
                </p>
              </div>
            </div>

            {/* Productos */}
            {resultado.productos && resultado.productos.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Productos Detectados ({resultado.productos.length})
                </h2>
                
                <div className="space-y-3">
                  {resultado.productos.map((prod, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="text-xs font-mono bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold">
                              Código: {prod.codigo}
                            </span>
                            <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                              Cantidad: {prod.cantidad}
                            </span>
                          </div>
                          <p className="text-gray-800">{prod.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resumen */}
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Total de productos:</span>
                    <span className="text-2xl font-bold text-indigo-600">
                      {resultado.productos.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-700 font-medium">Total de unidades:</span>
                    <span className="text-2xl font-bold text-indigo-600">
                      {resultado.productos.reduce((sum, p) => sum + p.cantidad, 0)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {resultado.productos && resultado.productos.length === 0 && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-semibold">
                      No se detectaron productos en la tabla
                    </p>
                    <p className="text-yellow-700 text-sm mt-1">
                      Asegúrate de que la imagen muestre claramente la tabla de productos.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Texto completo (debug) */}
            <details className="bg-white rounded-xl shadow-lg p-6">
              <summary className="font-semibold text-gray-700 cursor-pointer hover:text-indigo-600">
                🔍 Ver texto completo detectado (para debug)
              </summary>
              <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto max-h-96 whitespace-pre-wrap">
                {resultado.textoCompleto}
              </pre>
            </details>
          </div>
        )}

        {/* Preview de la imagen */}
        {image && (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Imagen Original</h2>
            <img 
              src={image} 
              alt="Guía de despacho" 
              className="max-w-full rounded-lg border-2 border-gray-200 shadow-md" 
            />
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Procesado con Google Cloud Vision AI</p>
        </div>
      </div>
    </div>
  );
}
