var $allp = document.querySelectorAll("#etiquetaP")

for(var i = 0; i < $allp.length; i++){
    $allp[i].addEventListener("click",function(){
        this.classList.add("resaltado")
        $allp.classList.toggle("resaltado")
    })
}