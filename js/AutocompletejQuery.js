$(document).ready(function() {
    $("li").click(function() {
        // alert(this.textContent);
        input.value = this.textContent;
    });
});