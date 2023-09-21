const contendorProductosAgregados = document.querySelector('.list')

export function addProductsShoppingCart(imagen,nombre,precio) {
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('contenedor__items-carrito');

    newDiv.innerHTML = `
        <img src= "${imagen}"/>
        <div class="item__carrito-info">
            <p class="item__carrito-nombre">${nombre}</p>
            <p class="item__carrito-precio">${precio}</p>
        </div>
        <button>Add</button>
    `;

    contendorProductosAgregados.appendChild(newDiv);

}