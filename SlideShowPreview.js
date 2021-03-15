var slides = document.getElementsByClassName("slides");

var prevSlideImage = 0;
slides[0].style.display = "block";
function showImage(n) {
    // var displaySlide = (n-1) % slides.length;
    slides[prevSlideImage].style.display = "none";
    slides[n-1].style.display = "block";
    prevSlideImage = n-1;   
}