var $body = document.querySelector("body")

/*document.querySelector("button").addEventListener("click",function(){
    $body.insertAdjacentHTML("beforeend", "<p>BEEP</p>")
    $body.classList.toggle("color")
})*/ 


var boton = document.querySelector("button")
var seEjecutaEnEvento = function(){
    $body.insertAdjacentHTML("beforeend", "<p>BEEP</p>")
    $body.classList.toggle("color")
}
boton.addEventListener("click",seEjecutaEnEvento)