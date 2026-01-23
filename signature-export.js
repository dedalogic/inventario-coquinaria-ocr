/**
 * MÓDULO: Firma Digital y Exportación de Reportes
 * Maneja: Canvas de firma, validación, Excel, PDF, WhatsApp/Email
 */

let signatureCanvas = null;
let signatureContext = null;
let isDrawing = false;
let currentSignerName = '';
let currentSignatureImageData = '';

/* ===================================
   A. INICIALIZAR CANVAS DE FIRMA
   =================================== */

function initSignatureCanvas() {
    signatureCanvas = document.getElementById('signatureCanvas');
    if (!signatureCanvas) return;

    signatureContext = signatureCanvas.getContext('2d');
    
    // Configurar tamaño del canvas
    const rect = signatureCanvas.getBoundingClientRect();
    signatureCanvas.width = rect.width * window.devicePixelRatio;
    signatureCanvas.height = rect.height * window.devicePixelRatio;
    signatureContext.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    // Fondo blanco
    signatureContext.fillStyle = '#ffffff';
    signatureContext.fillRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    signatureContext.strokeStyle = '#000000';
    signatureContext.lineWidth = 2;
    signatureContext.lineCap = 'round';
    signatureContext.lineJoin = 'round';

    // Eventos táctiles y mouse
    setupSignatureEvents();
}

function setupSignatureEvents() {
    signatureCanvas.addEventListener('mousedown', startDrawing);
    signatureCanvas.addEventListener('mousemove', draw);
    signatureCanvas.addEventListener('mouseup', stopDrawing);
    signatureCanvas.addEventListener('mouseout', stopDrawing);

    signatureCanvas.addEventListener('touchstart', handleTouchStart);
    signatureCanvas.addEventListener('touchmove', handleTouchMove);
    signatureCanvas.addEventListener('touchend', stopDrawing);
    signatureCanvas.addEventListener('touchcancel', stopDrawing);
}

function startDrawing(e) {
    isDrawing = true;
    const rect = signatureCanvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * window.devicePixelRatio;
    const y = (e.clientY - rect.top) * window.devicePixelRatio;
    signatureContext.beginPath();
    signatureContext.moveTo(x, y);
}

function handleTouchStart(e) {
    isDrawing = true;
    const rect = signatureCanvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * window.devicePixelRatio;
    const y = (touch.clientY - rect.top) * window.devicePixelRatio;
    signatureContext.beginPath();
    signatureContext.moveTo(x, y);
}

function draw(e) {
    if (!isDrawing) return;
    const rect = signatureCanvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * window.devicePixelRatio;
    const y = (e.clientY - rect.top) * window.devicePixelRatio;
    signatureContext.lineTo(x, y);
    signatureContext.stroke();
}

function handleTouchMove(e) {
    if (!isDrawing) return;
    const rect = signatureCanvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * window.devicePixelRatio;
    const y = (touch.clientY - rect.top) * window.devicePixelRatio;
    signatureContext.lineTo(x, y);
    signatureContext.stroke();
}

function stopDrawing() {
    isDrawing = false;
    signatureContext.closePath();
}

function clearSignature() {
    if (!signatureCanvas) return;
    signatureContext.fillStyle = '#ffffff';
    signatureContext.fillRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    currentSignatureImageData = '';
}

/* ===================================
   B. MODAL DE FIRMA
   =================================== */

function showSignatureModal() {
    const modal = document.getElementById('signatureModal');
    if (modal) {
        modal.classList.add('show');
        setTimeout(() => {
            initSignatureCanvas();
        }, 100);
    }
}

