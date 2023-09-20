
//Creacion dinamica Galeria productos Home
export function productRender(array) {
    
    for (const product of array){

        //Crear elementos
        const productCard = document.createElement('div');
        const productImage = document.createElement('img');
        const productInfo = document.createElement('div');
        const productInfoDiv = document.createElement('div');
        const productPriece = document.createElement('p');
        const productName = document.createElement('p');
        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        
        //Estilizar elementos
        productCard.classList.add('product-card');
        productInfo.classList.add('product-info');
        productImage.setAttribute('src', product.image)
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg')
        
        //Dar el contenido a los elementos
        productPriece.textContent = `${product.precio},00`;
        productName.textContent = product.nombre;
        
        //Estructurar HTML
        productInfoDiv.append(productPriece, productName);
        productFigure.appendChild(productImgCard);
        productInfo.append(productInfoDiv, productFigure)
        productCard.append(productImage, productInfo);
        galleryProducts.appendChild(productCard);
        
        //Eventos de escucha
        productImage.addEventListener('click', () => createProductDetailAside (product.precio,product.nombre,'descripcion',product.image));
        productImgCard.addEventListener('click', addProductsShoppingCart)
    }   
}

