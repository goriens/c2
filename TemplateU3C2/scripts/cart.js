let cart = localStorage.getItem("cart");
if(!cart){
    cart =[];
    localStorage.setItem("cart", JSON.stringify(cart));
}
else{
    cart = JSON.parse(cart);
}

let total = cart.reduce(function (acc, curr){
    return Number(acc) + Number(curr.price);
},0);
console.log(total);


let container = document.querySelector("#cart");
//let proCard = document.createElement("div");
//
//let image = document.createElement("img");
//image.src = prod.strMealThumb;
//
//let title = document.createElement("p");
//title.textContent = prod.strMeal;
//
//proCard.append(image, title , price, addToCartButton);
//container.append(proCard);

cart.forEach(function (prod){
    let proCard = document.createElement("div");
    
    let image = document.createElement("img");
    image.src = prod.strMealThumb;

    let title = document.createElement("p");
    title.textContent = prod.strMeal;

    let price = document.createElement("h2")
    price.textContent = `${(Math.floor(Math.random()*500))} $`;

    let remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.onclick = function(event){
        removeItem(prod);
        
    };
    function removeItem(index){
        cart.splice(index,1);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    proCard.append(image, title , price, remove);
    container.append(proCard);
});

function totalDisplay(total){
    let totalDisplay = document.querySelector("#total");
    totalDisplay.textContent = total;
}
totalDisplay(total);