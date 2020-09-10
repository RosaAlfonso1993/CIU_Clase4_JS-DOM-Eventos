//Show me the money
var $botonMoney = document.querySelector(".buttonMoney")
var $imagenMoney = document.querySelector(".imgMoney")
$botonMoney.addEventListener("click",function(){
    $imagenMoney.classList.toggle("oculto")
})

$imagenMoney.addEventListener("click",function(){
    this.classList.toggle("oculto")
})


var $botonMiami = document.querySelector(".buttonMiami")
var $imagenMiami = document.querySelector(".imgMiami")
$botonMiami.addEventListener("click",function(){
    $imagenMiami.classList.toggle("oculto")
})

$imagenMiami.addEventListener("click",function(){
    this.classList.toggle("oculto")
})

var $botonRicky = document.querySelector(".buttonRicky")
var $imagenRicky = document.querySelector(".imgRicky")
$botonRicky.addEventListener("click",function(){
    $imagenRicky.classList.toggle("oculto")
})

$imagenRicky.addEventListener("click",function(){
    this.classList.toggle("oculto")
})
