$(document).ready(function() {

    $(".body-container").on('click', function(){
        if($(".body-container").css("background-color") == 'rgb(211, 211, 211)'){
            $(".body-container").css("background-color", "blue");
        }
    });

    $("#alo-button").on('click', function(){
        let url = 'https://jsonplaceholder.typicode.com/posts';
        $.ajax({
            url: url,
            type: 'GET',
            //data: ,
            //dataType: ,
            success: function(result){
                let r = $("<div>");
                r.addClass('alo-result');
                r.attr('id', 'alo-result');
                r.css('height', '50');
                r.css('background-color', 'green');
                //r.append(JSON.stringify(result));
                $(".body-container").append(r);
            },
            error: function(error){
                console.log('error ${error}');
            }
        });
    });

});