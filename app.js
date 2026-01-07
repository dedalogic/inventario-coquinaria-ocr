// Lista de todos los productos
const products = [
    {name: "Aceite de oliva extra virgen", brand: "Al 'Olivier", sku: "80652994"},
    {name: "Aceite de Oliva con Albahaca 250 ml", brand: "Al 'Olivier", sku: "80653080"},
    {name: "Aceite oliva extra virgen en spray", brand: "Al 'Olivier", sku: "80653024"},
    {name: "Vinagre de pulpa de frambuesa", brand: "Al 'Olivier", sku: "80653071"},
    {name: "Vinagreta Piña Albahaca", brand: "Al 'Olivier", sku: "80653079"},
    {name: "Pappardelle al huevo 250gr", brand: "Cipriani", sku: "80653018"},
    {name: "Tagliarelle al huevo 250gr", brand: "Cipriani", sku: "80653004"},
    {name: "Tagliolini al huevo 250 gr", brand: "Cipriani", sku: "80652975"},
    {name: "Salsa pomodoro 340gr", brand: "Cipriani", sku: "80653039"},
    {name: "Juego de vajilla grises", brand: "Coquinaria", sku: "80652992"},
    {name: "Juego de vajilla beige", brand: "Coquinaria", sku: "80653073"},
    {name: "Olla hierro fundido azul 4.1 l", brand: "Coquinaria", sku: "80653010"},
    {name: "Olla hierro fundido roja 4.1 l", brand: "Coquinaria", sku: "80653050"},
    {name: "Set ahumador para tragos", brand: "Coquinaria", sku: "80652977"},
    {name: "Olla hierro fundido 2.9 lts Roja", brand: "Coquinaria", sku: "80653064"},
    {name: "Set abridor de vinos y bomba", brand: "Coquinaria", sku: "80652967"},
    {name: "Canasto picnic", brand: "Coquinaria", sku: "80653085"},
    {name: "Set 4 platos comida 26cms", brand: "Coquinaria", sku: "80653008"},
    {name: "Coctelera", brand: "Coquinaria", sku: "80653011"},
    {name: "Hielera", brand: "Coquinaria", sku: "80653030"},
    {name: "Fuente 51x29cms", brand: "Coquinaria", sku: "80652985"},
    {name: "Set Molinillo sal y pimienta Madera", brand: "Coquinaria", sku: "SIN_SKU_1"},
    {name: "Set Molinillo sal y pimienta Acero", brand: "Coquinaria", sku: "SIN_SKU_2"},
    {name: "Ensaladera 31 cms", brand: "Coquinaria", sku: "80653033"},
    {name: "Descorchador de vinos", brand: "Coquinaria", sku: "80652979"},
    {name: "Set 4 platos comida 21cms", brand: "Coquinaria", sku: "80653057"},
    {name: "Set 3 cuchillos para quesos", brand: "Coquinaria", sku: "80652973"},
    {name: "Set platos aperitivo 2 pzs", brand: "Coquinaria", sku: "80653034"},
    {name: "Set sellador vino/espumante", brand: "Coquinaria", sku: "80652980"},
    {name: "Set 4 bowls 12 cms", brand: "Coquinaria", sku: "80653020"},
    {name: "Set 4 tazas te vidrio 250ml", brand: "Coquinaria", sku: "80652975_2"},
    {name: "Tetera vidrio 650ml", brand: "Coquinaria", sku: "80653055"},
    {name: "Set 4 tazas expresso vidrio", brand: "Coquinaria", sku: "80652978"},
    {name: "Ensaladera 24 cms", brand: "Coquinaria", sku: "80653013"},
    {name: "Set 2 mugs de vidrio 250ml", brand: "Coquinaria", sku: "80653040"},
    {name: "Aceto di modena spray 250 ml", brand: "Coquinaria", sku: "80652972"},
    {name: "Encendedor de velas recargable", brand: "Coquinaria", sku: "80653058"},
    {name: "Set Paños de cocina rojos", brand: "Coquinaria", sku: "80653070"},
    {name: "Fuente 51x29cms (Rep)", brand: "Coquinaria", sku: "80652970"},
    {name: "Chutney de mango y manzana", brand: "Coquinaria", sku: "80653017"},
    {name: "Set de cuchillería 4 per Timeless", brand: "Coquinaria", sku: "80653015"},
    {name: "Set de cuchillería 4 per Hammered", brand: "Coquinaria", sku: "80652993"},
    {name: "Set block foie gras de pato", brand: "Edouard Artzner", sku: "80653078"},
    {name: "Rillete de ganso 170 g", brand: "Edouard Artzner", sku: "80653060"},
    {name: "Paté de alsacia riesling 180g", brand: "Edouard Artzner", sku: "80653044"},
    {name: "Champagne brut 750ml", brand: "Fauchon", sku: "80652996"},
    {name: "Terrina de pato 100g", brand: "Fauchon", sku: "80653005"},
    {name: "Terrina Fauchon 100 gr", brand: "Fauchon", sku: "80653051"},
    {name: "Tartina Berenjena Ricota", brand: "Fauchon", sku: "80652981"},
    {name: "Aceituna campo real 350g", brand: "La Chinata", sku: "80653045"},
    {name: "Pesto a la genovese 180gr", brand: "La Chinata", sku: "80653069"},
    {name: "Hummus 180 grs", brand: "La Chinata", sku: "80653056"},
    {name: "Pesto rojo 180gr", brand: "La Chinata", sku: "80653065"},
    {name: "Crema de boletus edulis 180 g", brand: "La Chinata", sku: "80653072"},
    {name: "Pasta pimientos y berenjenas", brand: "La Chinata", sku: "80653025"},
    {name: "Pasta de aceitu verdes y almen", brand: "La Chinata", sku: "80653006"},
    {name: "Pasta de aceitunas negras 180g", brand: "La Chinata", sku: "80653075"},
    {name: "Galletas Crackers Trufa Negra", brand: "Lady Joseph", sku: "80653012"},
    {name: "Galletas dulces pie de manzana", brand: "Lady Joseph", sku: "80653032"},
    {name: "Galletas crackers paprika 100g", brand: "Lady Joseph", sku: "80653062"},
    {name: "Galletas dulces lemon curd 100", brand: "Lady Joseph", sku: "80652976"},
    {name: "Crackers queso parmesano 100g", brand: "Lady Joseph", sku: "80653026"},
    {name: "Crackers Finas Hierbas 100g", brand: "Lady Joseph", sku: "80653076"},
    {name: "Mostaza con pimiento espelette", brand: "Pommery", sku: "80653031"},
    {name: "Mostaza bbq 100g", brand: "Pommery", sku: "80653002"},
    {name: "Mostaza dijon 100g", brand: "Pommery", sku: "80653038"},
    {name: "Mostaza Meaux grano 250 gr", brand: "Pommery", sku: "80653007"},
    {name: "Mostaza a las finas hierbas", brand: "Pommery", sku: "80653037"}
];

