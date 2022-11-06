
let cart = [];

function getItem1 (){
    let nameIs = $("#product1").text();
    let priceIs = $("#product1_price").text();
    let object = {nameIs,priceIs};
    cart.push(object);

}

function getItem2(){
    let nameIs = $("#product2").text();
    let priceIs = $("#product2_price").text();
    let object = {nameIs,priceIs};
    cart.push(object);

}

function getItem3(){
    let nameIs = $("#product3").text();
    let priceIs = $("#product3_price").text();
    let object = {nameIs,priceIs};
    cart.push(object);

}

function getItem4(){
    let nameIs = $("#product4").text();
    let priceIs = $("#product4_price").text();
    let object = {nameIs,priceIs};
    cart.push(object);

}

function getItem5(){
    let nameIs = $("#product5").text();
    let priceIs = $("#product5_price").text();
    let object = {nameIs,priceIs};
    cart.push(object);

}

function getItem6(){
    let nameIs = $("#product6").text();
    let priceIs = $("#product6_price").text();
    let object = {nameIs,priceIs};
    cart.push(object);

}

function getItem7(){
    let nameIs = $("#product7").text();
    let priceIs = $("#product7_price").text();
    let object = {nameIs,priceIs};
    cart.push(object);

}

function getItem8(){
    let nameIs = $("#product8").text();
    let priceIs = $("#product8_price").text();
    let object = {nameIs,priceIs};
    cart.push(object);

}

//CARRITO

function showCart(){
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
    $("#modal").append(`<p>${cart[i].nameIs}: ${cart[i].priceIs}€</p>`);
        totalPrice += parseInt(cart[i].priceIs);
    }

    $("#modal").append(`<h4> TOTAL ${totalPrice}€</h4>`);
}





