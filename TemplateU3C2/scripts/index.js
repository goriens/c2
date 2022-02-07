let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`;
//console.log(url)
let container = document.querySelector("#menu");

async function getProducts(){
    try{
        let productList = await fetchProducts(url);
        //console.log(productList);
        renderProducts(productList.meals);
    }catch(error){
        console.log(error);
    }
}
getProducts();

let cart = localStorage.getItem("cart");
if(!cart){
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    refreshCartCount(cart);
}
else{
    cart = JSON.parse(cart);
    refreshCartCount(cart);
}

function refreshCartCount(cart){
    let cartCount = document.querySelector("#count");
    cartCount.textContent = `Count ${cart.length}`;
}

function fetchProducts(url){
    return fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function (res){
        return res;
    })
    .catch(function (err){
        console.log(err);
    });
}

function renderProducts (products){
    let container = document.querySelector("#menu");
    container.innerHTML = "";
    console.log(products);
    //console.log("hii")
    
    products.forEach(function (prod){
        let proCard = document.createElement("div");

        let image = document.createElement("img");
        image.src = prod.strMealThumb;

        let title = document.createElement("p");
        title.textContent = prod.strMeal;

        let price = document.createElement("p")
        price.textContent = `${(Math.floor(Math.random()*500))} $`;

        let addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add To Cart";
        addToCartButton.onclick = function(event){
            //console.log(prod.strMeal);
            addToCart(prod);
        };
        function addToCart(prod){
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.push(prod);
            localStorage.setItem("cart", JSON.stringify(cart));
            refreshCartCount(cart);

        }
        
        proCard.append(image, title , price, addToCartButton);
        container.append(proCard);
    });
}