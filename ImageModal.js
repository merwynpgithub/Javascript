var modal = document.getElementById("modal");
var modalImage = document.querySelector(".modal-container");
var body = document.querySelector("body");
var modalClose = document.querySelector(".modal-close");

function expandModalImage() {
    // alert("Hi modal");
    modalImage.style.display = "block";
    body.style.backgroundColor = "rgb(157, 143, 143)";
    body.style.opacity = "0.3";
    modalClose.style.display = "block";
}
function closeModalImage() {
    modalImage.style.display = "none";
    body.style.backgroundColor = "";
    body.style.opacity = "1";
}

modal.addEventListener("click", expandModalImage);
modalClose.addEventListener("click", closeModalImage);