// Definición estática de todas las marcas para la lógica de avance
const allBrands = [...new Set(products.map(p => p.brand))].sort();
const allTabs = ['Todos', ...allBrands];
const TOTAL_BRANDS = allBrands.length;

let currentBrand = 'Todos';
let todayData = {}; // Guarda {sku: count}
let completedBrands = {}; // Guarda {brand: true}
let searchTerm = '';
const HISTORY_STORAGE_KEY = 'inventory_history';

function init() {
    loadTodayData();
    loadCompletedBrands();
    updateDate();
    createTabs();
    renderProducts();
    setupSearch();
    updateStats();
}

/* --- DATA PERSISTENCE & LOADING --- */

function loadTodayData() {
    const today = new Date().toDateString();
    const stored = localStorage.getItem(`inventory_min_${today}`);
    try {
        todayData = stored ? JSON.parse(stored) : {};
    } catch (e) {
        console.error("Error loading local data, resetting.", e);
        todayData = {};
    }
}

function saveTodayData() {
    const today = new Date().toDateString();
    localStorage.setItem(`inventory_min_${today}`, JSON.stringify(todayData));
}

function loadCompletedBrands() {
    const today = new Date().toDateString();
    const stored = localStorage.getItem(`completed_brands_${today}`);
    try {
        completedBrands = stored ? JSON.parse(stored) : {};
    } catch (e) {
        console.error("Error loading completed brands, resetting.", e);
        completedBrands = {};
    }
}

function saveCompletedBrands() {
    const today = new Date().toDateString();
    localStorage.setItem(`completed_brands_${today}`, JSON.stringify(completedBrands));
}


/* --- UI UPDATES --- */

function updateDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString('es-ES', options);
    document.getElementById('currentDate').textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
}

