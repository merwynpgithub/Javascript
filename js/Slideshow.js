var slide = document.getElementsByClassName("slide");
// console.log(slide.length);
var n = 0;
slide[n].style.display = "block"
function plusSlides() {
    n++;
    slide[n].style.display = "block";
    if (n > slide.length - 1) {
        n = 0;
    }    
}

function minusSlides() {
    n--;
    if (n < 0) {
        n = slide.length - 1;
    }    
    slide[n].style.display = "block"
}