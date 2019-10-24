$(document).ready(function() {

    $(".body-container").on('click', function(){
        if($(".body-container").css("background-color") == 'rgb(211, 211, 211)'){
            $(".body-container").css("background-color", "blue");
        }
    });

});