var $Body = document.querySelector("body")
var $imagen = document.querySelector("img")

$Body.addEventListener("click",function(infoEvento){

    var y = infoEvento.clientY
    var x = infoEvento.clientX
    $imagen.style.top = y + "px"
    $imagen.style.left = x + "px"
})


var divSecreto = document.querySelector("#magic")
var imagen = document.querySelector(".imgPatricio")

divSecreto.addEventListener("mouseenter",function(){
    imagen.style.display = "none"
})

divSecreto.addEventListener("mouseleave",function(){
    imagen.style.display = "flex"
}) 