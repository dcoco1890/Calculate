$(document).ready(function () {
    
    // declaring things
    const $button = $(".button");
    const $answer = $("#numAnswer");
    let type = "";
    let numArr = [];
    let opPress = false;

    //button click method
    $button.on("click", function(){

        // $answer.children().text()
        if($(this).hasClass("num")){
            type = "num"
        } else if($(this).hasClass("op")){
            type = "op"
        } else {
            type = "sign"
        }
        // sending the value of the button, and what kind it is, to this 
        // button press function
        buttonPress($(this).children().text(), type)
    });
    
    function buttonPress(value, type){
        console.log(type, value); // just for me
        // console.log($answer.children().text())
        let num = $answer.children().text();

        if(type === "num" && !opPress){
            num += value;
            $answer.children().text(num)
        }

    }

});