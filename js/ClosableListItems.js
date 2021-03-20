$(document).ready(function() {
    $(".cross").click(function() {
        // console.log(this);
        // console.log($(this).parents);
        $(this).parents(".close-div").fadeOut();
    });
});