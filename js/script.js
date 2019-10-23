/* $(document).ready(function() {
    $(".body-container").css("background-color", "blue");
}); */

$(".body-container").on('click', function() {
    $(".body-container").css("background-color", "red");
});

function changeBackground() {
    $(".body-container").css("background-color", "red");
    alert('a');
}