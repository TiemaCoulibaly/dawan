//const URL = "https://fakestoreapi.com/products";

fetch("https://fakestoreapi.com/products")
	.then((response) => response.json())
	.then((data) => {
		data.map((product) => {
			let titleCard = document.querySelector(".card>h2");
			console.log("====================================");
			console.log(product.category);
			console.log("====================================");
		});
	});

/**--------------------------------CORRECTION
   * const URL = "https://fakestoreapi.com/products";

let PRODUCTS = [];
let cartProducts = []

fetch(URL)
.then(reponse => reponse.json())
.then(products=> {
    PRODUCTS = products;
    addProductToDom(PRODUCTS);
}); 


function createCard(produit) {

        let cardDivElt = document.createElement('div');
        let cardImgContainerElt = document.createElement('div');
        let cardImgElt = document.createElement('img');
        let nameTitleElt = document.createElement('h2');
        let priceElt = document.createElement('p');
        let moreInfosDivElt = document.createElement('div');
        let descriptionElt = document.createElement('p');
        let addCardIcon = document.createElement('i');

        cardImgElt.src = 'https://via.placeholder.com/250x150';
        nameTitleElt.textContent = produit.title;
        priceElt.textContent = `${produit.price}\u20ac` ;

        descriptionElt.textContent = produit.description;
        
        cardDivElt.classList.add("card");
        moreInfosDivElt.classList.add("more-infos");
        addCardIcon.classList.add("fas", "fa-cart-plus");
        cardImgContainerElt.classList.add("item-img-container")

     
        addCardIcon.addEventListener("click", function() {
            const cardProduct = {
                produit,
                quantity: 1
            }

            let cartElt = document.querySelector('.cart span');
            let totalQuantity = 0;

            cartProducts.forEach(function (item) {
                if (item.produit === produit) {
                    // debugger
                    cardProduct.quantity += item.quantity
                }
            });
            if (cardProduct.quantity > 1 ) {
                const index = cartProducts.findIndex(item => item.produit == produit);
                // debugger
                cartProducts[index].quantity = cardProduct.quantity;
            } else {
                cartProducts.push(cardProduct);
            }

            cartProducts.forEach(function (item) {
                totalQuantity += item.quantity
            });
            cartElt.textContent = totalQuantity; 

        });

        cardImgContainerElt.appendChild(cardImgElt);
        cardDivElt.appendChild(cardImgContainerElt);
        cardDivElt.appendChild(nameTitleElt);
        cardDivElt.appendChild(priceElt);
        moreInfosDivElt.appendChild(descriptionElt);
        moreInfosDivElt.appendChild(addCardIcon);
        cardDivElt.appendChild(moreInfosDivElt);

        return cardDivElt;
}

function addProductToDom(produits) {
    let cardsElt = document.querySelector('.cards');
    cardsElt.innerHTML = '';
    const productsElt = produits.map(createCard);
    productsElt.forEach(produitElt => {
        cardsElt.appendChild(produitElt)
    })
}



function filterProductPrice(event, maxPrice) {
    let filteredProducts = [];
    filteredProducts = PRODUCTS.filter(produit => produit.price < maxPrice)
    addProductToDom(filteredProducts);
}

function filterByName(event) {
    const nomDuProduit = event.target.value.toLowerCase();
    let filteredProducts = [];
    filteredProducts = PRODUCTS.filter(produit => {
        return produit.title.toLowerCase().includes(nomDuProduit);
    })
    addProductToDom(filteredProducts);
}

function toggleSideNav() {
    let sideNavElt = document.querySelector('.side-nav');
    sideNavElt.classList.toggle('open-sidenav');
    let itemsElts = document.querySelector('.side-nav .items');
    itemsElts.innerHTML = '';
    let productsElts = cartProducts.map(createSideNavProduct);
    productsElts.forEach( function(productElt) {
        itemsElts.appendChild(productElt);
    })
}

function createSideNavProduct(item) {
    const itemElt = document.createElement('div');
    const itemImgContainerElt = document.createElement('div');
    const itemImgElt = document.createElement('img');
    const nameProductElt = document.createElement('p');
    const priceProductElt = document.createElement('p');
    const qtyProductElt = document.createElement('p');
    const deleteProductElt = document.createElement('p');
    const deleteProductIconElt = document.createElement('i');

    itemImgElt.src = 'https://via.placeholder.com/50x50';

    nameProductElt.textContent = item.produit.title;
    priceProductElt.textContent = `${item.produit.price * item.quantity} \u20ac`;
    qtyProductElt.textContent = item.quantity;

    // <div class="card"></div>
    deleteProductIconElt.classList.add('fas');
    deleteProductIconElt.classList.add('fa-trash');
    itemImgContainerElt.classList.add("item-img-container")

    deleteProductIconElt.addEventListener("click", function() {
        console.log("Remove");
        // debugger
        index = cartProducts.findIndex(p => p.produit.id == item.produit.id)
        cartProducts.splice(index, 1);

        let itemsElts = document.querySelector('.side-nav .items');
        itemsElts.innerHTML = '';
        let productsElts = cartProducts.map(createSideNavProduct);
        productsElts.forEach( function(productElt) {
            itemsElts.appendChild(productElt);
        })
    });

    itemElt.classList.add('item');
    
    deleteProductElt.appendChild(deleteProductIconElt);
    itemImgContainerElt.appendChild(itemImgElt)
    itemElt.appendChild(itemImgContainerElt);
    itemElt.appendChild(nameProductElt);
    itemElt.appendChild(priceProductElt);
    itemElt.appendChild(qtyProductElt);
    itemElt.appendChild(deleteProductElt);

    return itemElt;
}
   */
