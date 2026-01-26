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
    {name: "Tomates Secos 220gr", brand: "La chinata", sku: "80012", descripcion: "Los Tomates Secos en Aceite de Oliva Extra Virgen están elaborados con una selección de tomates de primera calidad y conservados en AOVE La Chinata."},
    {name: "Cebolla Caramelizada al Vinagre Jerez 220gr", brand: "La chinata", sku: "80013"},
    {name: "Pimientos Asados en Almíbar 220gr", brand: "La chinata", sku: "80014"},
    {name: "Crema de Pimientos y Berenjenas 180gr", brand: "La chinata", sku: "80015"},
    {name: "Mayonesa de Trufa con AOVE 115gr", brand: "La chinata", sku: "80016"},
    {name: "Pesto a la Genovese 180 grs", brand: "La chinata", sku: "80017", descripcion: "El Pesto a la Genovese 180gr de La Chinata es una salsa gourmet elaborada con albahaca genovesa fresca, aceite de oliva virgen extra, piñones, castañas de cajú, queso curado, ajo y sal. Su textura cremosa y sabor intenso aportan un auténtico toque mediterráneo a tus preparaciones. Ideal para realzar pastas, carnes, pescados o verduras, este pesto combina ingredientes seleccionados para ofrecer un perfil aromático único y equilibrado. Perfecto para quienes buscan calidad premium y un sabor italiano tradicional en su cocina."},
    {name: "Pesto Rojo 180 gr", brand: "La chinata", sku: "80018"},
    {name: "Pasta Tagliarelle al huevo 250 grs", brand: "Cipriani", sku: "80019", descripcion: "Los Tagliarelle de Cipriani representan el pináculo de la excelencia de la pasta, meticulosamente elaborados a la perfección. Estas pastas de 1,1 cm de ancho, con un tiempo de cocción de sólo 3 minutos, son delicadas, largas y planas, y encarnan el arte tradicional de hacer pasta italiana. Al tacto se percibe una sutil rugosidad, atribuida a la sémola de alta calidad cuidadosamente elegida para su creación, que representa el sello de la artesanía."},
    {name: "Pasta Tagliarelle al huevo con espinaca 250 grs", brand: "Cipriani", sku: "80020"},
    {name: "Pasta Pappardelle al huevo 250grs", brand: "Cipriani", sku: "80021", descripcion: "Los Pappardelle al huevo de Cipriani encarnan la esencia de la maestría culinaria italiana. Producidas exclusivamente en las instalaciones de Cipriani en Venecia, estas anchas cintas de pasta, que miden 1,5 cm de ancho cuando están secas y se expanden durante la cocción, representan una delicia tradicional reinventada. Con un tiempo de cocción de 4 minutos, estas láminas de pappardelle al huevo de 0,6 mm de grosor muestran el compromiso de la marca con la calidad y la experiencia en el arte de hacer pasta."},
    {name: "Pasta Pappardelle al huevo y espinaca 250 grs", brand: "Cipriani", sku: "80022", descripcion: "Con una infusión de vibrantes espinacas, estas pappardelle cuentan con un llamativo tono verde que sigue siendo visualmente atractivo incluso después de cocinarlas. Su espesor inicial de 0,6 mm les permite cocinar manteniendo una consistencia perfecta al dente, mientras que su capacidad para agrandarse con gracia durante la cocción garantiza una textura satisfactoria."},
    {name: "Pasta Tagliolini al huevo 250 grs", brand: "Cipriani", sku: "80023"},
    {name: "Pasta Tagliolini al huevo y espinaca 250 grs", brand: "Cipriani", sku: "80024"},
    {name: "Salsa Pomodoro 340 grs", brand: "Cipriani", sku: "80025"},
    {name: "Salsa Sansovina 340 grs", brand: "Cipriani", sku: "80026"},
    {name: "Pesto 180gr", brand: "Cipriani", sku: "80027"},
    {name: "Set de Bloc de Foie gras de Pato y ganso 2 x 45 grs", brand: "Edouard Artzner", sku: "80028"},
    {name: "Bloc de foie gras de canard + Confit de figues au Poivre de Sechuan", brand: "Edouard Artzner", sku: "80029", descripcion: "El suave y delicado foie gras de pato se combina de manera perfecta con el confit de higos, que aporta un toque dulce y aromático, realzado por el sutil picor del poivre de Sechuan. Juntos, crean un equilibrio de sabores inolvidable"},
    {name: "Bloc de Foie Gras de Ganso 145 grs", brand: "Edouard Artzner", sku: "80030", descripcion: "Cocinar este Foie Gras en lata garantiza conservar el sabor deseado por el Chef de la Casa: un producto con una textura que se derrite en la boca, delicadamente aderezado por la mezcla de 11 especias (una auténtica firma gustativa de la Casa)."},
    {name: "Bloc de Foie Gras de Pato 200 grs", brand: "Edouard Artzner", sku: "80031"},
    {name: "Mousse de Pato con Kirsch 180 grs", brand: "Edouard Artzner", sku: "80032", descripcion: "Edouard Artzner te invita a degustar una cremosa y finísima Mousse de Pato. Realzado con una fragante nota de Kirsch, le da un sabor sorprendente. Según vuestros deseos, para untar sobre todo tipo de pan."},
    {name: "Paté de Alsacia al Riesling 180gr", brand: "Edouard Artzner", sku: "80033"},
    {name: "Pate de Hígado con Cerezas 100g", brand: "Edouard Artzner", sku: "80034", descripcion: "Una suculenta receta local enriquecida con la frescura ligeramente picante de las guindas. La carne generosa, picada lo suficiente, ofrece una agradable masticabilidad."},
    {name: "Paté de Alsacia al Riesling 100gr", brand: "Edouard Artzner", sku: "80035"},
    {name: "Chutney de Higos Confitados 60 g rs", brand: "Edouard Artzner", sku: "80036"},
    {name: "Mermelada Sin Azúcar de Frutilla 210 grs", brand: "Belberry", sku: "80037", descripcion: "Fruta seleccionada mundialmente por su sabor excepcional, sin exceso de azúcar, sin colorantes ni conservantes, un lento proceso de elaboración en marmita abierta… y la mano cariñosa de un confitero artesano. La Mermelada de Fresa Belberry sin azúcar añadido es apta para diabéticos o personas que quieran reducir su consumo de azúcar. El dulzor se crea añadiendo maltitol, un sustituto del azúcar."},
    {name: "Mermelada Sin Azúcar de Damasco 210 grs", brand: "Belberry", sku: "80038", descripcion: "Fruta seleccionada mundialmente por su sabor excepcional, sin exceso de azúcar, sin colorantes ni conservantes, un lento proceso de elaboración en marmita abierta… y la mano cariñosa de un confitero artesano. Mermelada de Albaricoque Belberry sin azúcar añadido es apta para diabéticos o personas que quieran reducir su consumo de azúcar. El dulzor se crea añadiendo maltitol, un sustituto del azúcar."},
    {name: "Mermelada Sin Azúcar de Frambuesa 210 grs", brand: "Belberry", sku: "80039", descripcion: "Fruta seleccionada mundialmente por su sabor excepcional, sin exceso de azúcar, sin colorantes ni conservantes, un lento proceso de elaboración en marmita abierta… y la mano cariñosa de un confitero artesano. Mermelada de sin azúcar añadido es apta para diabéticos o personas que quieran reducir su consumo de azúcar. El dulzor se crea añadiendo maltitol, un sustituto del azúcar."},
    {name: "Mermelada Sin Azúcar de Guinda 210 grs", brand: "Belberry", sku: "80040", descripcion: "Fruta seleccionada mundialmente por su sabor excepcional, sin exceso de azúcar, sin colorantes ni conservantes, un lento proceso de elaboración en marmita abierta… y la mano cariñosa de un confitero artesano."},
    {name: "Salsa Gourmet de Mango Picante 250 grs", brand: "Belberry", sku: "80041", descripcion: "Esta original salsa gourmet de mango tiene un sabor agridulce y especiado, precisamente por las especias que componen la receta, como la guindilla, el curry y el jengibre"},
    {name: "Salsa Barbecue Tomate Ketchup 250 grs", brand: "Belberry", sku: "80042"},
    {name: "Salsa Jalapeño Tomato Ketchup 250 grs", brand: "Belberry", sku: "80043"},
    {name: "Chutney para Quesos de Higos y Pimienta Negra 130 grs", brand: "Belberry", sku: "80044", descripcion: "Experimenta el equilibrio perfecto entre dulce y picante con nuestra Confitura para Queso Azul. La textura suave de los higos seleccionados a mano, combinada con el toque especiado de la pimienta negra fresca, crea una experiencia sensorial única. Ideal para degustar en frío, esta confitura eleva cualquier selección de quesos, especialmente el queso azul, realzando sus matices complejos y profundos"},
    {name: "Chutney para quesos de Frambuesa y Anís Estrellado 130 grs", brand: "Belberry", sku: "80045", descripcion: "No tan dulce como una mermelada tradicional, esta delicia de frambuesa y anís estrellado."},
    {name: "Chutney para quesos de damasco y comino 130 grs", brand: "Belberry", sku: "80046", descripcion: "l sabor dulce y afrutado del albaricoque se combina particularmente bien con el sabor intenso del comino y su aroma típicamente oriental."},
    {name: "Crema de Caramelo Salada 135 grs", brand: "Belberry", sku: "80047", descripcion: "Una combinación clásica y deliciosa es el caramelo mantecoso y la flor de sal."},
    {name: "Lata con té en bolsa English Breakfast 30 x 3 grs", brand: "Cartwright & Butler", sku: "80048", descripcion: "Un té negro robusto que le refrescará por la mañana y le dará energía durante el día. La taza de gran cuerpo despliega profundos matices malteados y un rico sabor de alta calidad a cada sorbo."},
    {name: "Lata con té en bolsa Earl Grey  30 x 3grs", brand: "Cartwright & Butler", sku: "80049", descripcion: "Dos siglos de tradición inglesa garantizan la experiencia perfecta experiencia, el té seleccionado está ligeramente perfumado con bergamota. Cada sorbo es suave y distinto sobre un fondo de soleados cítricos sureños."},
    {name: "Caja con té en bolsas English Breakfast 10 x 3 grs", brand: "Cartwright & Butler", sku: "80050", descripcion: "Un té negro robusto que le refrescará por la mañana y le dará energía durante el día. La taza de gran cuerpo despliega profundos matices malteados y un rico sabor de alta calidad a cada sorbo."},
    {name: "Caja con té en bolsas Earl Grey 10 x 3 grs", brand: "Cartwright & Butler", sku: "80051"},
    {name: "Lata con Galletas de Mantequilla y Ralladura de Limón 200g", brand: "Cartwright & Butler", sku: "80058", descripcion: "Este shortbread se elabora siguiendo una receta familiar con abundante mantequilla, una textura desmenuzable perfectamente horneada y un toque de zumo y ralladura de limón."},
    {name: "Caja con Galletas de Mantequilla y Ralladura de Limón 200g", brand: "Cartwright & Butler", sku: "80059", descripcion: "Este shortbread se elabora siguiendo una receta familiar con abundante mantequilla, una textura desmenuzable perfectamente horneada y un toque de zumo y ralladura de limón."},
    {name: "Lata con Galletas de Mantequilla y Almendras 200g", brand: "Cartwright & Butler", sku: "80060", descripcion: "Tradicional galleta de mantequilla con sabor a almendra y aderezada con copos de almendra natural."},
    {name: "Caja con Galletas de Mantequilla y Almendras 200g", brand: "Cartwright & Butler", sku: "80061", descripcion: "Tradicional galleta de mantequilla con sabor a almendra y aderezada con copos de almendra natural."},
    {name: "Lata Time for Tea Selection con galletas y bolsas de té English Breakfast 240g", brand: "Cartwright & Butler", sku: "80062", descripcion: "El dúo perfecto para el desayuno. Incluye nuestro shortbread de receta clásica elaborado con mantequilla y repleto de trocitos de caramelo salado emparejado con un té de desayuno inglés con cuerpo."},
    {name: "Lata con té en hoja English Breakfast 100 grs", brand: "Cartwright & Butler", sku: "80063", descripcion: "Cuando la mañana exige algo enérgico, malteado y robusto para empezar, no hay nada mejor que servirse una taza de nuestro English Breakfast Blend Tea. Hemos combinado el Kangaita Pekoe keniano de color rojo intenso con el mejor Assam de segunda cosecha de la nueva temporada. El resultado es una infusión adecuadamente fuerte con un sabor intenso que se presta a un chorrito de leche. Disfrute de una taza como parte de su rutina matutina, ¡especialmente si dicha rutina incluye unos huevos benedictinos o un desayuno inglés completo!"},
    {name: "Lata con té en hoja Earl Grey Celebrated 100 grs", brand: "Cartwright & Butler", sku: "80064", descripcion: "Podríamos ponernos líricos sobre los orígenes del Earl Grey, pero en lugar de eso damos todo el protagonismo al propio té. Nuestro té negro Glendale FOP se cultiva en las plantaciones de té Nilgiri de los Ghats occidentales, en las montañas del sur de la India, y tiene un sabor intensamente aromático y fragante. Añadimos sabor natural de bergamota para dar a este té su distintiva nota cítrica, junto con un puñado de cáscaras de naranja y acianos para darle un toque final. Disfrútelo solo o con un chorrito de leche; también le recomendamos que lo acompañe con un bizcocho de mantequilla, pero eso lo diríamos nosotros, ¿no?"},
    {name: "Lata de café molido York Blend 227 grs", brand: "Cartwright & Butler", sku: "80065", descripcion: "Tostado medio, molido, 100% Arábica, de cuerpo medio y final limpio, es una mezcla compleja y fácil de beber."},
    {name: "Caja con Café Molido York Blend 227 grs", brand: "Cartwright & Butler", sku: "80066", descripcion: "Esta mezcla cotidiana no tiene nada de cotidiana. Por el contrario, este café 100% Arábica de tueste medio ofrece un sabor limpio, de cuerpo medio y un acabado complejo. La mezcla perfecta para cualquier momento del día. Disponible aquí molido, también lo tenemos disponible en granos enteros, aquí."},
    {name: "Aceite de Oliva con Albahaca 250 ml", brand: "A L'Olivier", sku: "80067", descripcion: "El Aceite de Oliva con Albahaca 250 ml Al 'Olivier de Coquinaria combina aceite de oliva extra virgen con albahaca fresca, logrando un sabor herbáceo, dulce y vibrante. Ideal para realzar platos mediterráneos como ensaladas, pastas, pizzas, bruschettas, risottos y caprese. Su perfil natural y aromático lo convierte en un condimento gourmet imprescindible para quienes buscan sabores frescos y saludables. Encuéntralo en Coquinaria, referencia en productos gourmet y cocina de calidad."},
    {name: "Aceite de Oliva Extra Virgen con Trufa Negra 250 ml", brand: "A L'Olivier", sku: "80068", descripcion: "El sabor de las setas y la trufa, infundido en un aceite de oliva virgen extra y realzado con un aroma de trufa. Esta combinación es una fina mezcla de bondad gourmet. Sabe muy bien con cualquier receta otoñal debido a sus notas terrosas."},
    {name: "Aceite de Oliva Extra Virgen con Pimiento de Espelette  250 ml", brand: "A L'Olivier", sku: "80069", descripcion: "Aceite de Oliva Extra Virgen con Pimiento de Espelette 250 ml Al 'Olivier: Fusión única de aceite de oliva virgen extra y chile vasco de Espelette, ofreciendo un toque picante y afrutado. Ideal para realzar sabores en platos de mariscos, carnes a la parrilla, pastas, vinagretas y más. Perfecto para rociar sobre gambas, salmón a la plancha, o para terminar recetas gourmet. Su perfil aromático es versátil, ideal tanto en preparaciones calientes como frías. ¡Transforma tus platos con este toque gourmet!"},
    {name: "Aceite de Oliva con Jengibre Peruano 150 ml", brand: "A L'Olivier", sku: "80070", descripcion: "Las notas especiadas, cálidas y ligeramente alimonadas del jengibre forman un dúo perfecto con el aceite de oliva."},
    {name: "Aceite de Oliva con Mandarinas 150 ml", brand: "A L'Olivier", sku: "80071", descripcion: "Descubra nuestro aceite de oliva de clementina del Pays de Niza. La región de Niza, con su clima soleado y sus suelos en terrazas, confiere a este pequeño cítrico su sabor excepcional. Sus notas delicadamente ácidas y afrutadas te transportarán cada día a la Provenza."},
    {name: "Aceite de Oliva con Ajo 150 ml", brand: "A L'Olivier", sku: "80072", descripcion: "Los sabores picantes y especiados del ajo silvestre dan carácter a nuestro aceite de oliva infusionado. El intenso sabor del ajo silvestre es similar al del cebollino y seguramente agregará un toque de sabor a tus platos favoritos."},
    {name: "Aceite Oliva Extra Virgen en Spray 250ml", brand: "Coquinaria", sku: "80073", descripcion: "Nuestro aceite de oliva virgen extra esencial es imprescindible en tu cocina. Nos encanta la botella con atomizador, que permite un control más fácil de las porciones y una decoración delicada de los platos."},
    {name: "Aceto Di Modena Spray 250 ml", brand: "Coquinaria", sku: "80074", descripcion: "El vinagre balsámico definitivo, para disfrutar todos los días y aportar un toque de sofisticación a tus recetas favoritas. Este vinagre se presenta en una botella con atomizador para que sea más fácil dosificar y adornar tus platos."},
    {name: "Crema De Aceto Balsámico 250 ml", brand: "A L'Olivier", sku: "80075", descripcion: "La Crema de Aceto Balsámico 250 ml Al 'Olivier combina vinagre balsámico de Módena con mosto de uva cocido en una textura aterciopelada y un sabor agridulce perfectamente equilibrado. Versátil y sofisticada, realza carnes, frutos rojos, postres y salsas, aportando profundidad, dulzor y elegancia a cada preparación. Ideal para quienes buscan un toque gourmet en platos salados o dulces, esta crema balsámica transforma lo cotidiano en algo especial."},
    {name: "Vinagre con Pulpa Frambuesa 200 ml", brand: "A L'Olivier", sku: "80076", descripcion: "El Vinagre con Pulpa de Frambuesa 200 ml Al 'Olivier combina vinagre de calidad con puré de frambuesa, logrando un equilibrio entre acidez, dulzor y frescura, con sutiles notas amaderadas. Su perfil afrutado y versátil realza tanto platos salados como dulces. Ideal para ensaladas con remolacha o col lombarda, mollejas, carnes desglasadas, queso de cabra fresco o postres como higos con helado de vainilla. Un toque vibrante y gourmet para tus recetas más creativas."},
    {name: "Vinagre con Pulpa Mango 200 ml", brand: "A L'Olivier", sku: "80077", descripcion: "El Vinagre con Pulpa de Mango 200 ml Al 'Olivier, elaborado con puré de mango natural, combina dulzura suave, notas florales y una ligera acidez en una textura cremosa y versátil. Perfecto para acompañar magret de pato, cerdo caramelizado, ceviches, postres con mango y coco, o como base para glaseados y cócteles. Este vinagre gourmet realza tanto platos salados como dulces, siendo ideal para quienes buscan un toque exótico, frutal y sofisticado en sus preparaciones."},
    {name: "Vinagre con Zucchini y Menta 200 ml", brand: "A L'Olivier", sku: "80078", descripcion: "El Vinagre con Zucchini y Menta 200 ml Al 'Olivier fusiona el sabor suave del calabacín provenzal con la frescura herbal de la menta, creando un aderezo ligero, equilibrado y aromático. Ideal para realzar verduras crudas, aceitunas verdes, anchoas, aliños con aceite de oliva virgen extra, pescados, mariscos o ensaladas de rúcula y ceviches vegetarianos. Su perfil fresco y versátil lo convierte en el aliado perfecto para dar vida a preparaciones vegetales y recetas mediterráneas."},
    {name: "Vinagreta de Piña y Albahaca 200 ml", brand: "A L'Olivier", sku: "80079", descripcion: "La Vinagreta de Piña y Albahaca 200 ml Al 'Olivier ofrece una mezcla exótica y refrescante que combina la acidez natural de la piña con el aroma intenso de la albahaca. Este aliño original y equilibrado es ideal para ensaladas, carpaccios de marisco, ceviches o para marinar aves, cerdo y langostinos. Aporta frescura, carácter y un giro gourmet a tus platos, siendo perfecta para quienes buscan sabores tropicales y aromáticos en sus preparaciones diarias."},
    {name: "Vinagreta de Mango y Lemongrass 200 ml", brand: "A L'Olivier", sku: "80080", descripcion: "Nuestro aderezo de limoncillo y mango es imprescindible para cualquiera que busque añadir un toque exótico a sus recetas. Junto con nuestros expertos, hemos encontrado la mejor combinación de sabores para aportar frescura y dulzura a tus recetas favoritas."},
    {name: "Lata con Galletas de mantequilla y trozos de chocolate", brand: "Cartwright & Butler", sku: "80081", descripcion: "Este shortbread se elabora siguiendo una receta familiar con abundante mantequilla, una textura desmenuzable perfectamente horneada y un generoso espolvoreado de trocitos de chocolate con leche."},
    {name: "Caja con Galletas de mantequilla y trozos de chocolate", brand: "Cartwright & Butler", sku: "80082", descripcion: "Nuestro Chocolate Drop Shortbread se elabora siguiendo nuestra receta familiar, con abundante mantequilla, una textura desmenuzable perfectamente horneada y un generoso espolvoreado de trocitos de chocolate con leche."},
    {name: "Juego de Vajilla Coquinaria Blanco 16 piezas Coquinaria", brand: "Coquinaria", sku: "80088", descripcion: "El set de vajilla Coquinaria en porcelana blanca combina elegancia y resistencia, ideal para el uso diario o celebraciones. Su diseño atemporal resalta los colores y texturas de los alimentos, aportando sofisticación a cada comida."},
    {name: "Juego de Vajilla Coquinaria Gris 20 piezas Coquinaria", brand: "Coquinaria", sku: "80089", descripcion: "El Juego de Vajillas Gris Coquinaria de 20 piezas ofrece elegancia y funcionalidad con su diseño minimalista en porcelana gris mate. Resistente a cambios de temperatura, es apto para microondas, horno, congelador y lavavajillas. Ideal para una presentación moderna y sofisticada en cada comida."},
    {name: "Tabla quesos 25 cms marmol Coquinaria", brand: "Coquinaria", sku: "80090", descripcion: "Disfruta la esencia de Alsacia con esta terrina de Edouard Artzner, realzada con el toque afrutado del vino Riesling. Perfecta para untar en pan rústico, es ideal para aperitivos o almuerzos al aire libre, reflejando la autenticidad de la cocina tradicional."},
    {name: "Set 3 cuchillos para quesos Coquinaria", brand: "Coquinaria", sku: "80091", descripcion: "El set de cuchillos de aperitivo de mármol negro Coquinaria combina estilo y precisión para servir quesos, embutidos y más. Con hojas afiladas y mangos elegantes, ofrece un agarre cómodo y sofisticado, ideal para reuniones y cenas."},
    {name: "Enfriador de vinos marmol Coquinaria", brand: "Coquinaria", sku: "80092", descripcion: "El enfriador de vinos de mármol negro Coquinaria mantiene la temperatura ideal sin hielo ni electricidad. Su diseño elegante y propiedades térmicas lo hacen funcional y sofisticado, perfecto para cenas y celebraciones."},
    {name: "Coctelera Coquinaria", brand: "Coquinaria", sku: "80093", descripcion: "Esta coctelera de diseño innovador combina funcionalidad y elegancia. Su tapa multifuncional sirve como copa de martini y jigger, mientras que su acero inoxidable 304 garantiza durabilidad. Con doble pared aislante, vertido eficiente y agarre cómodo, es a prueba de fugas y libre de BPA, ideal para preparar bebidas con estilo."},
    {name: "Descorchador de vinos Coquinaria", brand: "Coquinaria", sku: "80094", descripcion: "Este descorchador de vino combina elegancia y rendimiento con su diseño ergonómico en negro mate. Su palanca de aleación de zinc permite una extracción suave, mientras que el acero inoxidable garantiza durabilidad. Incluye cortador de láminas y piezas en espiral adicionales, ideal para quienes buscan estilo y funcionalidad."},
    {name: "Set 5 accesorios Mixología Coquinaria", brand: "Coquinaria", sku: "80095", descripcion: "Este kit de herramientas para cóctel en negro mate combina funcionalidad y elegancia. Incluye muddler, medidor doble, exprimidor y colador, ofreciendo precisión en cada preparación. Su diseño sofisticado es ideal para crear bebidas con estilo profesional en casa."},
    {name: "Hielera Coquinaria", brand: "Coquinaria", sku: "80096", descripcion: "La hielera Coquinaria es una pieza sofisticada con doble pared aislante que conserva el hielo por mayor tiempo, manteniendo las bebidas a temperatura ideal. Se distingue por su diseño contemporáneo en negro mate, tanto en tapa como cuerpo, fabricada en acero inoxidable que combina elegancia con durabilidad."},
    {name: "Set Molinillos Sal & Pimienta Acero inoxidable Coquinaria", brand: "Coquinaria", sku: "80097", descripcion: "Este set de molinillos para sal y pimienta combina elegancia y funcionalidad. Fabricados en acero inoxidable pulido, aportan brillo a cualquier mesa, sea casual o formal. Su diseño ergonómico permite un molido fácil y preciso que maximiza el sabor y aroma de los condimentos. Representan el equilibrio ideal entre sofisticación y utilidad para mejorar la experiencia culinaria diaria."},
    {name: "Set Molinillos Sal & Pimienta Madera  Coquinaria", brand: "Coquinaria", sku: "80098", descripcion: "Elegantes molinillos fabricados en madera de acacia con sofisticados detalles en acero inoxidable dorado. Equipados con mecanismo de molienda cerámico y engranajes de alta resistencia que garantizan durabilidad y rendimiento óptimo. El complemento perfecto para sazonar con estilo y precisión tus creaciones culinarias."},
    {name: "Set Abridor de vinos y bomba al vacío 2 en 1 + 2 Tapones Coquinaria", brand: "Coquinaria", sku: "80099", descripcion: "Sofisticado set que combina un abridor de vinos de alta calidad con una bomba de vacío y dos tapones de acero inoxidable. Diseñado para los amantes del vino, este conjunto permite abrir botellas con facilidad y preservar el sabor y frescura del vino por más tiempo. Elegante y funcional, es el complemento perfecto para disfrutar cada copa en su punto óptimo."},
    {name: "Set Sellador de vino y espumante al vacio 2 pzs Coquinaria", brand: "Coquinaria", sku: "80100"},
    {name: "Sal Rosada Molinillo 65gr Coquinaria", brand: "Coquinaria", sku: "80101"},
    {name: "Sal con limón Molinillo 65 gr Coquinaria", brand: "Coquinaria", sku: "80102"},
    {name: "Sal carmenere Molinillo 65gr Coquinaria", brand: "Coquinaria", sku: "80103", descripcion: "Una sal pura y cristalina de distintos sabores. Filtrada la sal por el salar de Atacama, entregando los minerales, la paciencia y el tiempo de darnos un sabor único."},
    {name: "Sal clásica Molinillo 65 gr Coquinaria", brand: "Coquinaria", sku: "80104", descripcion: ""},
    {name: "Sal con merken molinillo 65gr COQUINARIA", brand: "Coquinaria", sku: "80105", descripcion: "Sal de los andes Bolivianos, 100% natural y bajo en sodio."},
    {name: "Doypack Merken 450gr", brand: "Coquinaria", sku: "80106"},
    {name: "Doypack parrillero Cerveza 450gr Coquinaria", brand: "Coquinaria", sku: "80107"},
    {name: "Doypack Sal Rosada", brand: "Coquinaria", sku: "80109"},
    {name: "Doypack parrillero Clásica 450gr Coquinaria", brand: "Coquinaria", sku: "80111", descripcion: ""},
    {name: "Aceite de Trufa Negra 250ml Coquinaria", brand: "Coquinaria", sku: "80112", descripcion: "Descubre el lujo con el Aceite de Trufa Negra Coquinaria, ideal para realzar platos con su profundo aroma y notas terrosas. Perfecto para carnes, ensaladas, quesos, pastas y risottos, aporta un toque sofisticado y refinado a cada preparación."},
    {name: "Aceto Balsamico Trufado 250ml Coquinaria", brand: "Coquinaria", sku: "80113", descripcion: "El Aceto Balsámico Trufado Coquinaria fusiona trufa negra y aceite de oliva extra virgen, aportando un aroma y sabor intensos. Ideal para carnes blancas, pescados, verduras, pizzas y pastas, transforma cualquier plato en una experiencia gourmet."},
    {name: "Pita chips 50 grs Boca n Boca", brand: "Boca n Boca", sku: "80114", descripcion: "Nuestras pita chips son elaboradas artesanalmente con harina de trigo, horneadas con aceite de oliva extravirgen y sal de mar de Cahuil. Son libres de colesterol, huevo, leche y soya. Apta para veganos,, no contienen aditivos. Crujientes, livianas, del tamaño perfecto y se complementan con todos los sabores."},
    {name: "Pita chips 120 grs Boca n Boca", brand: "Boca n Boca", sku: "80115", descripcion: "Nuestras pita chips son elaboradas artesanalmente con harina de trigo, horneadas con aceite de oliva extravirgen y sal de mar de Cahuil. Son libres de colesterol, huevo, leche y soya. Apta para veganos,, no contienen aditivos. Crujientes, livianas, del tamaño perfecto y se complementan con todos los sabores."},
    {name: "Tabla Madera 30 x 30 Coquinaria", brand: "Coquinaria", sku: "80116"},
    {name: "Caja autoarmable c/ ventana Coquinaria S", brand: "Coquinaria", sku: "80117", descripcion: "n/a"},
    {name: "Caja autoarmable c/ ventana Coquinaria M", brand: "Coquinaria", sku: "80118", descripcion: "n/a"},
    {name: "Caja autoarmable c/ ventana Coquinaria L", brand: "Coquinaria", sku: "80119", descripcion: "n/a"},
    {name: "Caja autoarmable Coquinaria XL", brand: "Coquinaria", sku: "80120", descripcion: "n/a"},
    {name: "CAJA DURA 30 X 30 CMS COQUINARIA", brand: "Coquinaria", sku: "80125"},
    {name: "Set 6 Copas Vino Talladas 540ml Coquinaria", brand: "Coquinaria", sku: "80126"},
    {name: "Set 6 Vasos Talladas 420 ml Coquinaria", brand: "Coquinaria", sku: "80127"},
    {name: "Bolsa Coquinaria M", brand: "Coquinaria", sku: "80129", descripcion: "n/a"},
    {name: "Bolsa Coquinaria L", brand: "Coquinaria", sku: "80130", descripcion: "n/a"},
    {name: "Paño de Cocina Kitchen Center", brand: "Kitchen Center", sku: "80131"},
    {name: "Salmuera Ajo Tomillo Cristales de Chile", brand: "Cristales de Chile", sku: "80132"},
    {name: "Set 2 Mugs de vidrio 250ml Coquinaria", brand: "Coquinaria", sku: "80133", descripcion: "Disfruta de tus bebidas favoritas con estilo y elegancia con este set de 2 mugs de vidrio de 250 ml de Coquinaria. Su diseño moderno y transparente resalta la presentación de cafés, tés e infusiones, convirtiéndolos en la opción perfecta para cualquier ocasión. Fabricados con vidrio resistente, estos mugs ofrecen durabilidad y sofisticación en cada sorbo."},
    {name: "Tetera vidrio 650ml Coquinaria", brand: "Coquinaria", sku: "80134"},
    {name: "Set 4 Tazas expresso vidrio Coquinaria", brand: "Coquinaria", sku: "80135"},
    {name: "Panettone in metal tin 1kg", brand: "Cipriani", sku: "80138"},
    {name: "Base Bellini 180 ml Cipriani", brand: "Cipriani", sku: "80139"},
    {name: "Set de Cuchilleria Timeless para 4 personas 28pzs Coquinaria", brand: "Coquinaria", sku: "80140", descripcion: "Elegante set completo para 4 personas con cubiertos para comidas, postres y té. Fabricado en acero inoxidable de alta calidad con acabado brillante duradero. Diseño ergonómico y peso balanceado que combina funcionalidad y estilo atemporal. Resistente, fácil de limpiar y diseñado para elevar cada comida a una experiencia memorable."},
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
    {name: "Vinagre de higo 200ml Al Olivier", brand: "A L'Olivier", sku: "80151", descripcion: "Atrévete a darle sabor a tus recetas con nuestro aromático vinagre de higos. La dulzura del higo despertará suavemente tu creatividad culinaria"},
    {name: "Aceite de oliva extra virgen español A L'Olivier 250ml", brand: "A L'Olivier", sku: "80152", descripcion: "Date una vuelta por España con este aceite de oliva de Arbequina, una variedad de aceituna catalana con sabor afrutado. A cualquier aficionado le encantará este aceite de oliva con notas de alcachofa, manzana, almendra y nueces frescas. ¡Un aceite de oliva sin amargor ni picante!"},
    {name: "Caja Mini turrones artesanos souffle almendra 150g Vicens", brand: "Vicens", sku: "80153"},
    {name: "Caja Mini turrones artesanos avellanas y chocolate 150g Vicens", brand: "Vicens", sku: "80154"},
    {name: "Caja Mini turrones artesanos agramunt de almendra 150g Vicens", brand: "Vicens", sku: "80155"},
    {name: "Turrón Duro de Almendra Excellence 300g Vicens", brand: "Vicens", sku: "80156"},
    {name: "Turrón Duro de pasta de almendras con yema quemada Excellence", brand: "Vicens", sku: "80157"},
    {name: "Turrón blando de Almendras y miel Excellence 150g Vicens", brand: "Vicens", sku: "80158"},
    {name: "Turrón duro de Almendras Excellence Vicens 150g", brand: "Vicens", sku: "80159", descripcion: "El clásico por excelencia de la tradición navideña. Elaborado con almendras enteras de alta calidad, pasta de azúcar y miel, este turrón ofrece un sabor auténtico que combina la intensidad de la almendra con la dulzura natural de la miel. Su color crema refleja la pureza del ingrediente principal, mientras que su textura dura y crujiente, cortada con sierra y protegida con oblea en los lados, garantiza una experiencia inconfundible. Es la opción ideal para compartir en celebraciones o regalar como un verdadero símbolo de calidad artesanal."},
    {name: "Mostaza al Coñac 250g Pommery", brand: "Pommery", sku: "80160"},
    {name: "Mostaza a la Miel 250g Pommery", brand: "Pommery", sku: "80161"},
    {name: "Mostaza Meaux Grano 250g Pommery", brand: "Pommery", sku: "80162"},
    {name: "Mostaza con pimiento de espelette 100g Pommery", brand: "Pommery", sku: "80163"},
    {name: "Mostaza Dijon 100g Pommery", brand: "Pommery", sku: "80164"},
    {name: "Mostaza a las finas hierbas 100g Pommery", brand: "Pommery", sku: "80165"},
    {name: "Mostaza bbq 100g Pommery", brand: "Pommery", sku: "80166", descripcion: "La mostaza barbacoa Pommery® es una mostaza integral que combina la redondez de la miel y las notas ahumadas del pimiento de vera. Se caracteriza por un pronunciado sabor ahumado y notas afrutadas y dulces debido al proceso de secado. Esta combinación evoca los sabores de la barbacoa y acompañará perfectamente tus barbacoas y aperitivos."},
    {name: "Panettone Tradicional 500gr Fiasconaro", brand: "Fiasconaro", sku: "80167", descripcion: "Panettone Tradicional 500 g Fiasconaro es un clásico de la repostería italiana, elaborado en Sicilia con naranjas confitadas frescas y pasas maceradas en vino Marsala DOP y en un aromático vino dulce de uva Zibibbo con sello IGP de Sicilia. Suave, esponjoso y aromático, este panettone horneado y envuelto a mano es ideal para regalar o disfrutar en Navidad y Año Nuevo. Acompáñalo con espumante, vino dulce, té o café para vivir una experiencia gourmet auténticamente italiana."},
    {name: "Panettone Cioccolato 500gr Fiasconaro", brand: "Fiasconaro", sku: "80168", descripcion: "Panettone Cioccolato 500 g Fiasconaro es una deliciosa especialidad siciliana horneada con gotas de chocolate y cubierta con un glaseado suave que realza su sabor único. Esponjoso, aromático y envuelto a mano, este panettone es el postre perfecto para regalar o disfrutar en Navidad y Año Nuevo. Combínalo con espumante, vino dulce, té o café y vive una auténtica experiencia gourmet italiana en tu mesa festiva."},
    {name: "Panettone D&G 500gr Fiasconaro", brand: "Fiasconaro", sku: "80169", descripcion: "Panettone D&G 500 g Fiasconaro es una exclusiva creación siciliana elaborada con cítricos frescos y el toque único del azafrán de Sicilia. Horneado con cáscara confitada de naranja y limón, además de puré de mandarina, este panettone artesanal ofrece un aroma intenso y un sabor sofisticado que lo convierten en protagonista de las celebraciones. Envuelto a mano, es ideal para regalar o compartir en Navidad y Año Nuevo junto a espumante, vino dulce, té o café."},
    {name: "Canasto Picnic Coquinaria", brand: "Coquinaria", sku: "80170", descripcion: "Canasto de mimbre Coquinaria: práctico y bonito para tus picnics. Incluye manta de 130 x 148 cm con hebillas para sujetarla al canasto. Perfecto para salidas al campo, parque o playa. El mimbre artesanal color caramelo combina estética y funcionalidad para momentos especiales al aire libre."},
    {name: "Mini Tostadas Brioche 80 grs Fauchon", brand: "Fauchon", sku: "80171", descripcion: "Crujientes y doradas, las mini tostadas brioche FAUCHON han sido seleccionadas por su delicioso sabor. Están elaborados a partir de una mezcla de harinas, copos de cereales y semillas de lino que les aportan un sabor refinado."},
    {name: "Tartina de alcachofa y queso fresco 90 gr Fauchon", brand: "Fauchon", sku: "80172"},
    {name: "Tartina Pimenton Rojo y Queso Mascarpone 90gr Fauchon", brand: "Fauchon", sku: "80173"},
    {name: "Tartina Berenjena Ricotta y Menta 90gr Fauchon", brand: "Fauchon", sku: "80174"},
    {name: "Foie Gras de Ganso y Alsacia 180 gr Fauchon", brand: "Fauchon", sku: "80175", descripcion: "Descubra el foie gras entero de oca FAUCHON, cocinado en talleres en el corazón de Estrasburgo, de forma artesanal, desde hace más de 5 generaciones. La mezcla de especias de estas recetas, guardada en secreto, desarrolla un bouquet de aromas especialmente apreciado (canela, clavo, cardamomo, etc.) que realza el sabor original de la oca. Un trabajo a medida que da como resultado un Foie Gras que se deshace en la boca. Todo en finura y fragancia. Refinamiento y elegancia."},
    {name: "Foie Gras de ganso y Alsacia 200 gr Fauchon", brand: "Fauchon", sku: "80176"},
    {name: "Foie Gras de Ganso y Alsacia 65g Fauchon", brand: "Fauchon", sku: "80177", descripcion: "Descubra el foie gras entero de oca FAUCHON, cocinado en talleres en el corazón de Estrasburgo, de forma artesanal, desde hace más de 5 generaciones. La mezcla de especias de estas recetas, guardada en secreto, desarrolla un bouquet de aromas especialmente apreciado (canela, clavo, cardamomo, etc.) que realza el sabor original de la oca. Un trabajo a medida que da como resultado un Foie Gras que se deshace en la boca. Todo en finura y fragancia. Refinamiento y elegancia."},
    {name: "Foie Gras de Ganso Alsacia y Trufa130g Fauchon", brand: "Fauchon", sku: "80178", descripcion: "La trufa negra del Périgord llega a Alsacia y ofrece sabores excepcionales. Ofrecido por FAUCHON desde sus inicios, el foie gras de oca trufado sigue siendo el centro de atención en la actualidad. Los puristas no se equivocan: la trufa realza noblemente las notas dulces y especiadas del foie gras de oca. El crujido del primero contrasta muy bien con la textura fundente del segundo. Gran longitud en boca. El acuerdo es perfecto."},
    {name: "Foie Gras Pato 90g Fauchon", brand: "Fauchon", sku: "80179", descripcion: "El Foie Gras Entero de Pato del Suroeste de FAUCHON procede de cultivo en libertad, seleccionado, elaborado y condimentado a mano. Sin aditivos ni conservantes, están elaborados por un maestro artesano, en el Suroeste, a partir de hígado de pato fresco seleccionado por su alta calidad. Se realza con un toque de sal de Guérande, flor de sal y una selección de 3 pimientos. Esta receta local le invita a descubrir el foie gras de pato entero, auténtico y natural del suroeste. Sabor limpio y aromas almizclados. Autenticidad y rusticidad."},
    {name: "Foie Gras Pato 180g Fauchon", brand: "Fauchon", sku: "80180", descripcion: "El Foie Gras Entero de Pato del Suroeste de FAUCHON procede de cultivo en libertad, seleccionado, elaborado y condimentado a mano. Sin aditivos ni conservantes, están elaborados por un maestro artesano, en el Suroeste, a partir de hígado de pato fresco seleccionado por su alta calidad. Se realza con un toque de sal de Guérande, flor de sal y una selección de 3 pimientos. Esta receta local le invita a descubrir el foie gras de pato entero, auténtico y natural del suroeste. Sabor limpio y aromas almizclados. Autenticidad y rusticidad."},
    {name: "Terrina Fauchon 100g Fauchon", brand: "Fauchon", sku: "80181"},
    {name: "Terrina Vino Tinto 100g Fauchon", brand: "Fauchon", sku: "80182"},
    {name: "Terrina de Pato 100g Fauchon", brand: "Fauchon", sku: "80183"},
    {name: "Terrina Pimienta Espelette 100g Fauchon", brand: "Fauchon", sku: "80184"},
    {name: "Infusion Petalos de Rosa 60g Fauchon", brand: "Fauchon", sku: "80185", descripcion: "Es tiempo de historias junto al fuego, de confidencias susurradas, de nubes en una luna creciente. Es hora de un capullo de rosa FAUCHON."},
    {name: "Corazón bombones de Leche 75g Fauchon", brand: "Fauchon", sku: "80186"},
    {name: "Corazon bombones de Bitter 75g Fauchon", brand: "Fauchon", sku: "80187"},
    {name: "Mermelada Petalos de rosa 250g Fauchon", brand: "Fauchon", sku: "80188"},
    {name: "Pure de Castañas 250g Fauchon", brand: "Fauchon", sku: "80189", descripcion: "Las cremas de castañas FAUCHON se preparan de forma artesanal en Francia; se cuecen en calderos de cobre en pequeñas cantidades para respetar el fruto. Los frutos se eligen según estrictos criterios de calidad: en su madurez, por su sabor, su olor y su resistencia a la cocción."},
    {name: "Confitura de Higos 245g Fauchon", brand: "Fauchon", sku: "80190"},
    {name: "Bolsa Fauchon", brand: "Fauchon", sku: "80191", descripcion: "Porque cada producto FAUCHON es un regalo, puedes incluir en él dos cajas de té, mermeladas, un surtido de galletas o cremas para untar."},
    {name: "Caja Autoarmable S 2.0 Coquinaria", brand: "Coquinaria", sku: "80192", descripcion: "n/a"},
    {name: "Caja Autoarmable M 2.0 Coquinaria", brand: "Coquinaria", sku: "80193", descripcion: "n/a"},
    {name: "Caja Dura Coquinaria 15x32 cms", brand: "Coquinaria", sku: "80194"},
    {name: "Caja Dura Coquinaria  30 x 30 cms", brand: "Coquinaria", sku: "80195", descripcion: "Caja dura carton piedra con base y tapa de 30 x 30 cms. Imagina ese momento especial cuando entregas un regalo y ves la emoción en los ojos de quien lo recibe. Nuestras cajas de cartón no son solo un empaque, sino una experiencia: elegantes, resistentes y perfectas para sorprender con productos gourmet, accesorios únicos y detalles inolvidables. Diseñadas para realzar cualquier regalo personalizado a tu gusto, estas cajas transforman un simple presente en un gesto memorable, donde cada detalle cuenta y la presentación marca la diferencia."},
    {name: "Cafetera Italiana Greca Coquinaria 6 tazas", brand: "Coquinaria", sku: "80198", descripcion: "Elegancia y sabor en tu cocina con la Cafetera Italiana Greca Simple Cook de 6 tazas. Su diseño moderno en color negro mate con detalles en madera y su construcción en aluminio lacado le dan un toque distintivo. Además es adecuada para todo tipo de cocinas: gas, eléctricas, vitrocerámicas e inducción. Disfruta de un café intenso y aromático en cada taza gracias a su eficiente sistema de preparación."},
    {name: "Olla hierro fundido 2.9 Litros Coquinaria", brand: "Coquinaria", sku: "80199"},
    {name: "Olla hierro fundido 4.1 Litros Coquinaria", brand: "Coquinaria", sku: "80200"},
    {name: "Espumante Chandon Brut 750ml", brand: "Chandon", sku: "80202"},
    {name: "Pan de Pascua 800gr Coquinaria", brand: "Coquinaria", sku: "80203", descripcion: "Pan de Pascua Coquinaria 800 g es la elección perfecta para quienes buscan sabores auténticos y artesanales en Navidad. Suave, húmedo y aromático, está elaborado sin conservantes ni saborizantes artificiales, destacando ingredientes de primera calidad como brandy, ciruelas, nueces, damascos y frutas confitadas. Las especias de nuez moscada, canela, jengibre y anís aportan un toque único que realza su sabor. Ideal para compartir en celebraciones, acompañado de un buen café o un bajativo."},
    {name: "Bolsa Papel 30X12X41 Coquinaria", brand: "Coquinaria", sku: "80204", descripcion: "n/a"},
    {name: "Set 4 Paños de Cocina Grises Coquinaria", brand: "Coquinaria", sku: "80205", descripcion: "Set de 4 paños de cocina color gris, elaborado de 70% Bamboo y 30% Algodón. Medidas 50 x 70 cms, Espesor: 95 grs cada uno."},
    {name: "Set 4 Paños de Cocina Azules Coquinaria", brand: "Coquinaria", sku: "80206", descripcion: "Set de 4 paños de cocina color azul, elaborado de 70% Bamboo y 30% Algodón. Medidas 50 x 70 cms, Espesor: 95 grs cada uno."},
    {name: "Set 4 Paños de Cocina Rojos Coquinaria", brand: "Coquinaria", sku: "80207", descripcion: "Set de 4 paños de cocina color rojo, elaborado de 70% Bamboo y 30% Algodón. Medidas 50 x 70 cms, Espesor: 95 grs cada uno."},
    {name: "Set 4 Paños de Cocina Verdes Coquinaria", brand: "Coquinaria", sku: "80208", descripcion: "Set de 4 paños de cocina color verde, elaborado de 70% Bamboo y 30% Algodón. Medidas 50 x 70 cms, Espesor: 95 grs cada uno."},
    {name: "Café de Grano Tostado Colombia Intenso", brand: "Coquinaria", sku: "80215"},
    {name: "Café de Grano Tostado Colombia Excelso", brand: "Coquinaria", sku: "80216", descripcion: "PAIS Colombia"},
    {name: "Rigatoni 500 Gr Cipriani", brand: "Cipriani", sku: "80217"},
    {name: "Spaghetti 500gr Cipriani", brand: "Cipriani", sku: "80218", descripcion: "Los espaguetis de Cipriani, una variedad de pasta muy apreciada, encarnan la esencia de la herencia culinaria italiana. Estas hebras largas y delgadas, derivadas de la sémola de trigo duro más fina y elaboradas meticulosamente siguiendo los métodos tradicionales, personifican la perfección de la pasta. La palabra \"\"espaguetis\"\", derivada del italiano \"\"spaghetto\"\", denota \"\"cuerda fina\"\" o \"\"cordel\"\", capturando con precisión la esencia de esta preciada forma de pasta"},
    {name: "Arroz para Risotto Carnaroli 1 kg Cipriani", brand: "Cipriani", sku: "80219", descripcion: "Cultivado en Casalbeltrame, un pequeño municipio italiano de 980 habitantes en la provincia de Novara, en Piamonte, el arroz Carnaroli destaca por sus atributos únicos. Sus granos de longitud media tienen una notable capacidad para absorber sabores manteniendo una textura firme y cremosa, lo que lo convierte en la opción preferida para risottos y diversos platos exquisitos apreciados por los entusiastas de la cocina."},
    {name: "Bellini Base Preparada Cipriani 0,75 Lts", brand: "Cipriani", sku: "80220"},
    {name: "Prosecco DO Cipriani 0,75 Lts", brand: "Cipriani", sku: "80221"},
    {name: "Crema de queso Azul con trufa 120g La Chinata", brand: "La Chinata", sku: "80222", descripcion: "La Crema de Queso Azul con Trufa es una deliciosa combinación elaborada con aceite de oliva virgen extra. Tiene un sabor intenso dadas las características particulares del queso azul pero su fusión con la trufa le dan un aire más suave y sofisticado."},
    {name: "Crema de Queso Cabra con Cebolla Caramelizada 120 gr La Chinata", brand: "La Chinata", sku: "80223", descripcion: "La Crema de Queso de Cabra con Cebolla Caramelizada es un producto gourmet suave y sabroso elaborado a base de productos de primera calidad y un exquisito Aceite de Oliva Virgen Extra de La Chinata."},
    {name: "Patatas con cebolla para tortilla 470gr La Chinata", brand: "La Chinata", sku: "80224", descripcion: "La combinación del sabor intenso del queso de cabra con el toque dulce de la cebolla caramelizada aporta un sabor único."},
    {name: "Alioli con Aceite de Oliva Vigen Extra 130 grs La Chinata", brand: "La Chinata", sku: "80225"},
    {name: "Alcachofas confitadas 240 gr La Chinata", brand: "La Chinata", sku: "80226"},
    {name: "Sal Maldon 250g", brand: "Maldon", sku: "80227", descripcion: "La sal Maldon es una sal de mar gastronómica conocida mundialmente. Las escamas de sal crujientes y suaves dan un sabor puro e intenso con una armonía perfecta de minerales naturales."},
    {name: "Sal Maldon Ahumada 125g", brand: "Maldon", sku: "80228"},
    {name: "Balde Sal Maldon 570g", brand: "Maldon", sku: "80229", descripcion: "Suave y crujiente sal en escamas, tiene un sabor puro e intenso, con una combinación perfecta de minerales que potencian el sabor"},
    {name: "Mermelada Frambuesa, Jengibre y Rosa Coquinaria 150g", brand: "Coquinaria", sku: "80230"},
    {name: "Mermelada Limón con Lavanda 150g Coquinaria", brand: "Coquinaria", sku: "80231"},
    {name: "Mermelada Mango Chutney 150g Coquinaria", brand: "Coquinaria", sku: "80232"},
    {name: "Mermelada Naranja con Winter Spices 150g Coquinaria", brand: "Coquinaria", sku: "80233", descripcion: "Disfruta de una experiencia única con nuestra mermelada de naranja con Winter Spices, una mezcla perfecta entre la frescura de la naranja y el calidez de las especias invernales. Elaborada con ingredientes de calidad como naranja, limón, y un toque especial de nuez moscada, canela, jengibre, cardamomo, laurel, clavo de olor y anís estrella, esta mermelada es ideal para darle un giro a tus desayunos o postres. Su sabor profundo y especiado te transportará a los aromas y sabores de la temporada, con un equilibrio perfecto entre lo dulce y lo cálido. Perfecta para untar sobre pan tostado, acompañar quesos o incluso como un toque especial en tus recetas favoritas. ¡Haz que cada bocado sea una celebración del invierno"},
    {name: "Mermelada Pimientos Rojos y Rocoto 150g Coquinaria", brand: "Coquinaria", sku: "80234"},
    {name: "Mermelada Pomelo, Jengibre y Romero 150g Coquinaria", brand: "Coquinaria", sku: "80235"},
    {name: "PGI Balsamic Vinegar of Modena - Bronze Quality", brand: "A L'Olivier", sku: "80236", descripcion: "Elaborado con más del 25% de mosto de uva cocido de las siguientes variedades: Lambrusco, Sangiovese, Trebbiano, Albana, Ancellotta, Fortana y Montuni."},
    {name: "Hummus con aceite oliva 180gr La Chinata", brand: "La Chinata", sku: "80237"},
    {name: "Galletas crackers Hierbas aromáticas y aceite oliva 100gr Lady Joseph", brand: "Lady Joseph", sku: "80238"},
    {name: "Galletas crackers Queso parmesano y aceite de oliva 100gr Lady Joseph", brand: "Lady Joseph", sku: "80239", descripcion: "Deliciosos galletas artesanales elaborados con auténtico queso Parmigiano Reggiano. Con un 14% de aceite de oliva de primera calidad, estos grissinis combinan la perfecta textura crujiente con el sabor inconfundible del mejor queso italiano. Ideales para acompañar aperitivos, ensaladas o simplemente disfrutar como snack gourmet. Conservar en lugar fresco y seco; una vez abierto consumir preferentemente en 5 días. La elección perfecta para los amantes de la gastronomía que buscan un acompañamiento versátil y sofisticado para sus comidas. Disponible ahora en Kitchen Center."},
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
    {name: "Sal Maldon 125 grs", brand: "Coquinaria", sku: "80262", descripcion: "La sal Maldon es una sal de mar gastronómica conocida mundialmente. Las escamas de sal crujientes y suaves dan un sabor puro e intenso con una armonía perfecta de minerales naturales."},
    {name: "Tabla Oveja Coquinaria by Larry", brand: "Coquinaria", sku: "80259", descripcion: "Material: Porcelana Inglesa, Color blanco, Ilustración exclusiva diseñada por Tienda Larry . Usos: Puedes utilizarlo como platos para aperitivo, galletas,carnes, asado, decoración e incluso para colgarlos en la pared. Aptos para lavavajillas"},
    {name: "Tabla Chancho Coquinaria by Larry", brand: "Coquinaria", sku: "80260", descripcion: "Material: Porcelana Inglesa, Color blanco, Ilustración exclusiva diseñada por Tienda Larry . Usos: Puedes utilizarlo como platos para aperitivo, galletas,carnes, asado, decoración e incluso para colgarlos en la pared. Aptos para lavavajillas"},
    {name: "Plato Coquinaria by Larry", brand: "Coquinaria", sku: "80261", descripcion: "Material: Porcelana Inglesa, Color blanco, Ilustración exclusiva diseñada por Tienda Larry . Usos: Puedes utilizarlo como platos para aperitivo, galletas,carnes, asado, decoración e incluso para colgarlos en la pared. Aptos para lavavajillas"},
    {name: "Lata de té en hoja Rosa & Manzana 110grs Fauchon", brand: "Fauchon", sku: "80347", descripcion: "La Lata de Té en hoja Rosa & Manzana Fauchon 110 g es una mezcla refinada que combina la fragancia floral de la rosa con el dulzor afrutado de la manzana roja madura. Elaborado sobre una base de té negro de China, equilibrado y bajo en taninos, ofrece una infusión ámbar delicada, suave y aromática. Su perfil elegante, floral y frutal lo convierte en un té ideal para la tarde, perfecto para acompañar macarons, galletas de mantequilla o frutas frescas como fresas y manzana verde."},
    {name: "Lata de té en hoja Chai & Vainilla 130grs Fauchon", brand: "Fauchon", sku: "80348", descripcion: "La Lata de Té en Hoja Chai & Vainilla Fauchon 130g combina té negro premium con especias orientales y un delicado toque de vainilla, creando una infusión aromática, cálida y sofisticada. Elaborado con hojas seleccionadas de alta calidad, este té gourmet se disfruta solo o con leche animal o vegetal, endulzado con azúcar o miel. Su versatilidad permite prepararlo al estilo latte con leche espumada, ideal para quienes buscan un té reconfortante con notas intensas y un perfil equilibrado."},
    {name: "Lata de té en hoja Earl Grey & Bergamota 110grs Fauchon", brand: "Fauchon", sku: "80349", descripcion: "La Lata de Té en Hoja Earl Grey & Bergamota Fauchon 110 g ofrece una refinada fusión de té negro con vibrantes notas cítricas y florales. Más suave y sutil que el Earl Grey clásico, también conocido como Lady Grey, aporta ligereza y finura sin perder intensidad ni persistencia aromática. Su delicado perfil con aroma a bergamota lo convierte en la alternativa perfecta para quienes buscan un té elegante y equilibrado. Ideal para acompañar galletas de mantequilla, bizcochos cítricos o tartas de limón; es una experiencia gourmet imprescindible en tu mesa."},
    {name: "Lata de té en hoja Negro Citrus & Vainilla 100grs Fauchon", brand: "Fauchon", sku: "80350", descripcion: "La Lata de Té en hoja Negro Citrus & Vainilla Fauchon 100 g ofrece una mezcla sofisticada que une té negro Yunnan de China y Ceilán de Sri Lanka con delicados brotes de té blanco Silver Needle. Sus intensas notas cítricas de naranja dulce se equilibran con la suavidad de la vainilla Bourbon, dando lugar a una infusión ámbar cálida, cremosa y de final prolongado. Esta fusión aromática y gourmet es ideal para acompañar postres como tartas de fruta, galletas de almendra o panna cotta, convirtiendo cada taza en una experiencia refinada."},
    {name: "Lata de té en hoja Rooibos Caramelo & Miel 80 grs Fauchon", brand: "Fauchon", sku: "80351", descripcion: "La Lata de Té en hoja Rooibos Caramelo & Miel Fauchon 80 g combina rooibos sudafricano con manzanilla y verbena, creando una infusión naturalmente descafeinada, perfecta para cualquier momento del día. Su infusión dorada desprende aromas melosos con suaves notas de caramelo, ofreciendo un sabor dulce, delicado y envolvente. Ideal para acompañar galletas de avena, queques especiados o postres lácteos como flan y crème brûlée. Versátil y refinado, puede disfrutarse caliente o en versión iced tea, convirtiéndose en una opción gourmet única y reconfortante."},
    {name: "Lata de Té en hoja Harmony herbal mix 35grs Fauchon", brand: "Fauchon", sku: "80352", descripcion: "La Lata de Té en hoja Harmony Herbal Mix Fauchon 35 g es una infusión orgánica que celebra el equilibrio entre frescura, bienestar y tradición botánica francesa. Elaborada con plantas cultivadas en Francia, combina menta piperita vigorizante, ortiga de dulzura reconfortante y lavanda aromática, creando notas frescas y relajantes. Su textura herbal y natural invita a un momento de serenidad y escape. Perfecta para acompañar frutas frescas, miel o galletas integrales, también se disfruta en versión cold brew, ofreciendo una alternativa ligera y gourmet para hidratarse con estilo."},
    {name: "Caja 20 Teabags Chai species & Vainilla Fauchon", brand: "Fauchon", sku: "80353", descripcion: "La Caja de 20 Teabags Chai Spices & Vainilla Fauchon ofrece un té negro especiado de inspiración oriental, donde la calidez de la canela, el cardamomo y otras especias se funden con la suavidad de la vainilla. Esta mezcla equilibrada crea una infusión intensa, aromática y reconfortante, ideal para disfrutar sola o acompañada de leche —animal o vegetal— y endulzar con azúcar o miel. También puede prepararse con leche espumada al estilo latte, realzando su carácter cremoso y acogedor. Un chai sofisticado y versátil, perfecto para los amantes de sabores especiados y envolventes."},
    {name: "Caja 20 Teabags Earl Grey & Bergamota Fauchon", brand: "Fauchon", sku: "80354", descripcion: "La Caja de 20 Teabags Earl Grey & Bergamota Fauchon ofrece una variación elegante y delicada del clásico té inglés. Elaborado con té negro aromatizado con bergamota y pétalos de flor de arándano, combina notas cítricas y florales en una infusión suave y refinada. Más sutil que el Earl Grey tradicional, aporta finura sin perder intensidad aromática. Ideal para disfrutar solo, con un toque de leche al estilo inglés, o acompañado de galletas de mantequilla, bizcochos cítricos o una tarta de limón, realzando cada bocado con su frescura y elegancia."},
    {name: "Caja 20 teabags Te Verde & Jengibre Fauchon", brand: "Fauchon", sku: "80355", descripcion: "La Caja 20 Teabags Té Verde & Jengibre Fauchon combina la frescura cítrica del limón con la calidez picante del jengibre sobre una base de té verde chino. Su aroma evoca la pulpa de limón recién exprimido, seguido por notas vivificantes de jengibre que aportan energía y equilibrio. Naturalmente revitalizante, esta infusión es ideal para quienes buscan un momento de bienestar y claridad. Puede disfrutarse caliente, sola o con miel, para un efecto reconfortante, o en versión fría como bebida refrescante y ligera en días soleados."},
    {name: "Caja 20 Teabags Verbena Fauchon", brand: "Fauchon", sku: "80356", descripcion: "La Caja 20 Teabags Verbena Fauchon ofrece una infusión herbal con intensas notas de limón y un delicado toque ácido, reconocida por sus propiedades digestivas y relajantes. Conocida desde la antigüedad como la Hierba de Venus, la verbena se cultiva por su fragancia y beneficios naturales. Su sabor fresco y aromático evoca la calma de la naturaleza, brindando un momento de bienestar y serenidad para toda la familia. Ideal para disfrutar sola o con miel, frutas frescas o galletas ligeras, es una infusión versátil que combina tradición, salud y placer en cada taza."},
    {name: "Caja 20 teabags Harmony herbal mix Fauchon", brand: "Fauchon", sku: "80357", descripcion: "La Caja 20 Teabags Harmony Herbal Mix Fauchon ofrece una infusión orgánica única que equilibra frescura, bienestar y poesía botánica. Elaborada en Francia con plantas cultivadas de forma artesanal, combina menta vigorizante, ortiga de propiedades digestivas y lavanda aromática en una mezcla fresca y relajante. Su sabor natural invita a una pausa de serenidad y equilibrio, perfecta para disfrutar caliente con miel o frutas frescas, o en versión fría como alternativa saludable y refrescante."},
    {name: "Dulce Leche 250 grs Fauchon", brand: "Fauchon", sku: "80358", descripcion: "El Dulce de Leche Fauchon 250 g es una joya gourmet elaborada en Francia con leche de primera calidad y azúcar de caña, cocidos lentamente en calderos de cobre para intensificar su sabor caramelizado. Su textura suave y cremosa lo convierte en un aliado versátil para la repostería: ideal para rellenar tortas, profiteroles o acompañar panqueques, waffles y helados. Con su color ámbar y dulzor aterciopelado, este dulce de leche aporta un toque de elegancia y tradición francesa a cada preparación."},
    {name: "Mermelada 4 frutos rojos 250 Grs Fauchon", brand: "Fauchon", sku: "80359", descripcion: "La Mermelada de 4 Frutos Rojos Fauchon 250 g combina la acidez vibrante de la grosella y la frambuesa con la dulzura de la fresa y la intensidad de la guinda, logrando un equilibrio perfecto de sabores. Elaborada artesanalmente en Francia, con frutas seleccionadas en su punto justo de maduración y cocidas lentamente en calderos de cobre con azúcar de caña, conserva su frescura natural y realza notas caramelizadas únicas. Versátil y refinada, es ideal para untar en panes, croissants o galletas, acompañar quesos cremosos como brie o camembert, o dar un toque gourmet a tartaletas, yogures y helados."},
    {name: "Mermelada Bitter Naranja 250grs Fauchon", brand: "Fauchon", sku: "80360", descripcion: "La Mermelada Bitter Naranja Fauchon 250 g es una creación artesanal que transforma el carácter intenso y cítrico de la naranja en una delicia gourmet de equilibrio amargo–dulce. Elaborada en Francia con frutas cosechadas en su punto óptimo y cocidas lentamente en calderos de cobre con azúcar de caña, conserva aromas frescos y realza notas caramelizadas únicas, sello de la tradición Fauchon. Su textura sedosa y sabor vibrante la hacen perfecta para untar en panes y croissants, o para maridar con quesos maduros como manchego o cheddar, creando contrastes irresistibles."},
    {name: "Mermelada Berries negras Grosellas 245 Grs Fauchon", brand: "Fauchon", sku: "80361", descripcion: "La Mermelada de Berries Negras Grosellas Fauchon 245 g es una creación artesanal francesa que captura la intensidad de esta fruta originaria de Île-de-France, donde el clima templado y húmedo potencia su jugosidad y aroma natural. Cosechadas en su punto óptimo de maduración, las grosellas se cuecen lentamente en calderos de cobre con azúcar de caña, un método tradicional que realza sus notas frescas, ligeramente amargas y sutilmente caramelizadas. Su textura aterciopelada y su perfil aromático la hacen ideal para panes integrales, croissants o yogur, así como para realzar tartas de fruta, postres de chocolate y quesos de pasta blanda o azules."},
    {name: "Mermelada Bisou bisou 250 Grs Fauchon", brand: "Fauchon", sku: "80362", descripcion: "La Mermelada Bisou Bisou Fauchon 250 g es una creación única que combina la dulzura de la fresa y la frambuesa con la frescura de la menta piperita, la suavidad de la hoja de morera y la ligereza aromática del té Bisou Bisou. Su corazón de vainilla envuelve el paladar con ternura, mientras la pimienta de Espelette añade un sutil toque picante que sorprende en cada cucharada. Elaborada artesanalmente en calderos de cobre con cocción lenta y azúcar de caña, preserva la intensidad y pureza de los frutos. Ideal para croissants, brioche o galletas finas, también realza cheesecakes, panna cotta, helados o quesos suaves."},
    {name: "Set 5 mini mermeladas 5x28 grs Fauchon", brand: "Fauchon", sku: "80363", descripcion: "El Set 5 Mini Mermeladas Fauchon 5x28 g reúne cinco sabores icónicos en un formato elegante y versátil: fresa con pétalos de rosa, frambuesa con grosella roja, albaricoque de Languedoc-Roussillon, naranja amarga de Sevilla y fresa Mara des Bois. Elaboradas artesanalmente en pequeños lotes, con frutas seleccionadas en su punto óptimo de maduración y cocidas lentamente en calderos de cobre con azúcar de caña, estas mermeladas preservan aromas intensos y notas caramelizadas únicas. Perfectas para croissants, panes artesanales, quesos finos o postres, también son un detalle de regalo sofisticado que combina tradición, elegancia y sabor."},
    {name: "Pasta cebolla caramelizada 105grs Fauchon", brand: "Fauchon", sku: "80364", descripcion: "La Pasta de Cebolla Caramelizada Fauchon 105g es una delicatessen artesanal elaborada con cebollas seleccionadas y cocinadas lentamente en pequeños lotes, con azúcar de caña en calderos de cobre. Este método tradicional potencia los aromas naturales y crea una textura suave con notas dulces y caramelizadas inconfundibles. Versátil y elegante, realza carnes asadas, aves, foie gras y patés, marida a la perfección con quesos maduros o azules, y es ideal como base para salsas, bruschettas, hamburguesas o sándwiches gourmet. Una joya culinaria que transforma lo cotidiano en extraordinario."},
    {name: "Rilette de Salmon 80 grs Fauchon", brand: "Fauchon", sku: "80365", descripcion: "Rillettes de Salmón Fauchon 80g son una exquisitez artesanal que combina salmón fresco del Atlántico con salmón ahumado en madera de haya, siguiendo un método ancestral de la isla de Groix. Elaboradas con filetes seleccionados y cadenas de suministro cortas, ofrecen una textura suave y cremosa con delicados aromas marinos. Su sabor equilibrado, entre la frescura del salmón y la suavidad de la crema, convierte cada bocado en una experiencia gourmet. Perfectas para servir sobre tostas, blinis o pan rústico, acompañar ensaladas frescas o realzar tablas de aperitivos junto a vinos blancos o espumantes."},
    {name: "Rillette de cangrejo 80 grs Fauchon", brand: "Fauchon", sku: "80366", descripcion: "Rillettes de Cangrejo Fauchon 80g son una especialidad artesanal que combina mariscos del Atlántico Noreste con crema y chalotas, realzados por un toque de pimienta blanca. Elaborado con cangrejo fresco seleccionado y cocinado lentamente, ofrecen una textura delicada pero firme, con aromas marinos auténticos y un equilibrio perfecto de frescura y especias. Su sabor refinado evoca la tradición marítima de Bretaña y convierte cada bocado en una experiencia gourmet. Perfectas sobre blinis, crackers o pan rústico, también acompañan ensaladas y tablas de aperitivo, maridando a la perfección con vinos blancos minerales o espumantes brut."},
    {name: "Champagne brut 750ml Fauchon", brand: "Fauchon", sku: "80367", descripcion: "El Champagne Brut Fauchon 750 ml es la máxima expresión del arte francés en la mesa. De color dorado brillante, revela un delicado aroma floral con marcada mineralidad que aporta frescura y elegancia. Elaborado con la precisión y savoir-faire de Fauchon, ofrece un equilibrio perfecto entre vivacidad y finura, convirtiéndose en un imprescindible para celebraciones y ocasiones especiales. Ideal como aperitivo, marida de forma exquisita con ostras, mariscos, sushi o quesos cremosos como brie y camembert. Una experiencia burbujeante que encarna el lujo y la tradición gourmet francesa."},
    {name: "Champagne brut 375 ml Fauchon", brand: "Fauchon", sku: "80368", descripcion: "El Champagne Brut Fauchon 375 ml concentra todo el refinamiento francés en un formato ideal para compartir en pareja o en pequeños momentos de celebración. De color dorado brillante, despliega un delicado bouquet floral y mineral que refleja la elegancia de la Maison Fauchon. Su frescura y equilibrio lo convierten en un espumante versátil y sofisticado. Perfecto como aperitivo, acompaña a la perfección ostras, mariscos, sushi o quesos cremosos como brie y camembert. Una media botella que transforma cualquier ocasión en un instante inolvidable."},
    {name: "Champagne Brut 1500 ml Fauchon", brand: "Fauchon", sku: "80369", descripcion: "El Champagne Brut Fauchon 1500 ml es la elección perfecta para grandes celebraciones. Con un brillante color dorado y burbujas finas y persistentes, despliega un bouquet floral acompañado de una elegante mineralidad que refleja el estilo único de Fauchon. Su frescura y equilibrio lo convierten en un imprescindible como aperitivo, y marida a la perfección con ostras, mariscos, sushi o quesos cremosos como brie y camembert. En su formato magnum, este champán no solo garantiza una experiencia de degustación sofisticada, sino también el toque festivo y exclusivo que convierte cada ocasión en un momento inolvidable."},
    {name: "Champagne Rose 750ml Fauchon", brand: "Fauchon", sku: "80370", descripcion: "El Champagne Rose Fauchon 750 ml es una joya de la enología francesa, reconocida por sus burbujas finas y persistentes que envuelven un delicado bouquet dulce y especiado. Con notas de frutos rojos frescos y un equilibrio elegante, este champán rosado refleja a la perfección el estilo sofisticado de Fauchon. Ideal para celebraciones y momentos especiales, brilla como aperitivo y realza platos como salmón ahumado, carpaccios de pescado, mariscos y quesos cremosos tipo brie o chaource. Una experiencia festiva, refinada y memorable."},
    {name: "Bolsa L 37x37x37 Fauchon", brand: "Fauchon", sku: "80371", descripcion: "La Bolsa L Fauchon 37x37x37 cm es una pieza icónica que refleja la elegancia parisina de la marca. Fabricado en papel resistente y de alta calidad, presenta un diseño cuadrado con el inconfundible estampado en blanco y negro del logotipo Fauchon, símbolo de lujo y sofisticación. Su tamaño amplio lo convierte en el complemento perfecto para transportar productos gourmet o presentar un regalo con distinción. Una bolsa que, más que un simple embalaje, es parte de la experiencia exclusiva de Fauchon."},
    {name: "Bolsa Botella Fauchon", brand: "Fauchon", sku: "80372", descripcion: "La Bolsa de Botella Fauchon (12,5 x 12,5 x 40 cm) es un emblema de sofisticación y estilo. Elaborada en papel de alta calidad con el clásico diseño en blanco y negro de la Maison Fauchon, está especialmente pensada para contener una botella de vino o champaña de 75 cl. Su formato incluye una ranura que permite cerrarla con cinta, aportando un toque de distinción en cada entrega o regalo. Más que un simple empaque, es el complemento ideal para realzar la experiencia gourmet y transmitir la elegancia parisina de Fauchon."},
    {name: "Pasta de Higos 105 grs Fauchon", brand: "Fauchon", sku: "80373", descripcion: "La Pasta de Higos Fauchon 105g está elaborada con higos morados de Provenza, cocinados lentamente en calderos de cobre siguiendo la receta tradicional. Este proceso artesanal resalta su dulzura natural y aporta una textura suave y elegante. Es el acompañamiento ideal para quesos maduros como manchego o parmesano, así como para quesos azules tipo roquefort y gorgonzola. También realza tablas de charcutería, patés y foie gras, y en repostería añade un toque gourmet a tartaletas, rellenos de masas finas o yogures. Una creación versátil que refleja la excelencia gastronómica de Fauchon."},
    {name: "32 Tabletas de chocolate Bitter & Leche 160 grs Fauchon", brand: "Fauchon", sku: "80374", descripcion: "Las 32 Tabletas de Chocolate Bitter & Leche Fauchon 160 g ofrecen un irresistible contraste entre la intensidad del chocolate negro 70% cacao ecuatoriano y la suavidad cremosa del chocolate con leche 36% cacao, también de origen ecuatoriano. Presentadas en una elegante caja inspirada en París, son perfectas para compartir, regalar o disfrutar en degustaciones. Cada cuadrado revela el savoir-faire de Fauchon: notas profundas y aromáticas en el bitter y un dulzor aterciopelado en el con leche. Acompañan idealmente un café o té gourmet, y maridan con vinos dulces, espumantes o destilados como coñac, convirtiendo cualquier momento en una experiencia sofisticada."},
    {name: "Vinagre Tomate & Albahaca 200 ml Al Olivier", brand: "A L'Olivier", sku: "80385", descripcion: "El Vinagre de Tomate & Albahaca Al Olivier 200ml une la dulzura jugosa del tomate con la intensidad aromática de la albahaca fresca, creando un aderezo gourmet de inspiración mediterránea. Elaborado sin colorantes, saborizantes ni conservantes, obtiene su color del puré de fruta natural. Su perfil afrutado y equilibrado lo hace ideal para realzar ensaladas, desglasar carnes blancas o acompañar mozzarella y tomates frescos. Con solo unas gotas transforma tus platos en una experiencia fresca, auténtica y sofisticada."},
    {name: "Vinagre Yuzu & Mandarina 200 ml Al Olivier", brand: "A L'Olivier", sku: "80386", descripcion: "El Vinagre Yuzu & Mandarina Al Olivier 200ml combina la dulzura afrutada de la mandarina con la acidez intensa y floral del yuzu, creando un condimento vibrante y sofisticado. Su perfil cítrico con sutil amargor lo convierte en el aliado perfecto para realzar pescados, mariscos, carpaccios o ensaladas frescas. También aporta un toque gourmet en preparaciones dulces, como ensaladas de frutas o bebidas refrescantes. Sin conservantes ni colorantes, este vinagre transforma cualquier plato en una experiencia única y refinada."},
    {name: "Aceite de Oliva con Albahaca 250 ml Al Olivier", brand: "A L'Olivier", sku: "80381", descripcion: "El Aceite de Oliva con Albahaca Al Olivier 250ml combina la suavidad de un aceite de oliva de alta calidad con la frescura aromática de la albahaca recién recogida. Su perfil único aporta notas herbales intensas que elevan ensaladas de tomate y mozzarella, platos de pasta o pescados a la plancha. Unas gotas bastan para transformar preparaciones simples en experiencias gourmet, y también sorprende en postres como fresas frescas o helado de vainilla. Versátil y natural, sin conservantes añadidos, es un aliado indispensable en la cocina mediterránea moderna."},
    {name: "Aceite de Oliva con Ajo 250 ml Al Olivier", brand: "A L'Olivier", sku: "80382", descripcion: "El Aceite de Oliva con Ajo Al Olivier 250ml fusiona la suavidad del aceite de oliva de alta calidad con la intensidad aromática del ajo fresco. Este condimento aporta carácter y profundidad a cada preparación, siendo ideal para realzar alioli casero, dar un toque vibrante al hummus o potenciar purés de patata, carnes y verduras a la parrilla. Su perfil intenso y versátil transforma platos cotidianos en experiencias gourmet, ofreciendo un sabor natural y auténtico, fiel a la tradición mediterránea."},
    {name: "Aceite de Oliva con Hierbas Provenzales 250 ml Al Olivier", brand: "A L'Olivier", sku: "80383", descripcion: "El Aceite de Oliva con Hierbas Provenzales Al Olivier 250ml combina la suavidad del aceite de oliva virgen extra con una infusión aromática de tomillo, ajedrea y romero. Este condimento captura la esencia de la cocina mediterránea, aportando notas herbales frescas y elegantes que realzan carnes a la parrilla o guisos a fuego lento, como ternera, cordero, cerdo o aves. También es perfecto para dar carácter a ensaladas verdes o mixtas, transformando recetas simples en platos llenos de autenticidad y sabor gourmet."},
    {name: "Aceite de Oliva para Pizza 250 ml Al Olivier", brand: "A L'Olivier", sku: "80384", descripcion: "Aceite de Oliva para Pizza 250 ml Al Olivier combina aceite de oliva virgen extra con un delicado toque de pimientos picantes que aporta intensidad y carácter sin opacar el resto de ingredientes. Diseñado para realzar la experiencia de la pizza, transforma cada bocado con notas cálidas y aromáticas que evocan la cocina mediterránea. Versátil y lleno de personalidad, también es ideal para dar un giro gourmet a focaccias, bruschettas o pastas frescas, convirtiéndose en un aliado imprescindible para quienes buscan sabores auténticos y memorables en casa."},
    {name: "Turrón Duro de Almendra 300 grs Vicens", brand: "Vicens", sku: "80387", descripcion: "El Turrón Duro Artesano Vicens 300g es una barra tradicional elaborada con almendras enteras seleccionadas, pasta de azúcar y miel de alta calidad. Su textura crujiente y sabor auténtico lo convierten en un clásico imprescindible de la repostería española. Ideal para compartir en celebraciones, acompañar café o vino dulce, y añadir un toque gourmet y crujiente a postres y helados. Un producto artesanal que combina tradición, calidad y el placer de disfrutar en cada bocado."},
    {name: "Turrón Blando de Almendra 300 grs Vicens", brand: "Vicens", sku: "80388", descripcion: "El clásico turrón blando de almendra Vicens 300g es una receta artesanal elaborada con almendras seleccionadas de proximidad, pasta de azúcar y miel. Suave, cremoso y con un sabor auténtico, destaca por la calidad de la almendra como ingrediente principal, que le otorga una textura delicada y un dulzor equilibrado. Ideal para disfrutar en rebanadas acompañado de café, té o vino dulce, también se puede usar como relleno de tartas, complemento en helados o troceado en postres caseros."},
    {name: "Turron Macadamia con Vainilla bourbon de Madagascar Excellence 150g Vicens", brand: "Vicens", sku: "80389", descripcion: "El Turrón Macadamia con Vainilla Bourbon de Madagascar Excellence 150 g Vicens combina la suavidad del gianduja de nueces de macadamia con el perfume único de la vainilla bourbon y un delicado toque de toffee. Su cápsula de chocolate con leche aporta equilibrio, mientras que la macadamia caramelizada lo corona con un crujido irresistible. Cada bocado revela una fusión cremosa, aromática y elegante, ideal para acompañar café o té, disfrutar en pequeños trozos o integrar en helados, tartas y postres gourmet."},
    {name: "Turron Pistacho 150 grs Excellence Vicens", brand: "Vicens", sku: "80390", descripcion: "El Turrón Pistacho 150 g Excellence Vicens reinventa el clásico praliné con una receta elaborada íntegramente a base de pistacho, ofreciendo un sabor intenso y distintivo. Su cobertura conserva el característico tono verde del fruto seco, aportando una presentación única y sofisticada. Cremoso y delicado, es ideal para disfrutar en pequeños trozos acompañado de café o té. También puede incorporarse como relleno en tartas, helados o postres caseros, elevando cada preparación con un toque gourmet exclusivo."},
    {name: "Turrón Crujiente de Neulas Albert Adrià 140g Vicens", brand: "Vicens", sku: "80391", descripcion: "Turrón Crujiente de Neulas Albert Adrià 140 g Vicens es una creación gourmet que combina un praliné de chocolate con leche y avellanas con finas neulas crujientes. Su textura ligera y su sabor equilibrado entre dulzor y tostado lo convierten en un bocado irresistible para los amantes del chocolate. Cada trozo ofrece un contraste único entre cremosidad y crocancia, elevando la experiencia del clásico turrón. Ideal para disfrutar con café, té o acompañar postres como helados, tartas y frutas frescas."},
    {name: "Turrón de Gintonic Adrià Natura 140g Vicens", brand: "Vicens", sku: "80392", descripcion: "Turrón de Gintonic Adrià Natura 140g Vicens combina chocolate y trufa de lima con el sabor inconfundible de la ginebra Gin Mare, elaborada con botánicos mediterráneos como tomillo y romero. Su interior incluye cristales “fizzy” que evocan el toque burbujeante de la tónica en un gin tonic, junto con zumo de lima y piel de limón confitada que aportan frescura cítrica. Innovador y sorprendente, es perfecto para quienes buscan un turrón distinto, ideal para acompañar café, espumante o como detalle original en postres y celebraciones."},
    {name: "Turrón de Agramunt de Almendra Bolsa 300grs Vicens", brand: "Vicens", sku: "80393", descripcion: "Turrón de Agramunt de Almendra Bolsa 300 g Vicens es el turrón más tradicional y auténtico, elaborado artesanalmente en Agramunt siguiendo una receta transmitida generación tras generación. Cada tortita combina almendras enteras, miel y obleas crujientes, creando una textura firme y un sabor inconfundible. Este formato incluye 10 tortitas individuales, perfectas para compartir en cualquier ocasión. Ideal para acompañar café o té, como snack en reuniones, sobre helados o como complemento en postres caseros, ofreciendo siempre un toque clásico y gourmet."},
    {name: "Set 4 Paños de Cocina Colores Coquinaria", brand: "Coquinaria", sku: "80121", descripcion: ""},
    {name: "Set de Cuchilleria Oxford 6 Personas 42pzs Silver Mirror finish Coquinaria", brand: "Coquinaria", sku: "80244", descripcion: "El Set de Cuchillería Oxford 6 Personas 42 pzs Silver Mirror Finish Coquinaria es una pieza única que combina diseño exclusivo, funcionalidad y elegancia para tu mesa. Está compuesto por 6 cuchillos, tenedores y cucharas de mesa, además de 6 cucharas de té, y se distingue por incluir un completo set de postre con 6 cuchillos, tenedores y cucharas, ideal para disfrutar frutas, tortas y todo tipo de preparaciones dulces. Fabricado en acero inoxidable de alta calidad (304 para cucharas y tenedores, 420 para cuchillos), asegura resistencia y durabilidad. Su acabado brillante tipo espejo realza cualquier montaje, aportando un estilo fino y sofisticado en cada ocasión especial."},
    {name: "Olla hierro fundido 4.1 Azul Litros Coquinaria", brand: "Coquinaria", sku: "80246", descripcion: "La Olla de Hierro Fundido 4.1 L Azul Coquinaria es sinónimo de tradición, resistencia y resultados gourmet. Con cuerpo esmaltado de 3 mm de espesor, interior negro antiadherente y exterior azul elegante, asegura una cocción uniforme y un sabor más intenso en cada preparación. Versátil y duradera, permite hornear, guisar, freír o asar, manteniendo mejor el calor y preservando los nutrientes gracias a su inercia térmica. Libre de compuestos nocivos, más saludable y sostenible, esta olla es ideal para guisos, panes caseros, carnes al horno o estofados, convirtiéndose en una pieza imprescindible en tu cocina."},
    {name: "Set de Cuchilleria Oxford 6 Personas 42pzs Vintage Coquinaria", brand: "Coquinaria", sku: "80248", descripcion: "El Set de Cuchillería Oxford 6 Personas 42 pzs Vintage Silver Coquinaria es una pieza única que combina diseño exclusivo, funcionalidad y elegancia para tu mesa. Está compuesto por 6 cuchillos, tenedores y cucharas de mesa, además de 6 cucharas de té, y se distingue por incluir un completo set de postre con 6 cuchillos, tenedores y cucharas, ideal para disfrutar frutas, tortas y todo tipo de preparaciones dulces. Fabricado en acero inoxidable de alta calidad (304 para cucharas y tenedores, 420 para cuchillos), asegura resistencia y durabilidad. Su acabado vintage realza cualquier montaje, aportando un estilo fino y sofisticado en cada ocasión especial."},
    {name: "Set de Cuchilleria Oxford 6 Personas 42pzs Vintage Gold Coquinaria", brand: "Coquinaria", sku: "80249", descripcion: ""},
    {name: "Set de Cuchilleria Oxford 6 Personas 42pzs Silver Matt Coquinaria", brand: "Coquinaria", sku: "80250", descripcion: "El Set de Cuchillería Oxford 6 Personas 42 pzs Silver Matt Coquinaria es una pieza única que combina diseño exclusivo, funcionalidad y elegancia para tu mesa. Está compuesto por 6 cuchillos, tenedores y cucharas de mesa, además de 6 cucharas de té, y se distingue por incluir un completo set de postre con 6 cuchillos, tenedores y cucharas, ideal para disfrutar frutas, tortas y todo tipo de preparaciones dulces. Fabricado en acero inoxidable de alta calidad (304 para cucharas y tenedores, 420 para cuchillos), asegura resistencia y durabilidad. Su acabado matte aporta un estilo sobrio y contemporáneo, perfecto para quienes buscan una mesa refinada con un toque moderno."},
    {name: "Set 4 cucharas moka cinta marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80251", descripcion: ""},
    {name: "Set 4 tenedores cinta cocktail marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80252", descripcion: ""},
    {name: "Set 24 piezas Marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80253", descripcion: ""},
    {name: "Set asado marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80254", descripcion: ""},
    {name: "Caja Cuchara servir marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80255", descripcion: ""},
    {name: "Set 3 cuchillos queso marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80256", descripcion: ""},
    {name: "Set 12 piezas marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80257", descripcion: ""},
    {name: "Set 4 cuchillos mantequilla marmol Laguiole Jean Dubost", brand: "Laguiole", sku: "80258", descripcion: ""},
    {name: "Set 6 Cucharas Vintage Gold Coquinaria", brand: "Coquinaria", sku: "80263", descripcion: "Set 6 Cucharas Vintage Gold Coquinaria es el complemento ideal para tu vajilla, combinando diseño innovador con elegancia atemporal. Fabricadas en acero inoxidable de alta calidad, estas cucharas cuentan con una terminación dorada vintage que realza cualquier mesa con un toque sofisticado. Su material resistente y duradero garantiza un uso prolongado, mientras que su diseño refinado las hace perfectas para postres, frutas, tortas o café. Un set pensado para transformar lo cotidiano en momentos gourmet."},
    {name: "Set 6 Cucharas Silver matt Coquinaria", brand: "Coquinaria", sku: "80264", descripcion: "El Set 6 Cucharas Silver Matt Coquinaria aporta elegancia y modernidad a tu mesa. Fabricadas en acero inoxidable de alta calidad, estas cucharas garantizan resistencia, durabilidad y un uso prolongado sin perder su encanto. Su acabado matte en tono plateado ofrece un estilo sofisticado y versátil que combina con cualquier vajilla, convirtiéndolo en el complemento perfecto. Ideal para postres, helados o infusiones, este set exclusivo de Coquinaria destaca por su diseño innovador y la calidad que lo hace único."},
    {name: "Set 6 cucharas silver mirror Coquinaria", brand: "Coquinaria", sku: "80265", descripcion: "El Set 6 Cucharas Silver Mirror Coquinaria es el complemento ideal para tu vajilla, combinando diseño innovador con elegancia atemporal. Fabricadas en acero inoxidable de alta calidad, estas cucharas cuentan con una terminación brillante tipo espejo que realza cualquier mesa con un toque sofisticado. Su material resistente y duradero garantiza un uso prolongado, mientras que su diseño refinado las hace perfectas para postres, frutas, tortas o café. Un set pensado para transformar lo cotidiano en momentos gourmet."},
    {name: "Juego de Vajilla Coquinaria crema 20pzs", brand: "Coquinaria", sku: "80270", descripcion: "El Juego de Vajillas Crema Coquinaria de 20 piezas combina elegancia y funcionalidad en un diseño minimalista. Fabricada en porcelana de alta calidad, esta vajilla en tono crema es resistente a los cambios de temperatura, permitiendo su uso en microondas, horno, congelador y lavavajillas. Su acabado mate aporta un toque sofisticado y cálido, perfecto para realzar cada plato con sutileza. Ideal para quienes buscan una presentación refinada y moderna, esta vajilla eleva tu mesa con estilo, ofreciendo versatilidad y durabilidad para el día a día. Llena tu mesa de estilo, elegancia y funcionalidad con este exclusivo set de Coquinaria, perfecto para 4 personas."},
    {name: "Set 4 Platos postre 21,5cms Coquinaria", brand: "Coquinaria", sku: "80271"},
    {name: "Set 4 Platos comida 26cms Coquinaria", brand: "Coquinaria", sku: "80272", descripcion: "El Set de 4 Platos de Comida Gris Mate 26 cm Coquinaria combina resistencia, estilo y funcionalidad en un diseño contemporáneo. Fabricados en porcelana de alta resistencia y cocidos a 1250 °C, ofrecen una durabilidad excepcional y soportan sin problemas los cambios de temperatura. Más ligeros que la cerámica tradicional, son fáciles de manipular y perfectos para el uso diario. Aptos para microondas, horno, congelador y lavavajillas, destacan por su practicidad y acabado gris mate que aporta elegancia a cualquier mesa. El complemento perfecto para tu vajilla, ideal para elevar tus comidas con el estilo único de Coquinaria."},
    {name: "Set 4 Bowls 12cms Coquinaria", brand: "Coquinaria", sku: "80273", descripcion: "El Set de 4 Bowls Gris Mate 12 cm Coquinaria es el complemento perfecto para tu vajilla, combinando elegancia, resistencia y diseño moderno. Fabricados en porcelana de alta resistencia y cocidos a 1250 °C, ofrecen una durabilidad excepcional y soportan sin problemas los cambios de temperatura. Más ligeros que la cerámica tradicional, son fáciles de manipular y perfectos para el uso diario. Aptos para microondas, horno, congelador y lavavajillas, estos bowls destacan por su practicidad y acabado gris mate, ideal para servir snacks, salsas o postres con estilo. Un toque sofisticado que eleva cada momento en tu mesa con el sello Coquinaria."},
    {name: "Ensaladera 24cms Coquinaria", brand: "Coquinaria", sku: "80274", descripcion: "La Ensaladera Gris Mate 24 cm Coquinaria es el complemento perfecto para tu vajilla, uniendo resistencia, estilo y funcionalidad en una sola pieza. Fabricada en porcelana de alta resistencia y cocida a 1250 °C, ofrece gran durabilidad y soporta sin problemas los cambios de temperatura. Más ligera que la cerámica tradicional, es fácil de manipular y perfecta para el uso diario. Apta para microondas, horno, congelador y lavavajillas, combina practicidad y elegancia con su acabado gris mate de estilo contemporáneo. Ideal para servir ensaladas, pastas o acompañamientos, eleva tus comidas con el sello distintivo Coquinaria."},
    {name: "Ensaladera 31cms Coquinaria", brand: "Coquinaria", sku: "80275", descripcion: "La Ensaladera Gris Mate 31 cm Coquinaria combina elegancia, resistencia y diseño moderno para transformar tu mesa en cada ocasión. Fabricada en porcelana de alta resistencia y cocida a 1250 °C, ofrece una durabilidad superior y soporta sin dificultad los cambios de temperatura. Más ligera que la cerámica tradicional, resulta fácil de manipular y perfecta para el uso diario. Apta para microondas, horno, congelador y lavavajillas, su acabado gris mate aporta un toque sofisticado y contemporáneo. Ideal para servir ensaladas, pastas o platos familiares, es el complemento perfecto para tu vajilla Coquinaria."},
    {name: "Set 2 platos aperitivo Coquinaria", brand: "Coquinaria", sku: "80276", descripcion: "El Set de 2 Platos de Aperitivo Gris Mate Coquinaria es el complemento perfecto para tu vajilla, ideal para quienes buscan una mesa elegante y equilibrada. Fabricados en porcelana de alta resistencia y cocidos a 1250 °C, ofrecen gran durabilidad y soportan sin problemas los cambios de temperatura. Más ligeros que la cerámica tradicional, son fáciles de manipular y perfectos para el uso diario. El set incluye dos tamaños (40 cm y 28 cm), ideales para presentar tus aperitivos con estilo. Aptos para microondas, horno, congelador y lavavajillas, combinan practicidad, diseño y el inconfundible sello Coquinaria."},
    {name: "Fuente 51x29cms Coquinaria", brand: "Coquinaria", sku: "80277", descripcion: "La Fuente Gris Mate 51x29 cm Coquinaria es el complemento perfecto para tu vajilla, combinando elegancia, resistencia y diseño contemporáneo. Fabricada en porcelana de alta resistencia y cocida a 1250 °C, ofrece una durabilidad excepcional y soporta sin problemas los cambios de temperatura. Más ligera que la cerámica tradicional, resulta fácil de manipular y perfecta tanto para el uso diario como para ocasiones especiales. Apta para microondas, horno, congelador y lavavajillas, su acabado gris mate aporta un toque sofisticado a tu mesa. Ideal para servir grandes preparaciones y presentar directamente a la mesa, eleva cada comida con el estilo inconfundible Coquinaria."},
    {name: "Set 4 platos madera negra Coquinaria", brand: "Coquinaria", sku: "80278", descripcion: "El Set de 4 Platos Madera Negra Coquinaria está elaborado en madera de acacia, un material naturalmente resistente y duradero. Cada plato cuenta con acabado en barniz que realza su tono y protege la superficie, ofreciendo un estilo cálido y sofisticado para servir aperitivos, ensaladas o presentaciones gourmet. Su diseño natural eleva cualquier mesa. Para mantener su calidad, se recomienda lavar solo a mano."},
    {name: "Tabla Madera Acacia 56 cms Coquinaria", brand: "Coquinaria", sku: "80280", descripcion: "La Tabla de Madera Acacia 56 cm Coquinaria está elaborada en acacia, una madera resistente y duradera de tono natural que aporta calidez a la cocina. Su acabado en barniz protege la superficie y realza su textura, convirtiéndola en una pieza ideal para cortar, preparar y presentar alimentos con estilo. Perfecta para tu mesa o para uso diario en la cocina. Para mantener su calidad, se recomienda lavar solo a mano."},
    {name: "Mueble 4 bandejas Coquinaria", brand: "Coquinaria", sku: "80281", descripcion: ""},
    {name: "Panettone con limones confitados, naranjas de Sicilia y azafrán 500gr Fiasconaro", brand: "Fiasconaro", sku: "80282"},
    {name: "Set para Servir Ensalada 2pzs Oxford Coquinaria", brand: "Coquinaria", sku: "80283", descripcion: "Este set de 2 piezas incluye una cuchara y un tenedor para servir ensaladas, ambos fabricados en acero inoxidable con acabado espejo en color plata, lo que les confiere una excelente resistencia a la corrosión y gran durabilidad. Elegantes, resistentes y fáciles de usar, elevan cualquier mesa con un toque sofisticado. Como parte de la línea Oxford, son el complemento perfecto para lograr una mesa armoniosa, combinando diseño, funcionalidad y estilo Coquinaria."},
    {name: "Set Tenedor y Cuchara Servir 2 pzs Oxford Coquinaria", brand: "Coquinaria", sku: "80284", descripcion: "Este set de 2 piezas incluye una cuchara y un tenedor de servir fabricados en acero inoxidable con acabado espejo en color plata, lo que garantiza resistencia a la corrosión y una durabilidad excepcional. Elegantes y funcionales, son ideales para presentar y servir platos con estilo, elevando tu mesa en ocasiones especiales o en el día a día. Como parte de la línea Oxford, son el complemento perfecto para lograr una mesa coordinada, refinada y llena de brillo con el sello Coquinaria."},
    {name: "Espatula Oxford Coquinaria", brand: "Coquinaria", sku: "80285", descripcion: "Parte de la línea Oxford, esta Espátula Coquinaria está fabricada en acero inoxidable con acabado espejo en color plata, lo que le otorga una excelente resistencia a la corrosión y una durabilidad superior. Su diseño elegante y funcional la convierte en el complemento ideal para servir y presentar preparaciones con estilo. Perfecta para elevar tu mesa y aportar un toque sofisticado a cualquier ocasión."},
    {name: "Set 4 tenedores cinta cocktail ivory Laguiole Jean Dubost", brand: "Laguiole", sku: "80286", descripcion: ""},
    {name: "Porta Huevo Element Myrtle Danica", brand: "Danica", sku: "80291", descripcion: "El Porta Huevo Element Myrtle Danica está elaborado en cerámica gres 100% de alta calidad, inspirado en los cuatro elementos naturales: agua, aire, tierra y fuego. Su diseño busca transmitir calma, energía y conexión con la naturaleza, convirtiéndose en mucho más que un accesorio funcional. Perfecto para presentar huevos cocidos con estilo, este porta huevo añade un detalle sofisticado y auténtico a tu mesa, realzando tanto desayunos como brunchs. Ideal para quienes valoran piezas únicas que combinan practicidad y estética, transformando cada comida en una experiencia visual y gourmet."},
    {name: "Porta Huevo Element Calendula Danica", brand: "Danica", sku: "80292", descripcion: "El Porta Huevo Element Calendula Danica está elaborado en cerámica gres 100% de alta calidad, inspirado en los cuatro elementos naturales: agua, aire, tierra y fuego. Su diseño busca transmitir calma, energía y conexión con la naturaleza, convirtiéndose en mucho más que un accesorio funcional. Perfecto para presentar huevos cocidos con estilo, este porta huevo añade un detalle sofisticado y auténtico a tu mesa, realzando tanto desayunos como brunchs. Ideal para quienes valoran piezas únicas que combinan practicidad y estética, transformando cada comida en una experiencia visual y gourmet."},
    {name: "Mantequillera Element Calendula Danica", brand: "Danica", sku: "80293", descripcion: "Mantequillera Element Calendula Danica: una pieza de cerámica gres 100% que combina diseño y funcionalidad para elevar tu mesa. Inspirada en los cuatro elementos —agua, aire, tierra y fuego—, conecta la naturaleza con lo cotidiano, aportando calma, energía y vitalidad en cada uso. Su acabado artesanal y tonalidad cálida hacen que no solo sea práctica para conservar y servir la mantequilla, sino también un detalle decorativo que transforma cualquier mesa en un espacio sofisticado. Ideal para quienes buscan equilibrio entre estética, durabilidad y un toque único en la presentación de sus comidas."},
    {name: "Plato 16.5 cms Element Arbor Danica", brand: "Danica", sku: "80294", descripcion: "El Plato 16.5 cm Element Arbor Danica está elaborado en cerámica gres y forma parte de la colección Element, inspirada en la armonía del agua, el aire, la tierra y el fuego. Su diseño artesanal transmite equilibrio y sofisticación, ideal para servir aperitivos, postres o acompañamientos con estilo. La resistencia del gres asegura durabilidad, mientras que su estética eleva tu mesa a otro nivel, aportando un toque contemporáneo y versátil que se adapta a cualquier ocasión."},
    {name: "Plato 16.5 cms Element Myrtle Danica", brand: "Danica", sku: "80295", descripcion: "El Plato 16.5 cm Element Myrtle Danica, elaborado en cerámica gres, combina diseño funcional y estética natural para realzar tus aperitivos. Su inspiración en los elementos agua, aire, tierra y fuego transmite equilibrio y conexión con lo esencial, mientras que su acabado resistente lo convierte en una pieza práctica y duradera. Ideal para servir entradas, acompañamientos o postres pequeños, este plato aporta un toque elegante y contemporáneo a tu mesa, transformando cada ocasión en una experiencia visual y gourmet."},
    {name: "Bowl 15.8 cms Element Myrtle Danica", brand: "Danica", sku: "80296", descripcion: "El Bowl 15.8 cm Element Myrtle Danica de cerámica gres combina diseño artesanal y funcionalidad, ideal para servir sopas, salsas, ensaladas o aperitivos con estilo. Pintado a mano, destaca por sus formas orgánicas y tonos inspirados en la naturaleza, que evocan la calma y energía de los elementos tierra, agua, aire y fuego. Su versatilidad lo convierte en un imprescindible para mesas modernas y sofisticadas, aportando elegancia y autenticidad a cada ocasión. Perfecto para uso diario o para sorprender en celebraciones."},
    {name: "Bowl 15.8 cms Element Arbor Danica", brand: "Danica", sku: "80297", descripcion: "El Bowl 15.8 cm Element Arbor Danica está elaborado en cerámica gres 100% pintada a mano, ofreciendo un diseño artesanal que combina elegancia y funcionalidad. Perfecto para servir sopas, salsas, ensaladas o aperitivos, sus formas orgánicas y tonos inspirados en la naturaleza evocan calma y sofisticación. Parte de la colección Element, conecta con la esencia del agua, aire, tierra y fuego, aportando equilibrio y estilo a tu mesa. Ideal para uso diario o para sorprender en reuniones y celebraciones."},
    {name: "Bowl 15.8 cms Element Calendula Danica", brand: "Danica", sku: "80298", descripcion: "El Bowl 15.8 cms Element Calendula Danica, elaborado en cerámica gres de alta calidad, destaca por su diseño pintado a mano que fusiona un fondo natural con motivos en azul, creando una pieza única y elegante. Su tamaño de 15.8 cm lo convierte en el complemento perfecto para servir sopas, ensaladas, aperitivos o salsas, aportando estilo y versatilidad a tu mesa. Parte de la colección Element, este bowl refleja la armonía entre funcionalidad y estética, elevando cualquier ocasión con un aire sofisticado y contemporáneo."},
    {name: "Mug Element Myrtle Danica", brand: "Danica", sku: "80299", descripcion: "El Mug Element Myrtle Danica está elaborado en cerámica gres 100%, ofreciendo resistencia y elegancia en cada uso. Su diseño combina un fondo natural con delicados motivos azules que fluyen por la superficie, evocando la armonía de los elementos agua, aire, tierra y fuego. Perfecto para café, té o infusiones, este mug no solo es funcional, sino que también eleva la estética de tu mesa, conectando con la naturaleza y aportando un estilo único y contemporáneo a tu cocina."},
    {name: "Mug Element Arbor Danica", brand: "Danica", sku: "80300", descripcion: "El Mug Element Arbor Danica, elaborado en cerámica gres 100%, combina durabilidad y diseño contemporáneo. Su acabado en tonos naturales con delicados motivos azules crea una pieza que transmite calma y armonía, inspirada en los elementos agua, aire, tierra y fuego. Perfecto para disfrutar café, té o infusiones, este mug no solo es funcional, sino también un accesorio que aporta estilo y calidez a tu mesa, conectándote con la esencia de la naturaleza en cada uso."},
    {name: "Plato 25.4 cms Element Calendula Danica", brand: "Danica", sku: "80301", descripcion: "El Plato 25.4 cms Element Calendula Danica de cerámica gres combina diseño artesanal y funcionalidad, ideal para realzar tu mesa con un estilo elegante y natural. Su acabado en tonos cálidos captura la esencia del agua, el aire, la tierra y el fuego, evocando equilibrio y conexión con los elementos. Perfecto para servir platos principales o compartir en reuniones especiales, este plato versátil no solo enriquece la experiencia gastronómica, sino que también aporta un toque sofisticado a tu mesa."},
    {name: "Plato servir Element calendula Danica", brand: "Danica", sku: "80302", descripcion: "Plato Servir Element Calendula Danica de cerámica gres 100% es una pieza única que combina diseño artesanal y funcionalidad. Su forma amplia y resistente lo convierte en el aliado perfecto para presentar ensaladas, carnes, quesos o aperitivos, realzando cualquier mesa con elegancia natural. Inspirado en los elementos de la naturaleza, conecta tierra, agua, aire y fuego en un diseño armónico que aporta equilibrio y sofisticación. Ideal para quienes buscan estilo y durabilidad en su mesa."},
    {name: "Paño cocina wae Jasmine Danica", brand: "Danica", sku: "80303", descripcion: "El Paño de Cocina wae Jasmine Danica combina practicidad y estilo con un delicado estampado de jazmín impreso a mano mediante bloques tallados artesanalmente. Confeccionado en 100% algodón de tejido waffle, ofrece una gran capacidad de absorción, suavidad y durabilidad. Su acabado preencogido y prelavado no solo lo hace más confortable al tacto, sino que además minimiza el riesgo de encogimiento tras los lavados, asegurando un uso prolongado sin perder forma ni calidad. Un accesorio funcional y elegante que realza tu cocina con encanto artesanal."},
    {name: "Paño cocina wae Blomma Danica", brand: "Danica", sku: "80304", descripcion: "El Paño de cocina Wae Blomma Danica está confeccionado en 100% algodón con tejido de gofre súper absorbente, ideal para secar y limpiar con eficiencia. Su acabado preencogido minimiza la posibilidad de encogerse en futuros lavados, manteniendo su tamaño y funcionalidad intactos, mientras que el prelavado asegura una suavidad extra al tacto. De peso medio y gran durabilidad, combina practicidad con diseño estampado a mano, convirtiéndose en un accesorio esencial y decorativo para tu cocina."},
    {name: "Bowl ensalada Hanami Danica", brand: "Danica", sku: "80305", descripcion: "El Bowl Ensalada Hanami Danica celebra la delicadeza de la tradición japonesa de “contemplar las flores” con un diseño inspirado en pétalos que transmiten frescura y armonía a la mesa. Fabricado en 100% cerámica gres, combina resistencia y estilo atemporal, convirtiéndose en una pieza versátil y duradera. Su tamaño es ideal para servir ensaladas, frutas o preparaciones frescas, aportando un toque sofisticado a tu vajilla. Perfecto para quienes buscan piezas que unan naturaleza, diseño y calidad en cada detalle."},
    {name: "Plato fondo Hanami Danica", brand: "Danica", sku: "80306", descripcion: "El plato fondo Hanami de Danica, fabricado en 100% cerámica gres, celebra la delicadeza de las flores efímeras con un diseño inspirado en la tradición japonesa de hanami o “contemplar las flores”. Sus impresiones de pétalos evocan frescura y elegancia, convirtiéndolo en una pieza ideal para realzar cualquier mesa. Perfecto para sopas, pastas o ensaladas, este plato no solo aporta funcionalidad, sino también un toque artístico y atemporal a tu vajilla."},
    {name: "Plato pan Hanami Danica", brand: "Danica", sku: "80307", descripcion: "El Plato plan Hanami Danica, elaborado en 100% cerámica gres, aporta elegancia y funcionalidad a tu mesa. Inspirado en la tradición japonesa de contemplar las flores, esta colección transmite frescura y armonía en cada detalle. Su diseño sencillo y versátil lo convierte en una pieza ideal tanto para el uso diario como para ocasiones especiales. Perfecto para servir aperitivos o pequeñas preparaciones, combina durabilidad con un estilo atemporal que conecta con la naturaleza."},
    {name: "Bowl Postre Hanami Danica", brand: "Danica", sku: "80308", descripcion: "El Bowl Postre Hanami Danica está elaborado en 100% cerámica gres y combina resistencia con un diseño elegante inspirado en la tradición japonesa de “contemplar las flores”. Su acabado refinado aporta frescura y armonía a la mesa, convirtiéndolo en la pieza ideal para servir postres, frutas o pequeñas preparaciones. De tamaño práctico y estilo atemporal, este bowl realza cualquier ocasión con un aire sofisticado y natural, perfecto para quienes buscan vajilla duradera que conecte con la belleza de lo esencial."},
    {name: "Bowl chico Hanami Danica", brand: "Danica", sku: "80309", descripcion: "El Bowl Chico Hanami Danica, hecho en 100% cerámica gres, refleja la sutileza y armonía de la colección Hanami. Inspirado en la tradición japonesa de contemplar las flores, su diseño sencillo y elegante aporta frescura y serenidad a tu mesa. Ideal para servir salsas, dips o pequeñas porciones, este bowl combina funcionalidad y estilo atemporal. Su acabado de alta calidad garantiza resistencia y durabilidad, convirtiéndolo en una pieza versátil que eleva cualquier ocasión, desde un aperitivo informal hasta una mesa cuidadosamente decorada."},
    {name: "Plato servir 30 cms Hanami Danica", brand: "Danica", sku: "80310", descripcion: "El Plato Servir 30 cm Hanami Danica, fabricado en 100 % cerámica gres, aporta elegancia y funcionalidad a tu mesa. Inspirado en la tradición japonesa de contemplar las flores, esta pieza de la colección Hanami evoca frescura y armonía en cada comida. Su tamaño generoso y acabado refinado lo convierten en la elección ideal para presentar platos principales, compartir entrantes o servir aperitivos en ocasiones especiales. Durable, sofisticado y fácil de combinar, es perfecto para quienes buscan vajilla de calidad que realce la presentación de sus preparaciones."},
    {name: "Plato servir 37 cms Hanami Danica", brand: "Danica", sku: "80311", descripcion: "El Plato Servir 37 cm Hanami Danica, elaborado en 100% cerámica gres, combina funcionalidad y elegancia en una pieza inspirada en la delicadeza japonesa. Su diseño minimalista y líneas suaves evocan la armonía y frescura que caracteriza a la colección Hanami, ideal para llevar un toque sofisticado a tu mesa. Su amplio tamaño es perfecto para presentar ensaladas, pastas, carnes o aperitivos, destacando los alimentos con estilo. Una pieza resistente y duradera, pensada para quienes buscan vajilla de calidad que embellezca cada ocasión."},
    {name: "Set 4 vasos Hanami Danica", brand: "Danica", sku: "80312", descripcion: "El Set de 4 Vasos Hanami Danica, elaborado en 100% cerámica gres, aporta elegancia y frescura a tu mesa. Inspirado en la tradición japonesa de “contemplar las flores”, este set combina líneas suaves y un diseño minimalista que evoca armonía natural. Perfectos para servir agua, jugos o cócteles, destacan por su durabilidad y estilo atemporal. Su acabado artesanal y la calidad del gres los convierten en piezas versátiles que realzan cualquier ocasión, desde un desayuno relajado hasta una cena especial, conectando tu vajilla con la belleza y simplicidad de la naturaleza."},
    {name: "Set 2 piezas Servir madera Wavy Danica", brand: "Danica", sku: "80313", descripcion: "Aporta calidez y elegancia natural a tu mesa con el set de 2 piezas para servir Wavy Danica, elaborado al 100% en madera de olivo de alta calidad. Su textura densa y su tono cálido evocan la belleza y durabilidad de este noble material, convirtiéndolo en una pieza funcional y decorativa. Perfecto para servir ensaladas, pastas o acompañamientos, combina resistencia, diseño artesanal y un estilo atemporal que realza cualquier ocasión gastronómica, desde comidas cotidianas hasta celebraciones especiales."},
    {name: "Individual Lattice Gris Danica", brand: "Danica", sku: "80314", descripcion: "Eleva la presentación de tu mesa con el Individual Lattice Gris Danica, elaborado en 100% algodón tejido para ofrecer calidad y durabilidad. Su diseño limpio y clásico en tono gris paloma añade un toque elegante y versátil que combina fácilmente con cualquier estilo de vajilla o decoración. Su textura natural aporta calidez y un aire acogedor a cada comida, haciendo que incluso las comidas cotidianas luzcan especiales. Ideal para quienes buscan funcionalidad y estética en un solo accesorio, este individual transforma cualquier mesa en un espacio sofisticado y armónico."},
    {name: "Individual Lattice Burdeo Danica", brand: "Danica", sku: "80315", descripcion: "El Individual Lattice Burdeo Danica, confeccionado en 100% algodón tejido, combina elegancia clásica y funcionalidad para embellecer cualquier mesa. Su tono burdeos profundo aporta calidez y sofisticación, complementando estilos modernos o tradicionales. El tejido de alta calidad garantiza durabilidad, mientras que su diseño limpio añade un toque natural y acogedor a cada comida. Ideal para cenas familiares o eventos especiales, este mantel individual realza la presentación de tus platos y aporta estilo a tu comedor."},
    {name: "Individual Lattice Verde Danica", brand: "Danica", sku: "80316", descripcion: "El Individual Lattice Verde Danica, confeccionado en 100% algodón tejido, combina elegancia y funcionalidad para realzar cualquier mesa. Su tono verde oliva aporta un aire fresco y natural, creando un ambiente acogedor tanto en reuniones formales como en comidas diarias. Su diseño limpio y clásico complementa estilos modernos o tradicionales, mientras que el algodón de alta calidad garantiza durabilidad y fácil cuidado. Ideal para dar calidez y estilo a cada comida, aportando un toque sofisticado a tu decoración de mesa."},
    {name: "Set 4 tazas expresso Maison Danica", brand: "Danica", sku: "80317", descripcion: "Este elegante set de cuatro tazas espresso Maison Danica, elaborado en 100% cerámica gres, aporta un encanto atemporal inspirado en las casas de campo francesas. Sus tonos neutros combinan fácilmente con cualquier estilo de vajilla, creando un ambiente acogedor y sofisticado en tu mesa. Perfectas para servir espresso o cafés cortos, estas tazas destacan por su resistencia y durabilidad, siendo ideales tanto para el uso diario como para ocasiones especiales. Un set versátil que añade calidez y estilo a tus momentos de café."},
    {name: "Set 4 tazas expresso Aquarius Danica", brand: "Danica", sku: "80318", descripcion: "Set 4 Tazas Espresso Aquarius Danica aporta equilibrio y fluidez a tu mesa con sus líneas armoniosas y tonos suaves. Fabricadas en 100 % cerámica gres, destacan por sus esmaltes reactivos que, al fundirse durante la cocción, generan variaciones únicas en color, textura y tacto. Cada pieza es irrepetible, irradiando un encanto orgánico y auténtico. Inspiradas en la serenidad del agua, estas tazas combinan diseño contemporáneo y carácter artesanal, convirtiendo cada sorbo de café en una experiencia elegante y distintiva. Perfectas para quienes buscan funcionalidad y estilo exclusivo en su vajilla."},
    {name: "Paño esponja compostable pavo real Danica", brand: "Danica", sku: "80319", descripcion: "El Paño Esponja Compostable Pavo Real Danica está fabricado con 70% celulosa y 30% algodón, ofreciendo una alternativa sostenible a las esponjas y toallas de papel. Inspirado en el diseño escandinavo, es suave y flexible al mojarse, súper absorbente, reutilizable y lavable más de 200 veces. Su decoración de pavos reales y motivos otoñales añade color y encanto a tu cocina, mientras cuida del medio ambiente. Ideal para limpiar encimeras y superficies, combina funcionalidad, estilo y conciencia ecológica en un solo producto."},
    {name: "Paño esponja compostable gallina Danica", brand: "Danica", sku: "80320", descripcion: "Paño Esponja Compostable Gallina Danica combina sostenibilidad y funcionalidad en tu cocina. Fabricado con 70% celulosa vegetal y 30% algodón, es completamente compostable y una alternativa ecológica a esponjas, paños y toallas de papel. Su material se vuelve suave y flexible al mojarse, facilitando la limpieza de platos, encimeras o grifería. Con un encantador estampado de gallinas, aporta estilo campestre y calidez a tu hogar. Reutilizable y lavable a máquina o en lavavajillas, es ideal para quienes buscan reducir residuos sin renunciar a la practicidad ni al diseño."},
    {name: "Paño esponja compostable sardinas Danica", brand: "Danica", sku: "80321", descripcion: "Paño Esponja Compostable Sardinas Danica combina estilo marinero y sostenibilidad para tu cocina. Elaborado con 70% celulosa vegetal y 30% algodón, es completamente compostable y una alternativa ecológica a esponjas, paños y toallas de papel. Su diseño inspirado en el mar, con coloridas sardinas, añade encanto y frescura a tu hogar. Al mojarse, se vuelve suave y flexible, facilitando la limpieza de platos, encimeras o grifería. Reutilizable y lavable más de 200 veces, es superabsorbente, versátil y seguro con diversos productos de limpieza, ideal para quienes buscan reducir residuos sin sacrificar estilo ni practicidad."},
    {name: "Paño esponja compostable algas Danica", brand: "Danica", sku: "80322", descripcion: "Paño Esponja Compostable Algas Danica une diseño natural y funcionalidad sostenible para tu cocina. Fabricado con 70 % de celulosa vegetal y 30 % de algodón, es totalmente compostable y reemplaza de forma ecológica las esponjas, paños y toallas de papel. Su estampado de algas, inspirado en la belleza marina, aporta frescura y estilo a tus tareas diarias. Al mojarse, se vuelve suave y flexible, ofreciendo una limpieza eficiente en platos, encimeras o grifería. Reutilizable y lavable más de 200 veces, es superabsorbente, versátil y seguro para usar con distintos productos de limpieza."},
    {name: "Paño esponja compostable langsosta Danica", brand: "Danica", sku: "80323", descripcion: "Paño Esponja Compostable Langosta Danica combina estilo, practicidad y compromiso ambiental para tu cocina. Elaborado con 70 % de celulosa vegetal y 30 % de algodón, es totalmente compostable y ofrece una alternativa sostenible a las esponjas y toallas de papel. Su encantador diseño de langosta añade un toque divertido mientras limpia eficazmente platos, encimeras y superficies delicadas. Al mojarse, se vuelve suave y flexible, es superabsorbente, reutilizable y lavable más de 200 veces, garantizando durabilidad y versatilidad en cada uso."},
    {name: "Paño esponja compostable paris Danica", brand: "Danica", sku: "80324", descripcion: "Paño Esponja Compostable París Danica une estilo, funcionalidad y sostenibilidad para tu cocina. Fabricado con 70 % de celulosa vegetal y 30 % de algodón, es completamente compostable y sustituye de forma ecológica a las esponjas y toallas de papel tradicionales. Su encantador diseño inspirado en París, con la icónica Torre Eiffel y calles arboladas, aporta un aire romántico a tus tareas diarias. Al mojarse, se vuelve suave y flexible, es superabsorbente, reutilizable y lavable más de 200 veces, brindando durabilidad y elegancia a cada limpieza."},
    {name: "Paño esponja compostable cafe Danica", brand: "Danica", sku: "80325", descripcion: "Paño Esponja Compostable Café Danica combina estilo, funcionalidad y sostenibilidad en tu cocina. Fabricado con 70 % de celulosa vegetal y 30 % de algodón, es totalmente compostable y reemplaza de forma ecológica a las esponjas y toallas de papel. Su diseño “Coffee Break” evoca el placer de una pausa para el café, aportando calidez y encanto a tu hogar. Al mojarse, se vuelve suave y flexible, es superabsorbente, reutilizable y puede lavarse más de 200 veces, haciendo que cada limpieza sea tan agradable como tu primera taza del día."},
    {name: "Paño esponja compostable parrilla Danica", brand: "Danica", sku: "80326", descripcion: "El Paño esponja compostable parrilla Danica fabricado con 70 % de celulosa y 30 % de algodón, es una alternativa ecológica a las esponjas, paños de cocina y toallas de papel. Al mojarse, se vuelve suave y flexible para una limpieza fácil y eficiente. Su diseño inspirado en la parrilla añade un toque divertido y estiloso a tu cocina, mientras su practicidad y sostenibilidad lo convierten en un aliado confiable. Reutilizable y duradero, puede lavarse más de 200 veces, ofreciendo versatilidad y respeto por el medio ambiente en cada uso."},
    {name: "Esponja compostable Danica", brand: "Danica", sku: "80430"},
    {name: "Encendedor de Velas recargable Coquinaria", brand: "Coquinaria", sku: "80328", descripcion: "Encendedor de Velas Recargable Coquinaria: Este encendedor eléctrico con botón on/off ofrece una forma fácil y segura de encender velas en tu casa. Es recargable vía USB e incluye 4 indicadores luminosos de batería (25/50/75/100%). Su cuerpo de aleación de aluminio aporta durabilidad y un look moderno. Presentado en caja de regalo con logo plateado, es perfecto para mesas elegantes, ambientar espacios y encender tus velas de manera cómoda y práctica."},
    {name: "Plato 16.5 cms Element Calendula Danica", brand: "Danica", sku: "80332", descripcion: "El Plato 16.5 cms Element Calendula Danica es un elegante plato para aperitivos que captura la esencia del agua, el aire, la tierra y el fuego, transmitiendo calma, energía y conexión con la naturaleza. Fabricado en 100 % cerámica gres, ofrece durabilidad y un acabado refinado que eleva cualquier presentación en la mesa. Su diseño versátil combina a la perfección con otras piezas de la colección Element, aportando un toque sofisticado y armónico a comidas diarias o celebraciones especiales. Ideal para quienes buscan vajilla resistente, con estilo atemporal y un sello de inspiración natural."},
    {name: "Set 4 Cucharas Element Danica", brand: "Danica", sku: "80333", descripcion: "El Set 4 Cucharas Element Danica es una pieza esencial para quienes buscan estilo y funcionalidad en su mesa. Fabricadas en 100% cerámica gres, estas cucharas combinan durabilidad y un diseño inspirado en la naturaleza. Parte de la colección Element, capturan la esencia del agua, el aire, la tierra y el fuego, evocando calma, vitalidad y conexión con lo natural. Sus líneas orgánicas y acabado artesanal las convierten en un complemento versátil para postres, aperitivos o café, elevando la presentación de tus comidas con un toque sofisticado y armónico."},
    {name: "Set 6 Copas Champagne Wave Coquinaria", brand: "Coquinaria", sku: "80334", descripcion: "El Set 6 Copas Champagne Wave Coquinaria (305ml) es parte de la línea más elegante y sofisticada de Coquinaria, perfecta para realzar celebraciones y brindar con estilo. Fabricadas en vidrio resistente, soportan uso diario y lavados sin perder claridad, con superficie suave y no porosa que evita bacterias. Su forma estilizada mantiene las burbujas por más tiempo y realza aromas. Compleméntalas con las copas de vino y los vasos de la colección Wave para lucirte y llevar tu mesa a otro nivel."},
    {name: "Set 6 Copas Vino Wave Coquinaria", brand: "Coquinaria", sku: "80335", descripcion: "El Set 6 Copas Vino Wave Coquinaria (715ml) es parte de la línea más elegante y sofisticada de vasos y copas Coquinaria, diseñada para quienes disfrutan una mesa impecable. Fabricadas en vidrio resistente, soportan uso diario y lavados sin perder brillo, con superficie suave y no porosa que evita bacterias. Su cuenco amplio favorece la oxigenación del vino, intensificando aromas y sabor. Ideales para realzar cenas y celebraciones en tu hogar. Combínalas con los sets de copas de champaña y vasos Wave para un look armonioso."},
    {name: "Set 6 Vasos Wave Coquinaria", brand: "Coquinaria", sku: "80336", descripcion: "El Set 6 Vasos Wave Coquinaria (340 ml) es parte de la línea más elegante y sofisticada de Coquinaria, ideales para elevar tu mesa con un diseño moderno y distintivo. Fabricados en vidrio resistente, mantienen su claridad con el uso diario y su superficie suave y no porosa facilita la limpieza y evita bacterias. Su forma innovadora aporta estilo en cada uso. Compleméntalos con las copas de vino y champaña Wave para lucirte y llevar tu mesa a otro nivel."},
    {name: "Set 6 Copas Prisma Coquinaria", brand: "Coquinaria", sku: "80337", descripcion: "El Set 6 Copas Prisma Coquinaria (485 ml) es una línea moderna y equilibrada, ideal para quienes buscan estilo sin perder funcionalidad. Fabricadas en vidrio resistente, conservan su brillo con el uso diario y su superficie lisa y no porosa permite una limpieza fácil y segura. Su diseño transparente con decoración lineal aporta un look contemporáneo que realza cualquier mesa. Perfectas para comidas y reuniones con un toque actual y versátil. Complementa tu set con los vasos Prisma para elevar tu mesa y llevarla a otro nivel."},
    {name: "Set 6 Vasos Prisma Coquinaria", brand: "Coquinaria", sku: "80338", descripcion: "El Set 6 Vasos Prisma Coquinaria (390 ml) pertenecen a una línea moderna y versátil que destaca por su diseño equilibrado y actual. Fabricados en vidrio resistente, conservan su brillo con el uso diario y su superficie lisa y no porosa permite una limpieza fácil y segura. Su forma transparente con decoración lineal aporta un estilo contemporáneo que eleva cualquier mesa. Perfectos para acompañar tus comidas y momentos cotidianos con un toque fresco y sofisticado. Complementa tu set con las copas Prisma para elevar tu mesa y llevarla a otro nivel."},
    {name: "Set 6 Copas Nova Coquinaria", brand: "Coquinaria", sku: "80339", descripcion: "El Set 6 Copas Nova Coquinaria (350 ml) pertenece a la línea más casual y versátil de Coquinaria, ideal para quinchos, terrazas y reuniones al aire libre. Fabricadas en vidrio resistente, conservan su brillo con el uso diario y su superficie lisa y no porosa permite una limpieza fácil y segura, evitando la acumulación de bacterias. Su diseño en color azul con decoración lineal aporta un estilo fresco y relajado que transforma tu mesa y la lleva a otro nivel, sin perder naturalidad. Compléméntalos con el set de Vasos Nova para llevar tu quincho a otro nivel."},
    {name: "Set 6 Vasos Nova Coquinaria", brand: "Coquinaria", sku: "80340", descripcion: "El Set 6 Vasos Nova Coquinaria (410 ml) pertenece a la línea más casual y versátil de Coquinaria, perfecta para quinchos, terrazas y momentos al aire libre. Fabricados en vidrio resistente, conservan su brillo con el uso diario y su superficie lisa y no porosa permite una limpieza fácil y segura, evitando la acumulación de bacterias. Su diseño en color azul con decoración lineal aporta un estilo fresco y relajado que eleva tu mesa y la lleva a otro nivel. Compléméntalos con el set de copas Nova para llevar tu quincho a otro nivel."},
    {name: "Set 4 Chips de madera Coquinaria", brand: "Coquinaria", sku: "80341", descripcion: ""},
    {name: "Descorchador manual Coquinaria", brand: "Coquinaria", sku: "80342", descripcion: "Abre tus botellas con estilo y precisión gracias a este descorchador manual Coquinaria, diseñado para un uso cómodo, seguro y eficiente. Su mecanismo firme permite extraer corchos sin esfuerzo, ideal para vinos tintos, blancos o espumantes. Incluye un estuche elegante que facilita su almacenamiento y lo convierte en un regalo perfecto para amantes del vino y ocasiones especiales. Un imprescindible en toda cocina o bar en casa."},
    {name: "Tabla Madera negra 49 cms Coquinaria", brand: "Coquinaria", sku: "80343", descripcion: "La Tabla de Madera Negra 49 cm Coquinaria está elaborada en madera de fresno negro, una madera dura, densa y muy apreciada por su resistencia y durabilidad. Su acabado en barniz realza el color y protege la superficie. Ideal para lucirte en aperitivos y presentaciones gourmet en casa. Lavar solo a mano para mantener su calidad. Una pieza sofisticada para elevar tu mesa."},
    {name: "Plato Madera negra 38 cms Coquinaria", brand: "Coquinaria", sku: "80344", descripcion: "El Plato de Madera Negra 38 cm Coquinaria está elaborado en madera de fresno negro, una madera noble, densa y muy valorada por su resistencia y durabilidad. Su acabado en barniz realza el tono oscuro y protege la superficie, convirtiéndolo en una pieza ideal para lucirte en aperitivos y presentaciones gourmet en casa. Un accesorio sofisticado que realza cualquier mesa. Para mantener su calidad, se recomienda lavar solo a mano."},
    {name: "Set para servir 2 pcs Madera negra Coquinaria", brand: "Coquinaria", sku: "80345", descripcion: "El Set para Servir 2 pcs Madera Negra Coquinaria incluye dos cubiertos de ensalada fabricados en bambú, un material ligero, fuerte y naturalmente resistente. Su color negro con acabado en barniz aporta un estilo moderno y sofisticado, ideal para servir ensaladas y elevar la presentación de tu mesa. Perfectos para ocasiones especiales o el día a día. Para preservar su calidad, se recomienda lavar solo a mano."},
    {name: "Miel Multifloral 540 grs Coquinaria", brand: "Coquinaria", sku: "80346", descripcion: "La Miel Multifloral 540 g Coquinaria es un producto 100% natural elaborado artesanalmente por apicultores del Valle de Pencahue y Botalcura, en la Región del Maule. Procedente de colmenas de quillay, esta miel no contiene aditivos ni preservantes y conserva intactas sus propiedades naturales. Su color ámbar claro, dulzor suave y textura agradable la hacen única en sabor y calidad. Rica en beneficios como acción bactericida, antiséptica, digestiva y relajante, estimula el sistema inmunológico y es ideal para endulzar infusiones, yogures, frutas o panes integrales con un toque saludable y gourmet."},
    {name: "Canasto negro Coquinaria", brand: "Coquinaria", sku: "80375", descripcion: "El Canasto Negro Coquinaria está fabricado en polirratán resistente y liviano, e incluye dos mangos huecos rectangulares que facilitan su transporte. Su diseño moderno y funcional lo convierte en un complemento ideal para organizar cocinas, despensas o terrazas, manteniendo todo ordenado con estilo. Perfecto para almacenar frutas, textiles, utensilios o accesorios en el quincho y otros espacios del hogar."},
    {name: "Organizador Cubiertos Coquinaria", brand: "Coquinaria", sku: "80376", descripcion: "El Organizador de Cubiertos Coquinaria es un práctico accesorio de polirratán en color negro, diseñado con 3 compartimentos y un asa superior para transportarlo fácilmente al quincho, comedor o terraza. Resistente, liviano y fácil de limpiar, mantiene tus cubiertos y utensilios ordenados y siempre al alcance. Su diseño moderno aporta un toque decorativo y funcional, ideal para almuerzos al aire libre, parrillas y reuniones en familia o con amigos."},
    {name: "Set 2 Bandejas Coquinaria", brand: "Coquinaria", sku: "80377", descripcion: "El Set 2 Bandejas Coquinaria incluye dos bandejas de polirratán en color negro, diseñadas en distintos tamaños para adaptarse a cualquier ocasión. Resistentes, livianas y fáciles de transportar, son ideales para llevar aperitivos, snacks o utensilios directamente a la mesa del quincho, terraza o comedor. Su diseño moderno y funcional aporta estilo y practicidad a tus reuniones y momentos al aire libre."},
    {name: "Set 4 anillos para servilletas Coquinaria", brand: "Coquinaria", sku: "80378", descripcion: "El Set 4 Anillos para Servilletas Coquinaria está fabricado en polirratán negro, ideal para mantener las servilletas dobladas, ordenadas y con un toque elegante en la mesa. Su diseño funcional y decorativo permite personalizar la presentación según la ocasión, elevando el estilo de eventos formales, cenas casuales o reuniones en el quincho. Una forma simple y sofisticada de destacar tu mesa con sello Coquinaria."},
    {name: "Servilletero Coquinaria", brand: "Coquinaria", sku: "80379", descripcion: "El Servilletero Coquinaria está fabricado en polirratán negro y cuenta con un diseño de esquinas redondeadas que combina resistencia, estilo y funcionalidad. Ligero, durable y fácil de limpiar, es perfecto para mantener servilletas ordenadas en el quincho, terraza o comedor. Su estética moderna aporta un toque decorativo que realza la mesa en reuniones casuales o eventos al aire libre."},
    {name: "Hielera 4L Coquinaria", brand: "Coquinaria", sku: "80380", descripcion: ""},
    {name: "Bolsa Coquinaria XL", brand: "Coquinaria", sku: "80394", descripcion: ""},
    {name: "Extracto de Vainilla pura 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80395", descripcion: "El Extracto de Vainilla Pura Nielsen Massey 60 ml se elabora con una mezcla patentada de vainas de vainilla seleccionadas y un exclusivo método de cocción en frío que conserva más de 400 compuestos aromáticos naturales. Su sabor intenso y equilibrado, junto a su característico color marrón oscuro, lo convierten en un ingrediente esencial tanto en repostería como en cocina salada. Perfecto para galletas, pasteles, helados, sopas, salsas, carnes y bebidas como té helado o cócteles, aporta un toque gourmet inconfundible a cada preparación."},
    {name: "Extracto de Vainilla pura Sin azucar 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80396", descripcion: "El Extracto de Vainilla Pura sin Azúcar Nielsen Massey 60 ml está elaborado con granos de vainilla Bourbon de la más alta calidad, seleccionados a mano para garantizar un sabor intenso y auténtico. Con la misma excelencia que caracteriza a la marca, este extracto ofrece la riqueza aromática de la vainilla sin azúcares añadidos, ideal para quienes buscan una alternativa más natural y versátil. Perfecto para repostería, postres, bebidas calientes o frías y platos salados, aporta un toque gourmet inconfundible a cualquier preparación."},
    {name: "Pasta de Vainilla pura de Madagascar 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80397", descripcion: "La Pasta de Vainilla Pura de Madagascar Nielsen Massey 60 ml aporta un sabor intenso, aromático y con auténticas semillas de vainilla que realzan cualquier preparación. Su textura similar a la miel la hace perfecta para yogur, avena, café, batidos o frutas, así como para postres como natillas, budines, helados y pasteles. También da un toque sofisticado a aves, pescados y salsas saladas. Procedente de la región Bourbon de Madagascar, reconocida mundialmente por producir la vainilla más fina gracias a su clima, suelo fértil y proceso artesanal de polinización y curado, es considerada un ingrediente premium único."},
    {name: "Pasta de Vainilla pura 118 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80398", descripcion: "La Pasta de Vainilla Pura Nielsen Massey 118 ml ofrece un sabor intenso y robusto, con auténticas semillas de vainilla que aportan un acabado elegante y gourmet a cualquier preparación. Su textura similar a la miel intensifica el sabor sin alterar masas, salsas o bebidas, convirtiéndola en un ingrediente versátil para repostería, postres y panes, así como para realzar yogur, café, batidos o frutas. También añade sofisticación a platos salados como aves, mariscos o glaseados. Un producto premium que transforma lo cotidiano en experiencias culinarias excepcionales."},
    {name: "Extracto de Almendra pura 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80399", descripcion: "El Extracto de Almendra Pura Nielsen Massey 60 ml es un clásico de la repostería, elaborado con aceite puro de almendra amarga para garantizar sabor intenso y calidad superior. Considerado un ingrediente gourmet desde hace siglos, su uso en la repostería europea y en licores como el amaretto lo posiciona como un extracto de herencia culinaria única. Su versatilidad lo convierte en imprescindible para galletas, tartas, natillas, helados y frutas, además de realzar bebidas, aderezos y salsas con un toque distintivo y elegante."},
    {name: "Extracto de Limón puro 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80400", descripcion: "El Extracto de Limón Puro Nielsen Massey 60 ml está elaborado con aceite natural de limones californianos seleccionados, ofreciendo un sabor fresco, vibrante y versátil que realza tanto platos dulces como salados. Ideal para galletas, tartas, mermeladas o glaseados, y también para adobos, pescados, pollo, verduras o arroces, aporta el toque cítrico perfecto sin necesidad de rallar ni exprimir. Inspirado en una fruta con herencia milenaria desde Asia hasta América, este extracto gourmet es un aliado premium en repostería, coctelería y cocina creativa."},
    {name: "Extracto de Naranja pura 60 ml Nielsen Massey", brand: "Nielsen Massey", sku: "80401", descripcion: "El Extracto de Naranja Pura Nielsen Massey 60 ml aporta un sabor fresco, cítrico y natural a todo tipo de preparaciones. Elaborado con naranjas seleccionadas, es ideal para galletas, tartas, helados o mermeladas, y también para platos salados de pollo, arroz o pescados. En bebidas realza cócteles, sidras, refrescos o incluso chocolate caliente. Su origen milenario, cultivado desde el sudeste asiático y apreciado en Europa y América por su fragancia única, lo convierte en un extracto gourmet de herencia histórica y calidad premium."},
    {name: "Hielera 4L Coquinaria", brand: "Coquinaria", sku: "80380", descripcion: ""},
    {name: "Bellini Zero 0,75 L", brand: "Cipriani", sku: "80329"},
    {name: "Bellini Cocktail 200 ml Cipriani", brand: "Cipriani", sku: "80407", descripcion: "Bellini Cocktail 200 ml Cipriani es el clásico cóctel veneciano creado en Harry’s Bar, preparado con puré de melocotón blanco y Prosecco de la más alta calidad. Suave, fresco y ligeramente dulce, mantiene la autenticidad de la receta original que conquistó al mundo. Listo para servir, es perfecto para brindar en celebraciones, acompañar aperitivos o disfrutar en un momento especial. Sírvelo bien frío y vive una experiencia elegante y vibrante al estilo italiano."},
    {name: "Pan de pascua  Coquinaria 400 grs", brand: "Coquinaria", sku: "80402", descripcion: "Pan de Pascua Coquinaria 400 g es la elección perfecta para quienes buscan sabores auténticos y artesanales en Navidad. Suave, húmedo y aromático, está elaborado sin conservantes ni saborizantes artificiales, destacando ingredientes de primera calidad como brandy, ciruelas, nueces, damascos y frutas confitadas. Las especias de nuez moscada, canela, jengibre y anís aportan un toque único que realza su sabor. Ideal para compartir en celebraciones, acompañado de un buen café o un bajativo."},
    {name: "Crackers con especias 130 grs Lady Joseph", brand: "Lady Joseph", sku: "80439", descripcion: ""},
    {name: "Crackers con sal ahumada 130 grs Lady Joseph", brand: "Lady Joseph", sku: "80440", descripcion: ""},
    {name: "Crackers con harina de centeno y sal 130 grs Lady Joseph", brand: "Lady Joseph", sku: "80441", descripcion: ""},
    {name: "Crackers para quesos selección 390 grs", brand: "Lady Joseph", sku: "80442", descripcion: ""},
    {name: "Mix 4 pimientas 340 grs Coquinaria", brand: "Coquinaria", sku: "80420", descripcion: "Eleva tus recetas con este mix premium de 4 pimientas de 340 gr Coquinaria: pimienta negra, blanca, verde y rosada, un clásico imprescindible en toda cocina gourmet. Su formato de 340 g es perfecto para rellenar tu molinillo y disfrutar siempre de un sabor fresco, intenso y aromático. Ideal para realzar carnes, vegetales, pastas, salsas o parrillas. Un imprescindible para quienes buscan dar un toque profesional y lleno de carácter a cada plato."},
    {name: "Sal del himalaya 750 grs Coquinaria", brand: "Coquinaria", sku: "80421", descripcion: "La Sal del Himalaya 750 gr Coquinaria destaca por su pureza, origen natural y su aporte de más de 10 minerales esenciales. Este frasco de 750 g contiene cristales rosados ideales para cocinar, sazonar y elevar preparaciones gourmet. Su formato es perfecto para recargar molinillos y disfrutar siempre de un sabor limpio, equilibrado y auténtico. Ideal para carnes, ensaladas, vegetales y uso diario en la cocina."},
    {name: "Bombón praliné crocante Coquinaria 150 grs", brand: "Coquinaria", sku: "80403", descripcion: ""},
    {name: "Bombón caramelo salado Coquinaria 150 grs", brand: "Coquinaria", sku: "80404", descripcion: ""},
    {name: "Naranjitas Bañadas Coquinaria 150 grs", brand: "Coquinaria", sku: "80406", descripcion: ""},
    {name: "Nougatine Coquinaria 150 grs", brand: "Coquinaria", sku: "80405", descripcion: ""},
    {name: "Galletas Wafer Cracker Pimienta 100 grs Nat", brand: "Coquinaria", sku: "80451", descripcion: ""},
    {name: "Galletas Wafer Cracker Romero 100grs Nat", brand: "Coquinaria", sku: "80452", descripcion: ""},
    {name: "Set 4 Paños de Cocina Verduras rojo Coquinaria", brand: "Coquinaria", sku: "80453", descripcion: ""},
    {name: "Set 4 Paños de Cocina Verduras azul Coquinaria", brand: "Coquinaria", sku: "80454", descripcion: ""},
    {name: "Set 4 Paños de Cocina Verduras amarillo Coquinaria", brand: "Coquinaria", sku: "80455", descripcion: ""},
    {name: "Set 4 Paños de Cocina Verduras verde Coquinaria", brand: "Coquinaria", sku: "80456", descripcion: ""},
    {name: "Molinillo Mix 4 pimientas Coquinaria", brand: "Coquinaria", sku: "80457", descripcion: ""},
    {name: "Molinillo Sal Himalaya Coquinaria", brand: "Coquinaria", sku: "80458", descripcion: ""}
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
