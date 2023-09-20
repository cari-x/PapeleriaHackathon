//? Variables
export const productList = [];

function ingresarProducto(nombre,calificacion,comentarios,disponibilidad,descripcion,colores,precio,imagen) {
    const producto = new Map();

    producto.set('nombre', nombre);
    producto.set('calificacion', calificacion);
    producto.set('comentarios', comentarios);
    producto.set('disponibilidad', disponibilidad);
    producto.set('descripcion', descripcion);
    producto.set('colores', colores);
    producto.set('precio', precio);
    producto.set('imagen', imagen);
    
    productList.push(producto);
    
    console.log(productList[0]);
}

ingresarProducto(
    'Floating Phone',
    4,
    10,
    true,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    ['red', 'blue', 'green'],
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);

ingresarProducto(
    'Floating Phone',
    4,
    10,
    true,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    ['red', 'blue', 'green'],
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);

ingresarProducto(
    'Floating Phone',
    4,
    10,
    true,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    ['red', 'blue', 'green'],
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);

ingresarProducto(
    'Floating Phone',
    4,
    10,
    true,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    ['red', 'blue', 'green'],
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);
