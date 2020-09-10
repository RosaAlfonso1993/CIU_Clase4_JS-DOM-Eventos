var $boton = document.querySelector("button")
var $borrar = document.querySelector(".salir")
var $texto = document.querySelector("input")
var $body = document.querySelector("body")

$texto.addEventListener('keydown', function (e) { 
    this.textContent = this.value + String.fromCharCode(e.keyCode) })


$boton.addEventListener("click",function(){
    //¿porque la ultima letra queda en mayuscula?
    console.log($texto.textContent)
    $body.style.backgroundColor = $texto.textContent
})

$borrar.addEventListener("click",function(){
    $body.style.backgroundColor = "whitE"
})