function closeSignatureModal() {
    const modal = document.getElementById('signatureModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function validateAndSaveSignature() {
    const nameInput = document.getElementById('signerName');
    const name = nameInput ? nameInput.value.trim() : '';

    if (!name) {
        alert('⚠️ Por favor ingresa tu nombre completo');
        return false;
    }

    // Verificar si hay firma dibujada (comparando con canvas vacío)
    const imageData = signatureContext.getImageData(0, 0, signatureCanvas.width, signatureCanvas.height);
    const data = imageData.data;
    let hasSignature = false;

    for (let i = 0; i < data.length; i += 4) {
        // Si hay píxeles que no son blancos (255, 255, 255, 255)
        if (data[i] !== 255 || data[i + 1] !== 255 || data[i + 2] !== 255) {
            hasSignature = true;
            break;
        }
    }

    if (!hasSignature) {
        alert('⚠️ Por favor dibuja tu firma');
        return false;
    }

    currentSignerName = name;
    currentSignatureImageData = signatureCanvas.toDataURL('image/png');
    closeSignatureModal();
    showExportOptions();
    return true;
}

/* ===================================
   C. FUNCIONES DE CÁLCULO
   =================================== */

function calculateDifferences() {
    // Simular stock anterior (en una app real, esto vendría de una base de datos)
    const previousDay = getPreviousStockData();
    
    const differences = [];
    const summary = {
        totalProducts: 0,
        productsWithDifferences: 0,
        okProducts: 0,
        totalMissing: 0,
        totalExtra: 0,
        missingCount: 0,
        extraCount: 0
    };

    products.forEach(product => {
        const current = todayData[product.sku] || 0;
        const previous = previousDay[product.sku] || 0;
        const difference = current - previous;

        summary.totalProducts++;

        if (difference !== 0) {
            summary.productsWithDifferences++;
            summary.totalMissing += difference < 0 ? Math.abs(difference) : 0;
            summary.totalExtra += difference > 0 ? difference : 0;

            if (difference < 0) {
                summary.missingCount++;
            } else {
                summary.extraCount++;
            }

            differences.push({
                sku: product.sku,
                name: product.name,
                brand: product.brand,
                previous,
                current,
                difference,
                percentChange: previous !== 0 ? ((difference / previous) * 100).toFixed(1) : 'N/A'
            });
        } else {
            summary.okProducts++;
        }
    });

    return { differences, summary };
}

function getPreviousStockData() {
    // Obtener el conteo del día anterior del historial
    const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY) || '[]');
    if (history.length > 0) {
        const sortedHistory = history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        if (sortedHistory.length > 1) {
            return sortedHistory[1].data || {};
        }
    }
    return {};
}

/* ===================================
   D. EXPORTACIÓN EXCEL (SheetJS)
   =================================== */

