import { addProductsShoppingCart } from './addProductoCarrito.js'

const galleryProducts = document.querySelector('#productosPapeleria');

// Es crear el HTML para mostrarlo en pantalla de los productos de home
export function productRender(array) {
    
    for (const product of array){

        //Crear elementos
        const tarjetaProducto = document.createElement('div');
        const contenedorImagen = document.createElement('div');
        const productoImagen = document.createElement('img');
        const botonAñadirCarrito = document.createElement('button');
        
        //Estilizar elementos
        tarjetaProducto.classList.add('Card');
        contenedorImagen.classList.add('productoImg');
        botonAñadirCarrito.classList.add('productoButton');
        
        //Atributos de los elementos
        productoImagen.setAttribute('src', product.get('imagen'));

        //Dar el contenido a los elementos
        botonAñadirCarrito.textContent = 'Añadir al carrito';
        
        //Estructurar HTML
        contenedorImagen.appendChild(productoImagen);
        tarjetaProducto.append(contenedorImagen,botonAñadirCarrito);
        galleryProducts.appendChild(tarjetaProducto);
        
        //Eventos de escucha
        contenedorImagen.addEventListener('click', () => createProductDetailAside (product.get('precio'),product.get('nombre'),product.get('descripcion'),product.get('imagen')));
        botonAñadirCarrito.addEventListener('click', () => addProductsShoppingCart (product.get('imagen'),product.get('nombre'),product.get('precio')));
    }   
}

//Creacion dinamica Detalles del producto Home
function createProductDetailAside (precio,nombre,descripcion,imagen){
    
    //Elemento Padre
    const contenedorPrincipal = document.querySelector('.seccionProductos')

    //Creacion Elementos
    const contenedorModal = document.createElement('div');
    const contenidoModal = document.createElement('div');
    const contenedorIconClose = document.createElement('button');
    const nombreProducto = document.createElement('h2');
    const imagenProducto = document.createElement('img');
    const precioProducto = document.createElement('p');
    const descripcionProducto = document.createElement('p');
    const botonAñadir = document.createElement('button');

    //Estilizar Elementos
    contenedorModal.classList.add('modal');
    contenedorModal.setAttribute('id','modal');

    contenidoModal.classList.add('modal-contenido');
    contenedorIconClose.classList.add('madal-cerrar');
    contenedorIconClose.setAttribute('id','cerrarModal');

    imagenProducto.setAttribute('src', imagen);
    botonAñadir.setAttribute('id','agregarAlCarrito');

    //Dar contenido a los elementos
    nombreProducto.textContent = nombre;
    precioProducto.textContent = precio;
    descripcionProducto.textContent = descripcion;
    contenedorIconClose.textContent = 'cerrar';
    botonAñadir.textContent = 'Añadir al carrito';

    //Estructurar HTML
    contenidoModal.append(nombreProducto,imagenProducto,precioProducto,descripcionProducto,botonAñadir,contenedorIconClose);
    contenedorModal.appendChild(contenidoModal);
    contenedorPrincipal.appendChild(contenedorModal);

    //Eventos de escucha
    contenedorIconClose.addEventListener('click', cerrarModal)
    botonAñadir.addEventListener('click', () => addProductsShoppingCart (imagen,nombre,precio));
    
}



// Templeate para crear el modal
{/* <div id="modal" class="modal">
<div class="modal-contenido">
    <!-- Botón para cerrar el modal -->
    <button id="cerrarModal" class="modal-cerrar">X</button>

    <!-- Contenido del producto -->
    <h2>Nombre del Producto</h2>
    <img src="imagen-del-producto.jpg" alt="Imagen del Producto">
    <p>$XX.XX</p>
    <p>Descripción del producto...</p>

    <!-- Botón para añadir al carrito -->
    <button id="agregarAlCarrito">Añadir al Carrito</button>
</div>
</div> */}

function cerrarModal () {
    const contenedorPrincipal = document.querySelector('.seccionProductos')
    const contenedorModal = document.querySelector('.modal')
    contenedorPrincipal.removeChild(contenedorModal)
}