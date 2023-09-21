import { productList } from './scripts/createProductsList.js'
import { productRender } from './scripts/renderProductList.js'

// Cuerpo de la pagina
const cuerpo = document.querySelector('.cuerpo');

// Carrito de compras
const iconoCarritoCompras = document.getElementById('carritoCompras');
const carritoCompras = document.querySelector('.card');
const cerrarCarrito = document.getElementById('cerrarCarrito');

iconoCarritoCompras.addEventListener('click', () => {
    carritoCompras.classList.toggle('esconder-Elementos');
    cerrarOtroElemento();

    if(cuerpo.contains(document.querySelector('#modal'))){
        modal.remove();
    }
    
});

cerrarCarrito.addEventListener('click', () => {
    carritoCompras.classList.add('esconder-Elementos');
})

function cerrarOtroElemento() {
    cuerpo.addEventListener('click', (e) => {
        if (e.target.classList.contains('cuerpo')) {
            carritoCompras.classList.add('esconder-Elementos');
        }
    });
}

productRender(productList);