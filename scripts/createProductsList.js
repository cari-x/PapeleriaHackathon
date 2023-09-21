//? Variables
export const productList = []; // Producto1 Producto2 Producto3 Producto4 Producto5 Producto6

function ingresarProducto(nombre,calificacion,comentarios,disponibilidad,descripcion,precio,imagen) {
    const producto = new Map();

    producto.set('nombre', nombre);
    producto.set('calificacion', calificacion);
    producto.set('comentarios', comentarios);
    producto.set('disponibilidad', disponibilidad);
    producto.set('descripcion', descripcion);
    producto.set('precio', precio);
    producto.set('imagen', imagen);
    
    productList.push(producto);
}

ingresarProducto(
    'COLORES DOBLE PUNTA SCRIBE X 13 UNIDADES', //Nombre
    5, //Numero de estrellas
    10, //NUmero de comentarios
    true, //¿Esta disponible ?
    'Punta gruesa - Excelente suavidad y cobertura - Minas resistentes - Gratis tajalápiz - Incluye 2 colores metalizados.', //Descripcion
    28100, // Precio
    'img/productoPapeleria1.webp' //Imagen
);
ingresarProducto(
    'RESALTADOR DELGADO SHARPIE NOTE X 12 UNIDADES', 
    4,
    5, 
    true, 
    'Marcadores Sharpie que marcan sobre la mayoría de superficies. Cantidad: 12 marcadores punta cincel surtidos-La punta de pincel versátil 2 en 1 le permite cambiar rápidamente entre líneas precisas y gruesas-Medidas: 19.5 cm x 18 cm x 2 cm en empaque.', //Descripcion
    42300, 
    'img/productoPapeleria2.webp' 
);
ingresarProducto(
    'MARCADOR SHARPIE NEÓN, 5 UNIDADES SURTIDAS', 
    5,
    1, 
    true, 
    'Marcador Sharpie Neón, 5 unidades surtidas', //Descripcion
    24900, 
    'img/productoPapeleria3.webp' 
);
ingresarProducto(
    'BOLÍGRAFO PAPERMATE INKJOY GEL X 2 UNIDADES, COLOR NEGRO', 
    3,
    10, 
    true, 
    'Bolígrafo PaperMate Inkjoy gel x 2 unidades, color negro: Características: - Tinta de secado rápido - Reduce manchas - Ergonómicos (un cómodo grip que envuelve todo el bolígrafo) - Suaves', //Descripcion
    16300, 
    'img/productoPapeleria4.webp' 
);
ingresarProducto(
    'PLUMONES LAVABLES PAPERMATE X 12 UNIDADES', 
    1,
    1, 
    true, 
    'Plumones gruesos PaperMate • Lavables • Punta bala • Trazo mediano • Total unidades: 12 • Marcadores unipunta • Colores vivos e intensos', //Descripcion
    21200, 
    'img/productoPapeleria5.webp' 
);
ingresarProducto(
    'TIJERA PUNTA ROMA 13 CM PARA ZURDO SURTIDA', 
    5,
    25, 
    true, 
    'Encuentra en Panamericana elementos de calidad en insumos de papelería y oficina: Tijeras - 13 cm - surtida - punta roma - para zurdos', //Descripcion
    5500, 
    'img/productoPapeleria6.webp' 
);
ingresarProducto(
    'CUADERNO CUADRICULADO DE 160 HOJAS 5 MATERIAS', 
    3,
    5, 
    true, 
    'Regresa a clase con los mejores cuadernos Características - Cuadriculado - 160 hojas - Argollado - 5 materias - Stickers Incluye - Datos personales ', //Descripcion
    26500, 
    'img/productoPapeleria7.webp' 
);
ingresarProducto(
    'BORRADOR DE NATA FABER CASTELL, 10 UNIDADES', 
    5,
    50, 
    true, 
    'Insumos de calidad, para cubrir las necesidades en casa, la oficina, trabajo, estudio, etc. Borrador de nata no tóxico, sin protector. En estuche termoencogido por 10 unidades ', //Descripcion
    10900, 
    'img/productoPapeleria8.webp' 
);