async function exportarConteoExcel() {
    // Verificar si SheetJS está disponible
    if (typeof XLSX === 'undefined') {
        alert('Cargando librería de Excel...\nIntenta nuevamente en un momento.');
        // Cargar SheetJS dinámicamente
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.min.js';
        document.head.appendChild(script);
        return;
    }

    const { differences, summary } = calculateDifferences();
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES');
    const timeStr = today.toLocaleTimeString('es-ES');

    // Crear workbook
    const wb = XLSX.utils.book_new();

    // --- HOJA 1: RESUMEN ---
    const resumeData = [
        ['COQUINARIA - CONTEO DE INVENTARIO'],
        [],
        ['Fecha:', dateStr],
        ['Hora:', timeStr],
        ['Realizado por:', currentSignerName],
        [],
        ['RESUMEN GENERAL'],
        ['Total productos contados:', summary.totalProducts],
        ['Productos con diferencias:', summary.productsWithDifferences],
        ['Productos OK:', summary.okProducts],
        [],
        ['DIFERENCIAS TOTALES'],
        ['Faltantes:', summary.missingCount + ' productos (' + summary.totalMissing + ' unidades)'],
        ['Sobrantes:', summary.extraCount + ' productos (+' + summary.totalExtra + ' unidades)'],
        ['Diferencia neta:', (summary.totalExtra - summary.totalMissing) + ' unidades']
    ];

    const ws1 = XLSX.utils.aoa_to_sheet(resumeData);
    ws1['!cols'] = [{ wch: 40 }, { wch: 30 }];
    XLSX.utils.book_append_sheet(wb, ws1, 'Resumen');

    // --- HOJA 2: DETALLE COMPLETO ---
    const detailData = [
        ['SKU', 'NOMBRE', 'MARCA', 'ANTERIOR', 'CONTADO', 'DIFERENCIA', '% VAR', 'ESTADO'],
        ...products.map(p => {
            const diff = differences.find(d => d.sku === p.sku);
            if (diff) {
                return [
                    diff.sku,
                    diff.name,
                    diff.brand,
                    diff.previous,
                    diff.current,
                    diff.difference,
                    diff.percentChange + '%',
                    diff.difference < 0 ? '❌ FALTANTE' : diff.difference > 0 ? '⚠️ SOBRANTE' : '✅'
                ];
            } else {
                const current = todayData[p.sku] || 0;
                return [p.sku, p.name, p.brand, 0, current, 0, '0%', '✅'];
            }
        })
    ];

    const ws2 = XLSX.utils.aoa_to_sheet(detailData);
    ws2['!cols'] = [{ wch: 12 }, { wch: 35 }, { wch: 20 }, { wch: 12 }, { wch: 12 }, { wch: 14 }, { wch: 10 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws2, 'Detalle Completo');

    // --- HOJA 3: SOLO DIFERENCIAS ---
    const missingProducts = differences.filter(d => d.difference < 0);
    const extraProducts = differences.filter(d => d.difference > 0);

    const differenceData = [
        ['PRODUCTOS CON DIFERENCIAS'],
        [],
        ['❌ FALTANTES (' + missingProducts.length + ' productos)'],
        ['SKU', 'NOMBRE', 'FALTANTE'],
        ...missingProducts.map(d => [d.sku, d.name, Math.abs(d.difference)]),
        [],
        ['📦 SOBRANTES (' + extraProducts.length + ' productos)'],
        ['SKU', 'NOMBRE', 'SOBRANTE'],
        ...extraProducts.map(d => [d.sku, d.name, d.difference])
    ];

    const ws3 = XLSX.utils.aoa_to_sheet(differenceData);
    ws3['!cols'] = [{ wch: 12 }, { wch: 35 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws3, 'Diferencias');

    // --- HOJA 4: METADATA ---
    const metaData = [
        ['INFORMACIÓN DEL CONTEO'],
        [],
        ['Fecha:', dateStr],
        ['Hora:', timeStr],
        ['Realizado por:', currentSignerName],
        ['Dispositivo:', navigator.userAgent.substring(0, 50)],
        [],
        ['FIRMA DIGITAL'],
        ['[Firma insertada en PDF]']
    ];

    const ws4 = XLSX.utils.aoa_to_sheet(metaData);
    ws4['!cols'] = [{ wch: 40 }, { wch: 40 }];
    XLSX.utils.book_append_sheet(wb, ws4, 'Metadata');

    // Descargar
    const fileName = `Inventario_Coquinaria_${dateStr.replace(/\//g, '-')}.xlsx`;
    XLSX.writeFile(wb, fileName);

    closeExportOptions();
    alert('✅ Excel descargado: ' + fileName);
}

/* ===================================
   E. EXPORTACIÓN PDF
   =================================== */

async function exportarConteoPDF() {
    const { differences, summary } = calculateDifferences();
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES');
    const timeStr = today.toLocaleTimeString('es-ES');

    const doc = new jsPDF();
    let yPosition = 10;

    // Header
    doc.setFillColor(74, 4, 4); // Color burdeo
    doc.rect(0, 0, 210, 20, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text('COQUINARIA', 105, 12, { align: 'center' });
    yPosition = 25;

    // Título
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text('CONTEO DE INVENTARIO', 105, yPosition, { align: 'center' });
    yPosition += 8;

    // Fecha y responsable
    doc.setFontSize(10);
    doc.text(`Fecha: ${dateStr} ${timeStr}`, 20, yPosition);
    yPosition += 5;
    doc.text(`Realizado por: ${currentSignerName}`, 20, yPosition);
    yPosition += 8;

    // Línea separadora
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPosition, 190, yPosition);
    yPosition += 8;

    // Tabla de detalles
    doc.setFontSize(9);
    const tableData = products.map(p => {
        const diff = differences.find(d => d.sku === p.sku);
        const previous = diff ? diff.previous : 0;
        const current = todayData[p.sku] || 0;
        const difference = current - previous;
        const estado = difference < 0 ? '❌' : difference > 0 ? '⚠️' : '✅';

        return [
            p.sku.substring(0, 8),
            p.name.substring(0, 25),
            previous,
            current,
            difference,
            estado
        ];
    });

    doc.autoTable({
        head: [['SKU', 'NOMBRE', 'ANT', 'ACT', 'DIFF', 'EST']],
        body: tableData,
        startY: yPosition,
        margin: { left: 20, right: 20 },
        columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 80 },
            2: { cellWidth: 15 },
            3: { cellWidth: 15 },
            4: { cellWidth: 15 },
            5: { cellWidth: 15 }
        },
        headStyles: { fillColor: [74, 4, 4], textColor: [255, 255, 255], fontStyle: 'bold' },
        bodyStyles: { fontSize: 8 }
    });

    yPosition = doc.lastAutoTable.finalY + 10;

    // Resumen
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('RESUMEN', 20, yPosition);
    yPosition += 7;

    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.text(`Total productos: ${summary.totalProducts}`, 25, yPosition);
    yPosition += 5;
    doc.text(`Con diferencias: ${summary.productsWithDifferences} ⚠️`, 25, yPosition);
    yPosition += 5;
    doc.text(`Faltantes: ${summary.totalMissing} unidades`, 25, yPosition);
    yPosition += 5;
    doc.text(`Sobrantes: ${summary.totalExtra} unidades`, 25, yPosition);
    yPosition += 8;

    // Firma
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('FIRMA Y AUTORIZACIÓN', 20, yPosition);
    yPosition += 8;

    // Insertar imagen de firma
    if (currentSignatureImageData) {
        try {
            doc.addImage(currentSignatureImageData, 'PNG', 20, yPosition, 50, 25);
            yPosition += 30;
        } catch (e) {
            console.log('Error insertando firma:', e);
        }
    }

    doc.setFontSize(9);
    doc.text('_______________________', 20, yPosition);
    yPosition += 5;
    doc.text(`Nombre: ${currentSignerName}`, 20, yPosition);
    yPosition += 4;
    doc.text(`Fecha: ${dateStr} ${timeStr}`, 20, yPosition);

    // Descargar
    const fileName = `Inventario_Coquinaria_${dateStr.replace(/\//g, '-')}.pdf`;
    doc.save(fileName);

    closeExportOptions();
    alert('✅ PDF descargado: ' + fileName);
}

