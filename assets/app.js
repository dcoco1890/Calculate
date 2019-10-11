$(document).ready(function () {
    
    const $button = $(".button");
    $button.on("click", function(){
        buttonPress($(this).children().text())
    });
    
    function buttonPress(value){
        console.log(value)
    }

});