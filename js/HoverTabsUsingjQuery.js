$(document).ready(function() {
    $(".city").hover(function() {
        // alert("hi");
        $(this).next(".city-info").toggleClass("visible");
    });
});