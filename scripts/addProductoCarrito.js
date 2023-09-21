const contendorProductosAgregados = document.querySelector('.list')
const totalProductos = document.querySelectorAll('.total')
const totalCompra = document.querySelector('#totalCompra')

let productosEnCarrito = 0;
let precioTotal = 0;


export function addProductsShoppingCart(imagen,nombre,precio) {
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('contenedor__items-carrito');

    newDiv.innerHTML = `
        <img src= "${imagen}"/>
        <div class="item__carrito-info">
            <p class="item__carrito-nombre">${nombre}</p>
            <p class="item__carrito-precio">$ ${precio}</p>
        </div>
        <button Class="buttonEliminar">Eliminar</button>
    `;
    // Agregar el nuevo div al contenedor de productos agregados
    contendorProductosAgregados.appendChild(newDiv);
    productosEnCarrito ++;

    // Actualizar el total de productos en el carrito
    for (const elemento of totalProductos) {
        elemento.innerText = productosEnCarrito;
    }

    // Agregar el evento para eliminar el producto del carrito
    const botonEliminar = newDiv.querySelector('button');
    botonEliminar.addEventListener('click', eliminarProducto);

    // Agregar el precio del producto al precio total
    precioTotal += precio;
    totalCompra.innerText = precioTotal;

}

function eliminarProducto(){
    // Eliminar el producto del carrito
    this.parentElement.remove();
    productosEnCarrito --;

    // Actualizar el total de productos en el carrito
    for (const elemento of totalProductos) {
        elemento.innerText = productosEnCarrito;
    }

    // Actualizar el precio total
    const precioProducto = this.parentElement.querySelector('.item__carrito-precio').innerText;
    precioTotal -= precioProducto;
    totalCompra.innerText = precioTotal;
    
}