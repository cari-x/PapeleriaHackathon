//? Variables
export const productList = []; // Producto1 Producto2 Producto3 Producto4 Producto5 Producto6

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
}

ingresarProducto(
    'Floating Phone', //Nombre
    4, //Numero de estrellas
    10, //NUmero de comentarios
    true, //¿Esta disponible ?
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', //Descripcion
    ['red', 'blue', 'green'], //Colores
    12700, // Precio
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' //Imagen
);