function updateStats() {
    const countedBrands = Object.keys(completedBrands).length; 
    const progress = (countedBrands / TOTAL_BRANDS) * 100;
    
    document.getElementById('progressBar').style.width = progress + '%';

    // Actualizar visualmente los productos (para mostrar el check "Contado")
    const productCards = document.querySelectorAll('.products-list .product-card');
    productCards.forEach(card => {
        const skuElement = card.querySelector('.product-sku');
        if (!skuElement) return;

        const sku = skuElement.textContent.replace('SKU: ', '').trim();
        const indicator = document.getElementById(`saved_${sku}`);
        
        if (indicator) {
            if (todayData.hasOwnProperty(sku)) {
                indicator.textContent = '✓ Contado';
                indicator.classList.add('show');
            } else {
                indicator.classList.remove('show');
            }
        }
    });
}
    
function createTabs() {
    const tabsHtml = allTabs.map(brand => {
        // ESCAPAR COMILLAS
        const safeBrand = brand.replace(/'/g, "\'"); 
        const isCompleted = completedBrands[brand] && brand !== 'Todos';
        const completedClass = isCompleted ? 'completed' : '';
        return `<button class="tab ${brand === currentBrand ? 'active' : ''} ${completedClass}" onclick="switchBrand('${safeBrand}')">${brand}</button>`;
    }).join('');
    document.getElementById('tabs').innerHTML = tabsHtml;
}

function switchBrand(brand) {
    currentBrand = brand;
    createTabs();
    renderProducts();
    
    // CORRECCIÓN DE SCROLL: Forzar el scroll al inicio de la lista de productos
    const productsList = document.getElementById('productsContainer');
    if (productsList) {
        // Desplazamiento suave a la posición vertical 0
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Opcionalmente, desplazar la lista de productos al inicio de la vista
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
             searchContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}


/* --- PRODUCT RENDERING & CTA --- */

function renderProducts() {
    let filtered = products;
    
    if (currentBrand !== 'Todos') {
        filtered = filtered.filter(p => p.brand === currentBrand);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.sku.includes(searchTerm)
        );
    }

    const container = document.getElementById('productsContainer');
    const ctaContainer = document.getElementById('brandCtaContainer');
    
    // Renderizar productos
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="text-align:center; padding: 40px; color: #999;">
                <div>No se encontraron productos.</div>
            </div>
        `;
    } else {
        container.innerHTML = filtered.map(product => {
            const count = todayData[product.sku] || 0;
            const isCounted = todayData.hasOwnProperty(product.sku); 
            
            return `
                <div class="product-card">
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-sku">SKU: ${product.sku}</div>
                    </div>
                    <div class="stock-control">
                        <button class="btn-stock" onclick="changeStock('${product.sku}', -1)">−</button>
                        <input type="number" 
                               class="stock-input" 
                               value="${count}" 
                               onchange="setStock('${product.sku}', this.value)"
                               min="0">
                        <button class="btn-stock" onclick="changeStock('${product.sku}', 1)">+</button>
                    </div>
                    <div class="saved-check ${isCounted ? 'show' : ''}" id="saved_${product.sku}">✓ Contado</div>
                </div>
            `;
        }).join('');
    }

    // Renderizar CTA de Marca (sólo si no es el tab 'Todos')
    if (currentBrand !== 'Todos' && filtered.length > 0) {
        const safeBrand = currentBrand.replace(/'/g, "\'"); 
        ctaContainer.innerHTML = `
            <button class="btn btn-primary" style="width: 100%;" onclick="saveBrand('${safeBrand}')">
                ✅ Finalizar y Guardar Stock de ${currentBrand}
            </button>
        `;
    } else {
        ctaContainer.innerHTML = '';
    }

    updateStats();
}

/* --- SEARCH SETUP --- */
function setupSearch() {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderProducts();
    });
}


/* --- STOCK LOGIC --- */

function changeStock(sku, delta) {
    const current = todayData[sku] || 0;
    const newValue = Math.max(0, current + delta);
    todayData[sku] = newValue;
    saveTodayData();
    
    const input = document.querySelector(`input[onchange="setStock('${sku}', this.value)"]`);
    if(input) input.value = newValue;
    
    updateStats();
    showSavedIndicator(sku);
}

function setStock(sku, value) {
    todayData[sku] = Math.max(0, parseInt(value) || 0);
    saveTodayData();
    updateStats();
    showSavedIndicator(sku);
}

function showSavedIndicator(sku) {
    const indicator = document.getElementById(`saved_${sku}`);
    if (indicator) {
        indicator.textContent = '✓ Guardado';
        indicator.classList.add('show');
        
        setTimeout(() => {
            if (todayData.hasOwnProperty(sku)) {
                indicator.textContent = '✓ Contado';
                indicator.classList.add('show');
            } else {
                indicator.classList.remove('show');
            }
        }, 1500);
    }
}

/* --- BRAND SAVE & NAVIGATION --- */

function saveBrand(brand) {
    if (brand === 'Todos') return; 

    // 1. Mark as completed and save
    completedBrands[brand] = true;
    saveCompletedBrands();
    
    // 2. Ejecutar guardado de progreso diario/historial
    saveDay(); 

    // 3. Navigate to the next brand
    const currentIndex = allBrands.indexOf(brand);
    let nextIndex = -1;

    // Busca la siguiente marca que no esté completa
    for (let i = currentIndex + 1; i < allBrands.length; i++) {
        if (!completedBrands[allBrands[i]]) {
            nextIndex = i;
            break;
        }
    }
    
    // Si no hay siguiente marca pendiente, busca desde el inicio
    if (nextIndex === -1) {
        for (let i = 0; i < allBrands.length; i++) {
            if (!completedBrands[allBrands[i]]) {
                nextIndex = i;
                break;
            }
        }
    }

    if (nextIndex !== -1) {
        switchBrand(allBrands[nextIndex]);
        alert(`✅ Marca ${brand} guardada. Continuando con ${allBrands[nextIndex]}.`);
    } else {
        // Si todo está completo, ve a 'Todos'
        switchBrand('Todos');
        alert('¡Felicidades! Inventario del día completo y guardado.');
    }
}


/* --- DAY SAVE & HISTORY --- */

function saveDay() {
    // Esta función registra el estado actual del inventario en el historial.
    const today = new Date().toDateString();
    const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY) || '[]');
    
    const dayData = {
        date: today,
        timestamp: new Date().toISOString(),
        // Almacenamos la data de stock y las marcas completadas
        data: {...todayData}, 
        completed_brands: {...completedBrands},
        total_units: Object.values(todayData).reduce((a, b) => a + b, 0),
        total_skus_reviewed: Object.keys(todayData).length,
        total_brands_completed: Object.keys(completedBrands).length
    };

    // Reemplazar o añadir el registro del día
    const existingIndex = history.findIndex(h => h.date === today);
    if (existingIndex >= 0) {
        history[existingIndex] = dayData;
    } else {
        history.push(dayData);
    }

    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
    updateStats(); // Asegura que la barra de progreso se actualice
    alert('💾 Progreso del día guardado con éxito en el historial.');
}

function showHistory() {
    const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY) || '[]');
    const modal = document.getElementById('historyModal');
    const content = document.getElementById('historyContent');
    
    // Guardamos el estado actual antes de mostrar el historial
    saveDay(); 

    if (history.length === 0) {
        content.innerHTML = `<div style="text-align:center; color:#666; padding:20px;">No hay historial guardado</div>`;
    } else {
        content.innerHTML = history.reverse().map(day => `
            <div class="history-item">
                <div style="font-weight:bold; margin-bottom:5px; color: var(--accent);">
                    ${new Date(day.timestamp).toLocaleDateString('es-ES', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                </div>
                <div style="font-size:14px; color:#555;">
                    ✅ ${day.total_brands_completed} de ${TOTAL_BRANDS} Marcas completadas <br>
                    📦 ${day.total_skus_reviewed} SKUs revisados | Unidades: ${day.total_units}
                </div>
            </div>
        `).join('');
    }
    modal.classList.add('show');
}

function closeHistory() {
    document.getElementById('historyModal').classList.remove('show');
}

function exportHistory() {
    const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY) || '[]');
    let csv = 'Fecha,Marca,Producto,SKU,Cantidad\n';
    
    history.forEach(day => {
        // Obtener solo los SKUs que fueron contados en ese día
        Object.keys(day.data).forEach(sku => {
            const product = products.find(p => p.sku === sku);
            if (product) {
                csv += `"${new Date(day.timestamp).toLocaleDateString('es-ES')}","${product.brand}","${product.name}","${product.sku}","${day.data[sku]}"\n`;
            }
        });
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `inventario_coquinaria_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
}

// Inicialización
init();
