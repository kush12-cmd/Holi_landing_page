const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky" , this.wimdow.scrolly > 0);

})

let men