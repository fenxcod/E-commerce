let productsPage = document.querySelectorAll('.cart-btn');

let products = [

    {
        name: "aguacatito",
        tag: "peluche verde",
        price: 140,
        incart: 0
    },

    {
        name: "cerdito",
        tag: "cochinito rosa con corazon",
        price: 140,
        incart: 0
    },

    {
        name: "changuito",
        tag: "peluche de changuito",
        price: 140,
        incart: 0
    },

    {
        name: "",
        tag: "",
        price: 119,
        incart: 0
    },

    {
        name: "chihuahua",
        tag: "perrito de peluche",
        price: 75,
        incart: 0
    },

    {
        name: "conejita",
        tag: "conejita de peluche",
        price: 230,
        incart: 0
    },

    {
        name: "triceratops",
        tag: "dinosaurio",
        price: 100,
        incart: 0
    },

    {
        name: "tirannosaurio rex",
        tag: "dinosaurio",
        price: 110,
        incart: 0
    },

    {
        name: "dino azul",
        tag: "dinosaurio de color azul",
        price: 120,
        incart: 0
    },

    {
        name: "pardo escandalozo",
        tag: "peluche de la serie escandalozos",
        price: 140,
        incart: 0
    },
]
for (let i = 0; i < productsPage.length; i++) {
    productsPage[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })


}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(product);
}

function setItem(product) {
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("ProductsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    console.log("products price is", product.price);
    console.log("working");

    let cartCost = localStorage.getItem('totalCost');
    console.log("my cartcost is", cartCost);



    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems)
    let productContainer = document.querySelector('products-container');
    let cartCost = localStorage.getItem('totalCost');


    if(cartItems && productContainer){
        productContainer.innerHTML = '';

        Object.values(cartItems).map(item => {productContainer.innerHTML += ` 
        <div class="products">
        <ion-icon name="close-circle"><ion-icon>
        <img src="../img/${item.tag}.jpg">
        <span>${item.name}</span>
        </div>
        <div class ="price">${item.price},00</div>
        <div class ="quantity">
        <ion-icon class = "decrease" name = "arrow-dropleft-circle"></ion-icon><span>${item.incart}</span><ion-icon class="increase" name ="arrow-dropright-circle"></ion-icon></div>
        <div class="total">
        ${item.incart * item.price},00
        </div>
        `
        });

        productContainer.innerHTML += `
     <div class="baskerTotalContainer">
     <h4 class="baskerTotalTitle">
     Basket Total
     </h4>
     <h4 class = "baskerTotal">
     R${cartCost},00
     </h4>
     `;

    }
}
onLoadCartNumbers();
displayCart();