//let form = document.querySelector("#order-form").addEventListener("submit", formFun);

function formFun (){
    let name = document.querySelector("#name").value;
    let num = document.querySelector("#num").value;
    let text = document.querySelector("#text").value;
    console.log(name, num, text);

    if(name && num && text){
        setTimeout(function (){
            alert("Your order is accepted")
        },3000)
        setTimeout(function (){
            alert("Your order is being cooked");
        },8000)
        setTimeout(function (){
            alert("Your order is ready");
        },10000)
        setTimeout(function (){
            alert("Order out for delivery ");
        },12000)
        setTimeout(function (){
            alert("Order delivered");
            window.location.href= "index.html";
        },14000)
        
    }
}