/* ===================================
   F. COMPARTIR POR WHATSAPP
   =================================== */

function shareViaWhatsApp() {
    const { differences, summary } = calculateDifferences();
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES');

    const missingProducts = differences.filter(d => d.difference < 0).slice(0, 5);
    const extraProducts = differences.filter(d => d.difference > 0).slice(0, 5);

    let message = `*📊 CONTEO DE INVENTARIO*\n`;
    message += `Fecha: ${dateStr}\n`;
    message += `Por: ${currentSignerName}\n\n`;

    message += `*RESUMEN:*\n`;
    message += `- Total productos: ${summary.totalProducts}\n`;
    message += `- Con diferencias: ${summary.productsWithDifferences} ⚠️\n\n`;

    message += `*DIFERENCIAS:*\n`;
    message += `❌ Faltantes: ${summary.missingCount} productos (-${summary.totalMissing} und)\n`;
    message += `📦 Sobrantes: ${summary.extraCount} productos (+${summary.totalExtra} und)\n\n`;

    message += `*DETALLE (primeros 5 de cada categoría):*\n`;

    if (missingProducts.length > 0) {
        message += `\n❌ FALTANTES:\n`;
        missingProducts.forEach(d => {
            message += `SKU ${d.sku} | ${d.name.substring(0, 20)} | -${Math.abs(d.difference)}\n`;
        });
    }

    if (extraProducts.length > 0) {
        message += `\n📦 SOBRANTES:\n`;
        extraProducts.forEach(d => {
            message += `SKU ${d.sku} | ${d.name.substring(0, 20)} | +${d.difference}\n`;
        });
    }

    message += `\nFirmado por: ${currentSignerName}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    closeExportOptions();
    alert('✅ Abriendo WhatsApp con el reporte...');
}

/* ===================================
   G. COMPARTIR POR EMAIL
   =================================== */

function shareViaEmail() {
    const { differences, summary } = calculateDifferences();
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES');
    const timeStr = today.toLocaleTimeString('es-ES');

    const missingProducts = differences.filter(d => d.difference < 0).slice(0, 5);
    const extraProducts = differences.filter(d => d.difference > 0).slice(0, 5);

    let body = `CONTEO DE INVENTARIO - Coquinaria\n`;
    body += `Fecha: ${dateStr} ${timeStr}\n`;
    body += `Realizado por: ${currentSignerName}\n\n`;

    body += `RESUMEN:\n`;
    body += `- Total productos: ${summary.totalProducts}\n`;
    body += `- Con diferencias: ${summary.productsWithDifferences}\n`;
    body += `- Faltantes: ${summary.totalMissing} unidades\n`;
    body += `- Sobrantes: ${summary.totalExtra} unidades\n\n`;

    body += `PRODUCTOS CON DIFERENCIAS:\n`;

    if (missingProducts.length > 0) {
        body += `\nFALTANTES:\n`;
        missingProducts.forEach(d => {
            body += `- SKU ${d.sku}: ${d.name} (-${Math.abs(d.difference)})\n`;
        });
    }

    if (extraProducts.length > 0) {
        body += `\nSOBRANTES:\n`;
        extraProducts.forEach(d => {
            body += `- SKU ${d.sku}: ${d.name} (+${d.difference})\n`;
        });
    }

    const subject = `Conteo Inventario Coquinaria ${dateStr}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    window.location.href = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;

    closeExportOptions();
    alert('✅ Abriendo email con el reporte...');
}

/* ===================================
   H. MODALES Y UI
   =================================== */

function showExportOptions() {
    const modal = document.getElementById('exportOptionsModal');
    if (modal) {
        modal.classList.add('show');
    }
}

function closeExportOptions() {
    const modal = document.getElementById('exportOptionsModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Exportar funciones para uso en HTML y app.js
window.signatureExportModule = {
    showSignatureModal,
    closeSignatureModal,
    validateAndSaveSignature,
    clearSignature,
    exportarConteoExcel,
    exportarConteoPDF,
    shareViaWhatsApp,
    shareViaEmail,
    showExportOptions,
    closeExportOptions
};
