$(document).ready(function () {
    

    const $button = $(".button");
    let type = "";
    $button.on("click", function(){
        
        if($(this).hasClass("num")){
            type = "num"
        } else if($(this).hasClass("op")){
            type = "op"
        } else {
            type = "sign"
        }
        
        buttonPress($(this).children().text(), type)
    });
    
    function buttonPress(value, type){
        console.log(type);
        // switch(value){
        //     case 
        // }
    }

});