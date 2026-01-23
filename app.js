// Lista de todos los productos (388 items)
const products = [
    {name: "Cuchara de té Coquinaria", brand: "Coquinaria", sku: "80000"},
    {name: "Cuchillo aperitivo Coquinaria", brand: "Coquinaria", sku: "80001"},
    {name: "Cuchillo para pan Coquinaria", brand: "Coquinaria", sku: "80002"},
    {name: "Espátula Coquinaria", brand: "Coquinaria", sku: "80003"},
    {name: "Trincho para BBQ Coquinaria", brand: "Coquinaria", sku: "80004"},
    {name: "Cuchillo para BBQ Coquinaria", brand: "Coquinaria", sku: "80005"},
    {name: "Cuchara para Servir Coquinaria", brand: "Coquinaria", sku: "80006"},
    {name: "Tenedor para Servir Coquinaria", brand: "Coquinaria", sku: "80007"},
    {name: "Pasta de Aceitunas Verdes 180gr", brand: "La Chinata", sku: "80008"},
    {name: "Pasta de Aceitunas Verdes y almendras 180gr", brand: "La chinata", sku: "80009"},
    {name: "Pasta de Aceitunas Negras 180gr", brand: "La chinata", sku: "80010"},
    {name: "Pasta de Tomates y Aceitunas 180gr", brand: "La chinata", sku: "80011"},
    {name: "Tomates Secos 220gr", brand: "La chinata", sku: "80012"},
    {name: "Cebolla Caramelizada al Vinagre Jerez 220gr", brand: "La chinata", sku: "80013"},
    {name: "Pimientos Asados en Almíbar 220gr", brand: "La chinata", sku: "80014"},
    {name: "Crema de Pimientos y Berenjenas 180gr", brand: "La chinata", sku: "80015"},
    {name: "Mayonesa de Trufa con AOVE 115gr", brand: "La chinata", sku: "80016"},
    {name: "Pesto a la Genovese 180 grs", brand: "La chinata", sku: "80017"},
    {name: "Pesto Rojo 180 gr", brand: "La chinata", sku: "80018"},
    {name: "Pasta Tagliarelle al huevo 250 grs", brand: "Cipriani", sku: "80019"},
    {name: "Pasta Tagliarelle al huevo con espinaca 250 grs", brand: "Cipriani", sku: "80020"},
    {name: "Pasta Pappardelle al huevo 250grs", brand: "Cipriani", sku: "80021"},
    {name: "Pasta Pappardelle al huevo y espinaca 250 grs", brand: "Cipriani", sku: "80022"},
    {name: "Pasta Tagliolini al huevo 250 grs", brand: "Cipriani", sku: "80023"},
    {name: "Pasta Tagliolini al huevo y espinaca 250 grs", brand: "Cipriani", sku: "80024"},
    {name: "Salsa Pomodoro 340 grs", brand: "Cipriani", sku: "80025"},
    {name: "Salsa Sansovina 340 grs", brand: "Cipriani", sku: "80026"},
    {name: "Pesto 180gr", brand: "Cipriani", sku: "80027"},
    {name: "Set de Bloc de Foie gras de Pato y ganso 2 x 45 grs", brand: "Edouard Artzner", sku: "80028"},
    {name: "Bloc de foie gras de canard + Confit de figues au Poivre de Sechuan", brand: "Edouard Artzner", sku: "80029"},
    {name: "Bloc de Foie Gras de Ganso 145 grs", brand: "Edouard Artzner", sku: "80030"},
    {name: "Bloc de Foie Gras de Pato 200 grs", brand: "Edouard Artzner", sku: "80031"},
    {name: "Mousse de Pato con Kirsch 180 grs", brand: "Edouard Artzner", sku: "80032"},
    {name: "Paté de Alsacia al Riesling 180gr", brand: "Edouard Artzner", sku: "80033"},
    {name: "Pate de Hígado con Cerezas 100g", brand: "Edouard Artzner", sku: "80034"},
    {name: "Paté de Alsacia al Riesling 100gr", brand: "Edouard Artzner", sku: "80035"},
    {name: "Chutney de Higos Confitados 60 g rs", brand: "Edouard Artzner", sku: "80036"},
    {name: "Mermelada Sin Azúcar de Frutilla 210 grs", brand: "Belberry", sku: "80037"},
    {name: "Mermelada Sin Azúcar de Damasco 210 grs", brand: "Belberry", sku: "80038"},
    {name: "Mermelada Sin Azúcar de Frambuesa 210 grs", brand: "Belberry", sku: "80039"},
    {name: "Mermelada Sin Azúcar de Guinda 210 grs", brand: "Belberry", sku: "80040"},
    {name: "Salsa Gourmet de Mango Picante 250 grs", brand: "Belberry", sku: "80041"},
    {name: "Salsa Barbecue Tomate Ketchup 250 grs", brand: "Belberry", sku: "80042"},
    {name: "Salsa Jalapeño Tomato Ketchup 250 grs", brand: "Belberry", sku: "80043"},
    {name: "Chutney para Quesos de Higos y Pimienta Negra 130 grs", brand: "Belberry", sku: "80044"},
    {name: "Chutney para quesos de Frambuesa y Anís Estrellado 130 grs", brand: "Belberry", sku: "80045"},
    {name: "Chutney para quesos de damasco y comino 130 grs", brand: "Belberry", sku: "80046"},
    {name: "Crema de Caramelo Salada 135 grs", brand: "Belberry", sku: "80047"},
    {name: "Lata con té en bolsa English Breakfast 30 x 3 grs", brand: "Cartwright & Butler", sku: "80048"},
    {name: "Lata con té en bolsa Earl Grey  30 x 3grs", brand: "Cartwright & Butler", sku: "80049"},
    {name: "Caja con té en bolsas English Breakfast 10 x 3 grs", brand: "Cartwright & Butler", sku: "80050"},
    {name: "Caja con té en bolsas Earl Grey 10 x 3 grs", brand: "Cartwright & Butler", sku: "80051"},
    {name: "Lata con Galletas de Mantequilla y Ralladura de Limón 200g", brand: "Cartwright & Butler", sku: "80058"},
    {name: "Caja con Galletas de Mantequilla y Ralladura de Limón 200g", brand: "Cartwright & Butler", sku: "80059"},
    {name: "Lata con Galletas de Mantequilla y Almendras 200g", brand: "Cartwright & Butler", sku: "80060"},
    {name: "Caja con Galletas de Mantequilla y Almendras 200g", brand: "Cartwright & Butler", sku: "80061"},
    {name: "Lata Time for Tea Selection con galletas y bolsas de té English Breakfast 240g", brand: "Cartwright & Butler", sku: "80062"},
    {name: "Lata con té en hoja English Breakfast 100 grs", brand: "Cartwright & Butler", sku: "80063"},
    {name: "Lata con té en hoja Earl Grey Celebrated 100 grs", brand: "Cartwright & Butler", sku: "80064"},
    {name: "Lata de café molido York Blend 227 grs", brand: "Cartwright & Butler", sku: "80065"},
    {name: "Caja con Café Molido York Blend 227 grs", brand: "Cartwright & Butler", sku: "80066"},
    {name: "Aceite de Oliva con Albahaca 250 ml", brand: "A L'Olivier", sku: "80067"},
    {name: "Aceite de Oliva Extra Virgen con Trufa Negra 250 ml", brand: "A L'Olivier", sku: "80068"},
    {name: "Aceite de Oliva Extra Virgen con Pimiento de Espelette  250 ml", brand: "A L'Olivier", sku: "80069"},
    {name: "Aceite de Oliva con Jengibre Peruano 150 ml", brand: "A L'Olivier", sku: "80070"},
    {name: "Aceite de Oliva con Mandarinas 150 ml", brand: "A L'Olivier", sku: "80071"},
    {name: "Aceite de Oliva con Ajo 150 ml", brand: "A L'Olivier", sku: "80072"},
    {name: "Aceite Oliva Extra Virgen en Spray 250ml", brand: "Coquinaria", sku: "80073"},
    {name: "Aceto Di Modena Spray 250 ml", brand: "Coquinaria", sku: "80074"},
    {name: "Crema De Aceto Balsámico 250 ml", brand: "A L'Olivier", sku: "80075"},
    {name: "Vinagre con Pulpa Frambuesa 200 ml", brand: "A L'Olivier", sku: "80076"},
    {name: "Vinagre con Pulpa Mango 200 ml", brand: "A L'Olivier", sku: "80077"},
    {name: "Vinagre con Zucchini y Menta 200 ml", brand: "A L'Olivier", sku: "80078"},
    {name: "Vinagreta de Piña y Albahaca 200 ml", brand: "A L'Olivier", sku: "80079"},
    {name: "Vinagreta de Mango y Lemongrass 200 ml", brand: "A L'Olivier", sku: "80080"},
    {name: "Lata con Galletas de mantequilla y trozos de chocolate", brand: "Cartwright & Butler", sku: "80081"},
    {name: "Caja con Galletas de mantequilla y trozos de chocolate", brand: "Cartwright & Butler", sku: "80082"},
    {name: "Juego de Vajilla Coquinaria Blanco 16 piezas Coquinaria", brand: "Coquinaria", sku: "80088"},
    {name: "Juego de Vajilla Coquinaria Gris 20 piezas Coquinaria", brand: "Coquinaria", sku: "80089"},
    {name: "Tabla quesos 25 cms marmol Coquinaria", brand: "Coquinaria", sku: "80090"},
    {name: "Set 3 cuchillos para quesos Coquinaria", brand: "Coquinaria", sku: "80091"},
    {name: "Enfriador de vinos marmol Coquinaria", brand: "Coquinaria", sku: "80092"},
    {name: "Coctelera Coquinaria", brand: "Coquinaria", sku: "80093"},
    {name: "Descorchador de vinos Coquinaria", brand: "Coquinaria", sku: "80094"},
    {name: "Set 5 accesorios Mixología Coquinaria", brand: "Coquinaria", sku: "80095"},
    {name: "Hielera Coquinaria", brand: "Coquinaria", sku: "80096"},
    {name: "Set Molinillos Sal & Pimienta Acero inoxidable Coquinaria", brand: "Coquinaria", sku: "80097"},
    {name: "Set Molinillos Sal & Pimienta Madera  Coquinaria", brand: "Coquinaria", sku: "80098"},
    {name: "Set Abridor de vinos y bomba al vacío 2 en 1 + 2 Tapones Coquinaria", brand: "Coquinaria", sku: "80099"},
    {name: "Set Sellador de vino y espumante al vacio 2 pzs Coquinaria", brand: "Coquinaria", sku: "80100"},
    {name: "Sal Rosada Molinillo 65gr Coquinaria", brand: "Coquinaria", sku: "80101"},
    {name: "Sal con limón Molinillo 65 gr Coquinaria", brand: "Coquinaria", sku: "80102"},
    {name: "Sal carmenere Molinillo 65gr Coquinaria", brand: "Coquinaria", sku: "80103"},
    {name: "Sal clásica Molinillo 65 gr Coquinaria", brand: "Coquinaria", sku: "80104"},
    {name: "Sal con merken molinillo 65gr COQUINARIA", brand: "Coquinaria", sku: "80105"},
    {name: "Doypack Merken 450gr", brand: "Coquinaria", sku: "80106"},
    {name: "Doypack parrillero Cerveza 450gr Coquinaria", brand: "Coquinaria", sku: "80107"},
    {name: "Doypack Sal Rosada", brand: "Coquinaria", sku: "80109"},
    {name: "Doypack parrillero Clásica 450gr Coquinaria", brand: "Coquinaria", sku: "80111"},
    {name: "Aceite de Trufa Negra 250ml Coquinaria", brand: "Coquinaria", sku: "80112"},
    {name: "Aceto Balsamico Trufado 250ml Coquinaria", brand: "Coquinaria", sku: "80113"},
    {name: "Pita chips 50 grs Boca n Boca", brand: "Boca n Boca", sku: "80114"},
    {name: "Pita chips 120 grs Boca n Boca", brand: "Boca n Boca", sku: "80115"},
    {name: "Tabla Madera 30 x 30 Coquinaria", brand: "Coquinaria", sku: "80116"},
    {name: "Caja autoarmable c/ ventana Coquinaria S", brand: "Coquinaria", sku: "80117"},
    {name: "Caja autoarmable c/ ventana Coquinaria M", brand: "Coquinaria", sku: "80118"},
    {name: "Caja autoarmable c/ ventana Coquinaria L", brand: "Coquinaria", sku: "80119"},
    {name: "Caja autoarmable Coquinaria XL", brand: "Coquinaria", sku: "80120"},
    {name: "CAJA DURA 30 X 30 CMS COQUINARIA", brand: "Coquinaria", sku: "80125"},
    {name: "Set 6 Copas Vino Talladas 540ml Coquinaria", brand: "Coquinaria", sku: "80126"},
    {name: "Set 6 Vasos Talladas 420 ml Coquinaria", brand: "Coquinaria", sku: "80127"},
    {name: "Bolsa Coquinaria M", brand: "Coquinaria", sku: "80129"},
    {name: "Bolsa Coquinaria L", brand: "Coquinaria", sku: "80130"},
    {name: "Paño de Cocina Kitchen Center", brand: "Kitchen Center", sku: "80131"},
    {name: "Salmuera Ajo Tomillo Cristales de Chile", brand: "Cristales de Chile", sku: "80132"},
    {name: "Set 2 Mugs de vidrio 250ml Coquinaria", brand: "Coquinaria", sku: "80133"},
    {name: "Tetera vidrio 650ml Coquinaria", brand: "Coquinaria", sku: "80134"},
    {name: "Set 4 Tazas expresso vidrio Coquinaria", brand: "Coquinaria", sku: "80135"},
    {name: "Panettone in metal tin 1kg", brand: "Cipriani", sku: "80138"},
    {name: "Base Bellini 180 ml Cipriani", brand: "Cipriani", sku: "80139"},
    {name: "Set de Cuchilleria Timeless para 4 personas 28pzs Coquinaria", brand: "Coquinaria", sku: "80140"},
    {name: "Set de Cuchilleria Hammered para 4 personas 28pzs Coquinaria", brand: "Coquinaria", sku: "80141"},
    {name: "Terrina magret de ganso ahumado con pimienta Edouard Arzner 100gr", brand: "Edouard Artzner", sku: "80142"},
    {name: "Rillete de Ganso 170 g Edouard Artzner", brand: "Edouard Artzner", sku: "80143"},
    {name: "Crema de Boletus Edulis 180 g La Chinata", brand: "La Chinata", sku: "80144"},
    {name: "Crema de Alcachofa 180g La Chinata", brand: "La Chinata", sku: "80145"},
    {name: "Crema de Pimientos y Chilli 180g La Chinata", brand: "La Chinata", sku: "80146"},
    {name: "Aceituna Campo Real 350g La Chinata", brand: "La Chinata", sku: "80147"},
    {name: "Chutney de Aceituna 156 g La Chinata", brand: "La Chinata", sku: "80148"},
    {name: "Chutney de Mango y Manzana 156g La Chinata", brand: "La Chinata", sku: "80149"},
    {name: "Chutney de Tomate 156g La Chinata", brand: "La Chinata", sku: "80150"},
    {name: "Vinagre de higo 200ml Al Olivier", brand: "A L'Olivier", sku: "80151"},
    {name: "Aceite de oliva extra virgen español A L'Olivier 250ml", brand: "A L'Olivier", sku: "80152"},
    {name: "Caja Mini turrones artesanos souffle almendra 150g Vicens", brand: "Vicens", sku: "80153"},
    {name: "Caja Mini turrones artesanos avellanas y chocolate 150g Vicens", brand: "Vicens", sku: "80154"},
    {name: "Caja Mini turrones artesanos agramunt de almendra 150g Vicens", brand: "Vicens", sku: "80155"},
    {name: "Turrón Duro de Almendra Excellence 300g Vicens", brand: "Vicens", sku: "80156"},
    {name: "Turrón Duro de pasta de almendras con yema quemada Excellence", brand: "Vicens", sku: "80157"},
    {name: "Turrón blando de Almendras y miel Excellence 150g Vicens", brand: "Vicens", sku: "80158"},
    {name: "Turrón duro de Almendras Excellence Vicens 150g", brand: "Vicens", sku: "80159"},
    {name: "Mostaza al Coñac 250g Pommery", brand: "Pommery", sku: "80160"},
    {name: "Mostaza a la Miel 250g Pommery", brand: "Pommery", sku: "80161"},
    {name: "Mostaza Meaux Grano 250g Pommery", brand: "Pommery", sku: "80162"},
    {name: "Mostaza con pimiento de espelette 100g Pommery", brand: "Pommery", sku: "80163"},
    {name: "Mostaza Dijon 100g Pommery", brand: "Pommery", sku: "80164"},
    {name: "Mostaza a las finas hierbas 100g Pommery", brand: "Pommery", sku: "80165"},
    {name: "Mostaza bbq 100g Pommery", brand: "Pommery", sku: "80166"},
    {name: "Panettone Tradicional 500gr Fiasconaro", brand: "Fiasconaro", sku: "80167"},
    {name: "Panettone Cioccolato 500gr Fiasconaro", brand: "Fiasconaro", sku: "80168"},
    {name: "Panettone D&G 500gr Fiasconaro", brand: "Fiasconaro", sku: "80169"},
    {name: "Canasto Picnic Coquinaria", brand: "Coquinaria", sku: "80170"},
    {name: "Mini Tostadas Brioche 80 grs Fauchon", brand: "Fauchon", sku: "80171"},
    {name: "Tartina de alcachofa y queso fresco 90 gr Fauchon", brand: "Fauchon", sku: "80172"},
    {name: "Tartina Pimenton Rojo y Queso Mascarpone 90gr Fauchon", brand: "Fauchon", sku: "80173"},
    {name: "Tartina Berenjena Ricotta y Menta 90gr Fauchon", brand: "Fauchon", sku: "80174"},
    {name: "Foie Gras de Ganso y Alsacia 180 gr Fauchon", brand: "Fauchon", sku: "80175"},
    {name: "Foie Gras de ganso y Alsacia 200 gr Fauchon", brand: "Fauchon", sku: "80176"},
    {name: "Foie Gras de Ganso y Alsacia 65g Fauchon", brand: "Fauchon", sku: "80177"},
    {name: "Foie Gras de Ganso Alsacia y Trufa130g Fauchon", brand: "Fauchon", sku: "80178"},
    {name: "Foie Gras Pato 90g Fauchon", brand: "Fauchon", sku: "80179"},
    {name: "Foie Gras Pato 180g Fauchon", brand: "Fauchon", sku: "80180"},
    {name: "Terrina Fauchon 100g Fauchon", brand: "Fauchon", sku: "80181"},
    {name: "Terrina Vino Tinto 100g Fauchon", brand: "Fauchon", sku: "80182"},
    {name: "Terrina de Pato 100g Fauchon", brand: "Fauchon", sku: "80183"},
    {name: "Terrina Pimienta Espelette 100g Fauchon", brand: "Fauchon", sku: "80184"},
    {name: "Infusion Petalos de Rosa 60g Fauchon", brand: "Fauchon", sku: "80185"},
    {name: "Corazón bombones de Leche 75g Fauchon", brand: "Fauchon", sku: "80186"},
    {name: "Corazon bombones de Bitter 75g Fauchon", brand: "Fauchon", sku: "80187"},
    {name: "Mermelada Petalos de rosa 250g Fauchon", brand: "Fauchon", sku: "80188"},
    {name: "Pure de Castañas 250g Fauchon", brand: "Fauchon", sku: "80189"},
    {name: "Confitura de Higos 245g Fauchon", brand: "Fauchon", sku: "80190"},
    {name: "Bolsa Fauchon", brand: "Fauchon", sku: "80191"},
    {name: "Caja Autoarmable S 2.0 Coquinaria", brand: "Coquinaria", sku: "80192"},
    {name: "Caja Autoarmable M 2.0 Coquinaria", brand: "Coquinaria", sku: "80193"},
    {name: "Caja Dura Coquinaria 15x32 cms", brand: "Coquinaria", sku: "80194"},
    {name: "Caja Dura Coquinaria  30 x 30 cms", brand: "Coquinaria", sku: "80195"},
    {name: "Cafetera Italiana Greca Coquinaria 6 tazas", brand: "Coquinaria", sku: "80198"},
    {name: "Olla hierro fundido 2.9 Litros Coquinaria", brand: "Coquinaria", sku: "80199"},
    {name: "Olla hierro fundido 4.1 Litros Coquinaria", brand: "Coquinaria", sku: "80200"},
    {name: "Espumante Chandon Brut 750ml", brand: "Chandon", sku: "80202"},
    {name: "Pan de Pascua 800gr Coquinaria", brand: "Coquinaria", sku: "80203"},
    {name: "Bolsa Papel 30X12X41 Coquinaria", brand: "Coquinaria", sku: "80204"},
    {name: "Set 4 Paños de Cocina Grises Coquinaria", brand: "Coquinaria", sku: "80205"},
    {name: "Set 4 Paños de Cocina Azules Coquinaria", brand: "Coquinaria", sku: "80206"},
    {name: "Set 4 Paños de Cocina Rojos Coquinaria", brand: "Coquinaria", sku: "80207"},
    {name: "Set 4 Paños de Cocina Verdes Coquinaria", brand: "Coquinaria", sku: "80208"},
    {name: "Café de Grano Tostado Colombia Intenso", brand: "Coquinaria", sku: "80215"},
    {name: "Café de Grano Tostado Colombia Excelso", brand: "Coquinaria", sku: "80216"},
    {name: "Rigatoni 500 Gr Cipriani", brand: "Cipriani", sku: "80217"},
    {name: "Spaghetti 500gr Cipriani", brand: "Cipriani", sku: "80218"},
    {name: "Arroz para Risotto Carnaroli 1 kg Cipriani", brand: "Cipriani", sku: "80219"},
    {name: "Bellini Base Preparada Cipriani 0,75 Lts", brand: "Cipriani", sku: "80220"},
    {name: "Prosecco DO Cipriani 0,75 Lts", brand: "Cipriani", sku: "80221"},
    {name: "Crema de queso Azul con trufa 120g La Chinata", brand: "La Chinata", sku: "80222"},
    {name: "Crema de Queso Cabra con Cebolla Caramelizada 120 gr La Chinata", brand: "La Chinata", sku: "80223"},
    {name: "Patatas con cebolla para tortilla 470gr La Chinata", brand: "La Chinata", sku: "80224"},
    {name: "Alioli con Aceite de Oliva Vigen Extra 130 grs La Chinata", brand: "La Chinata", sku: "80225"},
    {name: "Alcachofas confitadas 240 gr La Chinata", brand: "La Chinata", sku: "80226"},
    {name: "Sal Maldon 250g", brand: "Maldon", sku: "80227"},
    {name: "Sal Maldon Ahumada 125g", brand: "Maldon", sku: "80228"},
    {name: "Balde Sal Maldon 570g", brand: "Maldon", sku: "80229"},
    {name: "Mermelada Frambuesa, Jengibre y Rosa Coquinaria 150g", brand: "Coquinaria", sku: "80230"},
    {name: "Mermelada Limón con Lavanda 150g Coquinaria", brand: "Coquinaria", sku: "80231"},
    {name: "Mermelada Mango Chutney 150g Coquinaria", brand: "Coquinaria", sku: "80232"},
    {name: "Mermelada Naranja con Winter Spices 150g Coquinaria", brand: "Coquinaria", sku: "80233"},
    {name: "Mermelada Pimientos Rojos y Rocoto 150g Coquinaria", brand: "Coquinaria", sku: "80234"},
    {name: "Mermelada Pomelo, Jengibre y Romero 150g Coquinaria", brand: "Coquinaria", sku: "80235"},
    {name: "PGI Balsamic Vinegar of Modena - Bronze Quality", brand: "A L'Olivier", sku: "80236"},
    {name: "Hummus con aceite oliva 180gr La Chinata", brand: "La Chinata", sku: "80237"},
    {name: "Galletas crackers Hierbas aromáticas y aceite oliva 100gr Lady Joseph", brand: "Lady Joseph", sku: "80238"},
    {name: "Galletas crackers Queso parmesano y aceite de oliva 100gr Lady Joseph", brand: "Lady Joseph", sku: "80239"},
    {name: "Galletas crackers Trufa Negra y Aceite de Oliva 100g Lady Joseph", brand: "Lady Joseph", sku: "80240"},
    {name: "Galletas crackers Paprika y Aceite de Oliva 100g Lady Joseph", brand: "Lady Joseph", sku: "80241"},
    {name: "Galletas dulces de Crema de Limón 100g Lady Joseph", brand: "Lady Joseph", sku: "80242"},
    {name: "Galletas dulces Pie de manzana 100g Lady joseph", brand: "Lady Joseph", sku: "80243"},
    {name: "CAFE DE GRANO TOSTADO COLOMBIA EXCELSO COQUINARIA", brand: "Coquinaria", sku: "80247"},
    {name: "Salmuera Ajo Tomillo Cristales de Chile  Salmuera Ajo y hierbas Coquinaria 470ml Coquinaria", brand: "Coquinaria", sku: "80267"},
    {name: "Salmuera Merken Coquinaria 470ml", brand: "Coquinaria", sku: "80266"},
    {name: "Sal Parrillera Ajo Doypack 450g", brand: "Coquinaria", sku: "80268"},
    {name: "Sal Parrillera Carmenere Doypack 450g", brand: "Coquinaria", sku: "80269"},
    {name: "Set Ahumador para tragos Coquinaria", brand: "Coquinaria", sku: "80197"},
    {name: "Sal Maldon 125 grs", brand: "Coquinaria", sku: "80262"},
    {name: "Tabla Oveja Coquinaria by Larry", brand: "Coquinaria", sku: "80259"},
    {name: "Tabla Chancho Coquinaria by Larry", brand: "Coquinaria", sku: "80260"},
    {name: "Plato Coquinaria by Larry", brand: "Coquinaria", sku: "80261"},
    {name: "Lata de té en hoja Rosa & Manzana 110grs Fauchon", brand: "Fauchon", sku: "80347"},
    {name: "Lata de té en hoja Chai & Vainilla 130grs Fauchon", brand: "Fauchon", sku: "80348"},
    {name: "Lata de té en hoja Earl Grey & Bergamota 110grs Fauchon", brand: "Fauchon", sku: "80349"},
    {name: "Lata de té en hoja Negro Citrus & Vainilla 100grs Fauchon", brand: "Fauchon", sku: "80350"},
    {name: "Lata de té en hoja Rooibos Caramelo & Miel 80 grs Fauchon", brand: "Fauchon", sku: "80351"},
    {name: "Lata de Té en hoja Harmony herbal mix 35grs Fauchon", brand: "Fauchon", sku: "80352"},
    {name: "Caja 20 Teabags Chai species & Vainilla Fauchon", brand: "Fauchon", sku: "80353"},
    {name: "Caja 20 Teabags Earl Grey & Bergamota Fauchon", brand: "Fauchon", sku: "80354"},
    {name: "Caja 20 teabags Te Verde & Jengibre Fauchon", brand: "Fauchon", sku: "80355"},
    {name: "Caja 20 Teabags Verbena Fauchon", brand: "Fauchon", sku: "80356"},
    {name: "Caja 20 teabags Harmony herbal mix Fauchon", brand: "Fauchon", sku: "80357"},
    {name: "Dulce Leche 250 grs Fauchon", brand: "Fauchon", sku: "80358"},
    {name: "Mermelada 4 frutos rojos 250 Grs Fauchon", brand: "Fauchon", sku: "80359"},
    {name: "Mermelada Bitter Naranja 250grs Fauchon", brand: "Fauchon", sku: "80360"},
    {name: "Mermelada Berries negras Grosellas 245 Grs Fauchon", brand: "Fauchon", sku: "80361"},
    {name: "Mermelada Bisou bisou 250 Grs Fauchon", brand: "Fauchon", sku: "80362"},
    {name: "Set 5 mini mermeladas 5x28 grs Fauchon", brand: "Fauchon", sku: "80363"},
    {name: "Pasta cebolla caramelizada 105grs Fauchon", brand: "Fauchon", sku: "80364"},
    {name: "Rilette de Salmon 80 grs Fauchon", brand: "Fauchon", sku: "80365"},
    {name: "Rillette de cangrejo 80 grs Fauchon", brand: "Fauchon", sku: "80366"},
    {name: "Champagne brut 750ml Fauchon", brand: "Fauchon", sku: "80367"},
    {name: "Champagne brut 375 ml Fauchon", brand: "Fauchon", sku: "80368"},
    {name: "Champagne Brut 1500 ml Fauchon", brand: "Fauchon", sku: "80369"},
    {name: "Champagne Rose 750ml Fauchon", brand: "Fauchon", sku: "80370"},
    {name: "Bolsa L 37x37x37 Fauchon", brand: "Fauchon", sku: "80371"},
    {name: "Bolsa Botella Fauchon", brand: "Fauchon", sku: "80372"},
    {name: "Pasta de Higos 105 grs Fauchon", brand: "Fauchon", sku: "80373"},
    {name: "32 Tabletas de chocolate Bitter & Leche 160 grs Fauchon", brand: "Fauchon", sku: "80374"},
    {name: "Vinagre Tomate & Albahaca 200 ml Al Olivier", brand: "A L'Olivier", sku: "80385"},
    {name: "Vinagre Yuzu & Mandarina 200 ml Al Olivier", brand: "A L'Olivier", sku: "80386"},
    {name: "Aceite de Oliva con Albahaca 250 ml Al Olivier", brand: "A L'Olivier", sku: "80381"},
    {name: "Aceite de Oliva con Ajo 250 ml Al Olivier", brand: "A L'Olivier", sku: "80382"},
    {name: "Aceite de Oliva con Hierbas Provenzales 250 ml Al Olivier", brand: "A L'Olivier", sku: "80383"},
    {name: "Aceite de Oliva para Pizza 250 ml Al Olivier", brand: "A L'Olivier", sku: "80384"},
    {name: "Turrón Duro de Almendra 300 grs Vicens", brand: "Vicens", sku: "80387"},
    {name: "Turrón Blando de Almendra 300 grs Vicens", brand: "Vicens", sku: "80388"},
    {name: "Turron Macadamia con Vainilla bourbon de Madagascar Excellence 150g Vicens", brand: "Vicens", sku: "80389"},
    {name: "Turron Pistacho 150 grs Excellence Vicens", brand: "Vicens", sku: "80390"},
    {name: "Turrón Crujiente de Neulas Albert Adrià 140g Vicens", brand: "Vicens", sku: "80391"},
    {name: "Turrón de Gintonic Adrià Natura 140g Vicens", brand: "Vicens", sku: "80392"},
    {name: "Turrón de Agramunt de Almendra Bolsa 300grs Vicens", brand: "Vicens", sku: "80393"},
    {name: "Set 4 Paños de Cocina Colores Coquinaria", brand: "Coquinaria", sku: "80121"},
    {name: "Set de Cuchilleria Oxford 6 Personas 42pzs Silver Mirror finish Coquinaria", brand: "Coquinaria", sku: "80244"},
    {name: "Olla hierro fundido 4.1 Azul Litros Coquinaria", brand: "Coquinaria", sku: "80246"},
    {name: "Set de Cuchilleria Oxford 6 Personas 42pzs Vintage Coquinaria", brand: "Coquinaria", sku: "80248"},
    {name: "Set de Cuchilleria Oxford 6 Personas 42pzs Vintage Gold Coquinaria", brand: "Coquinaria", sku: "80249"},
    {name: "Set de Cuchilleria Oxford 6 Personas 42pzs Silver Matt Coquinaria", brand: "Coquinaria", sku: "80250"},
    {name: "Set 4 cucharas moka cinta marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80251"},
    {name: "Set 4 tenedores cinta cocktail marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80252"},
    {name: "Set 24 piezas Marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80253"},
    {name: "Set asado marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80254"},
    {name: "Caja Cuchara servir marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80255"},
    {name: "Set 3 cuchillos queso marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80256"},
    {name: "Set 12 piezas marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80257"},
    {name: "Set 4 cuchillos mantequilla marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80258"},
    {name: "Set 6 Cucharas Vintage Gold Coquinaria", brand: "Coquinaria", sku: "80263"},
    {name: "Set 6 Cucharas Silver matt Coquinaria", brand: "Coquinaria", sku: "80264"},
    {name: "Set 6 cucharas silver mirror Coquinaria", brand: "Coquinaria", sku: "80265"},
    {name: "Juego de Vajilla Coquinaria crema 20pzs", brand: "Coquinaria", sku: "80270"},
    {name: "Set 4 Platos postre 21,5cms Coquinaria", brand: "Coquinaria", sku: "80271"},
    {name: "Set 4 Platos comida 26cms Coquinaria", brand: "Coquinaria", sku: "80272"},
    {name: "Set 4 Bowls 12cms Coquinaria", brand: "Coquinaria", sku: "80273"},
    {name: "Ensaladera 24cms Coquinaria", brand: "Coquinaria", sku: "80274"},
    {name: "Ensaladera 31cms Coquinaria", brand: "Coquinaria", sku: "80275"},
    {name: "Set 2 platos aperitivo Coquinaria", brand: "Coquinaria", sku: "80276"},
    {name: "Fuente 51x29cms Coquinaria", brand: "Coquinaria", sku: "80277"},
    {name: "Set 4 platos madera negra Coquinaria", brand: "Coquinaria", sku: "80278"},
    {name: "Tabla Madera Acacia 56 cms Coquinaria", brand: "Coquinaria", sku: "80280"},
    {name: "Mueble 4 bandejas Coquinaria", brand: "Coquinaria", sku: "80281"},
    {name: "Panettone con limones confitados, naranjas de Sicilia y azafrán 500gr Fiasconaro", brand: "Fiasconaro", sku: "80282"},
    {name: "Set para Servir Ensalada 2pzs Oxford Coquinaria", brand: "Coquinaria", sku: "80283"},
    {name: "Set Tenedor y Cuchara Servir 2 pzs Oxford Coquinaria", brand: "Coquinaria", sku: "80284"},
    {name: "Espatula Oxford Coquinaria", brand: "Coquinaria", sku: "80285"},
    {name: "Set 4 tenedores cinta cocktail ivory Laguiole Jean Dubost", brand: "Laguiole", sku: "80286"},
    {name: "Porta Huevo Element Myrtle Danica", brand: "Danica", sku: "80291"},
    {name: "Porta Huevo Element Calendula Danica", brand: "Danica", sku: "80292"},
    {name: "Mantequillera Element Calendula Danica", brand: "Danica", sku: "80293"},
    {name: "Plato 16.5 cms Element Arbor Danica", brand: "Danica", sku: "80294"},
    {name: "Plato 16.5 cms Element Myrtle Danica", brand: "Danica", sku: "80295"},
    {name: "Bowl 15.8 cms Element Myrtle Danica", brand: "Danica", sku: "80296"},
    {name: "Bowl 15.8 cms Element Arbor Danica", brand: "Danica", sku: "80297"},
    {name: "Bowl 15.8 cms Element Calendula Danica", brand: "Danica", sku: "80298"},
    {name: "Mug Element Myrtle Danica", brand: "Danica", sku: "80299"},
    {name: "Mug Element Arbor Danica", brand: "Danica", sku: "80300"},
    {name: "Plato 25.4 cms Element Calendula Danica", brand: "Danica", sku: "80301"},
    {name: "Plato servir Element calendula Danica", brand: "Danica", sku: "80302"},
    {name: "Paño cocina wae Jasmine Danica", brand: "Danica", sku: "80303"},
    {name: "Paño cocina wae Blomma Danica", brand: "Danica", sku: "80304"},
    {name: "Bowl ensalada Hanami Danica", brand: "Danica", sku: "80305"},
    {name: "Plato fondo Hanami Danica", brand: "Danica", sku: "80306"},
    {name: "Plato pan Hanami Danica", brand: "Danica", sku: "80307"},
    {name: "Bowl Postre Hanami Danica", brand: "Danica", sku: "80308"},
    {name: "Bowl chico Hanami Danica", brand: "Danica", sku: "80309"},
    {name: "Plato servir 30 cms Hanami Danica", brand: "Danica", sku: "80310"},
    {name: "Plato servir 37 cms Hanami Danica", brand: "Danica", sku: "80311"},
    {name: "Set 4 vasos Hanami Danica", brand: "Danica", sku: "80312"},
    {name: "Set 2 piezas Servir madera Wavy Danica", brand: "Danica", sku: "80313"},
    {name: "Individual Lattice Gris Danica", brand: "Danica", sku: "80314"},
    {name: "Individual Lattice Burdeo Danica", brand: "Danica", sku: "80315"},
    {name: "Individual Lattice Verde Danica", brand: "Danica", sku: "80316"},
    {name: "Set 4 tazas expresso Maison Danica", brand: "Danica", sku: "80317"},
    {name: "Set 4 tazas expresso Aquarius Danica", brand: "Danica", sku: "80318"},
    {name: "Paño esponja compostable pavo real Danica", brand: "Danica", sku: "80319"},
    {name: "Paño esponja compostable gallina Danica", brand: "Danica", sku: "80320"},
    {name: "Paño esponja compostable sardinas Danica", brand: "Danica", sku: "80321"},
    {name: "Paño esponja compostable algas Danica", brand: "Danica", sku: "80322"},
    {name: "Paño esponja compostable langsosta Danica", brand: "Danica", sku: "80323"},
    {name: "Paño esponja compostable paris Danica", brand: "Danica", sku: "80324"},
    {name: "Paño esponja compostable cafe Danica", brand: "Danica", sku: "80325"},
    {name: "Paño esponja compostable parrilla Danica", brand: "Danica", sku: "80326"},
    {name: "Esponja compostable Danica", brand: "Danica", sku: "80430"},
    {name: "Encendedor de Velas recargable Coquinaria", brand: "Coquinaria", sku: "80328"},
    {name: "Plato 16.5 cms Element Calendula Danica", brand: "Danica", sku: "80332"},
    {name: "Set 4 Cucharas Element Danica", brand: "Danica", sku: "80333"},
    {name: "Set 6 Copas Champagne Wave Coquinaria", brand: "Coquinaria", sku: "80334"},
    {name: "Set 6 Copas Vino Wave Coquinaria", brand: "Coquinaria", sku: "80335"},
    {name: "Set 6 Vasos Wave Coquinaria", brand: "Coquinaria", sku: "80336"},
    {name: "Set 6 Copas Prisma Coquinaria", brand: "Coquinaria", sku: "80337"},
    {name: "Set 6 Vasos Prisma Coquinaria", brand: "Coquinaria", sku: "80338"},
    {name: "Set 6 Copas Nova Coquinaria", brand: "Coquinaria", sku: "80339"},
    {name: "Set 6 Vasos Nova Coquinaria", brand: "Coquinaria", sku: "80340"},
    {name: "Set 4 Chips de madera Coquinaria", brand: "Coquinaria", sku: "80341"},
    {name: "Descorchador manual Coquinaria", brand: "Coquinaria", sku: "80342"},
    {name: "Tabla Madera negra 49 cms Coquinaria", brand: "Coquinaria", sku: "80343"},
    {name: "Plato Madera negra 38 cms Coquinaria", brand: "Coquinaria", sku: "80344"},
    {name: "Set para servir 2 pcs Madera negra Coquinaria", brand: "Coquinaria", sku: "80345"},
    {name: "Miel Multifloral 540 grs Coquinaria", brand: "Coquinaria", sku: "80346"},
    {name: "Canasto negro Coquinaria", brand: "Coquinaria", sku: "80375"},
    {name: "Organizador Cubiertos Coquinaria", brand: "Coquinaria", sku: "80376"},
    {name: "Set 2 Bandejas Coquinaria", brand: "Coquinaria", sku: "80377"},
    {name: "Set 4 anillos para servilletas Coquinaria", brand: "Coquinaria", sku: "80378"},
    {name: "Servilletero Coquinaria", brand: "Coquinaria", sku: "80379"},
    {name: "Hielera 4L Coquinaria", brand: "Coquinaria", sku: "80380"},
    {name: "Bolsa Coquinaria XL", brand: "Coquinaria", sku: "80394"},
    {name: "Extracto de Vainilla pura 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80395"},
    {name: "Extracto de Vainilla pura Sin azucar 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80396"},
    {name: "Pasta de Vainilla pura de Madagascar 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80397"},
    {name: "Pasta de Vainilla pura 118 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80398"},
    {name: "Extracto de Almendra pura 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80399"},
    {name: "Extracto de Limón puro 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80400"},
    {name: "Extracto de Naranja pura 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80401"},
    {name: "Hielera 4L Coquinaria", brand: "Coquinaria", sku: "80380"},
    {name: "Bellini Zero 0,75 L", brand: "Cipriani", sku: "80329"},
    {name: "Bellini Cocktail 200 ml Cipriani", brand: "Cipriani", sku: "80407"},
    {name: "Pan de pascua  Coquinaria 400 grs", brand: "Coquinaria", sku: "80402"},
    {name: "Crackers con especias 130 grs Lady Joseph", brand: "Lady Joseph", sku: "80439"},
    {name: "Crackers con sal ahumada 130 grs Lady Joseph", brand: "Lady Joseph", sku: "80440"},
    {name: "Crackers con harina de centeno y sal 130 grs Lady Joseph", brand: "Lady Joseph", sku: "80441"},
    {name: "Crackers para quesos selección 390 grs", brand: "Lady Joseph", sku: "80442"},
    {name: "Mix 4 pimientas 340 grs Coquinaria", brand: "Coquinaria", sku: "80420"},
    {name: "Sal del himalaya 750 grs Coquinaria", brand: "Coquinaria", sku: "80421"},
    {name: "Bombón praliné crocante Coquinaria 150 grs", brand: "Coquinaria", sku: "80403"},
    {name: "Bombón caramelo salado Coquinaria 150 grs", brand: "Coquinaria", sku: "80404"},
    {name: "Naranjitas Bañadas Coquinaria 150 grs", brand: "Coquinaria", sku: "80406"},
    {name: "Nougatine Coquinaria 150 grs", brand: "Coquinaria", sku: "80405"},
    {name: "Galletas Wafer Cracker Pimienta 100 grs Nat", brand: "Coquinaria", sku: "80451"},
    {name: "Galletas Wafer Cracker Romero 100grs Nat", brand: "Coquinaria", sku: "80452"},
    {name: "Set 4 Paños de Cocina Verduras rojo Coquinaria", brand: "Coquinaria", sku: "80453"},
    {name: "Set 4 Paños de Cocina Verduras azul Coquinaria", brand: "Coquinaria", sku: "80454"},
    {name: "Set 4 Paños de Cocina Verduras amarillo Coquinaria", brand: "Coquinaria", sku: "80455"},
    {name: "Set 4 Paños de Cocina Verduras verde Coquinaria", brand: "Coquinaria", sku: "80456"},
    {name: "Molinillo Mix 4 pimientas Coquinaria", brand: "Coquinaria", sku: "80457"},
    {name: "Molinillo Sal Himalaya Coquinaria", brand: "Coquinaria", sku: "80458"}
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
        // Si todo está completo, mostrar opción de firma
        switchBrand('Todos');
        alert('¡Felicidades! Inventario del día completo.');
        
        // NUEVO: Mostrar modal de firma
        setTimeout(() => {
            showCompletionModal();
        }, 500);
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

/* ===================================
   NUEVAS FUNCIONES: FIRMA Y EXPORTACIÓN
   =================================== */

function showCompletionModal() {
    // Modal que aparece cuando se completa el conteo
    const message = `
        ¿Deseas firmar y exportar los reportes del conteo?
        
        • 📊 Excel con detalle completo
        • 📄 PDF firmado
        • 📱 Compartir por WhatsApp
        • 📧 Enviar por Email
    `;
    
    if (confirm(message)) {
        signatureExportModule.showSignatureModal();
    }
}

function updateSignerDisplay() {
    const displayName = document.getElementById('displaySignerName');
    if (displayName && currentSignerName) {
        displayName.textContent = currentSignerName;
    }
}

// Hook: Ejecutar cuando el módulo de firma guarde el nombre
const originalValidateAndSaveSignature = window.signatureExportModule?.validateAndSaveSignature;
if (originalValidateAndSaveSignature) {
    window.signatureExportModule.validateAndSaveSignature = function() {
        const result = originalValidateAndSaveSignature.call(this);
        if (result) {
            updateSignerDisplay();
        }
        return result;
    };
}

// Inicialización
init();
