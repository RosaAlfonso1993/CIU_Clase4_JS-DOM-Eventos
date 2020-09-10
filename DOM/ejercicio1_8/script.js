//Ahora crea la clase .square en tu stylesheet, y dale las mismas propiedades
var $div = document.querySelector("div")
$div.classList.add("square")

//Haz una función que cada un segundo (setInterval()) se fije si tiene la clase square, si la tiene que se la quite, y si no la tiene la agregue.
//setInterval(function(){$div.classList.toggle("square")})


//SHUFLLE
var $divSource = document.querySelector("#source")


var $divDestination = document.querySelector("#destination") 

$divDestination.textContent = $divSource.innerHTML


//Intercambiar texto entre swaps
var $swap_1 = document.querySelector("#swap_1")
var alternativa = $swap_1.innerHTML

var $swap_2 = document.querySelector("#swap_2")
$swap_1.textContent = $swap_2.innerHTML
$swap_2.textContent = alternativa