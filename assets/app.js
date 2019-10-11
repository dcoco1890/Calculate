$(document).ready(function () {
    
    // declaring things
    const $button = $(".button");
    const $answer = $("#main");
    const $second = $("#other");
    let type = "";
    let numArr = [];
    let opArr = [];
    let opPress = false;
    let num = "";

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
        

        
        

        if(opPress){
            $answer.text("");
            $second.text(num)
            opPress = false;
            num = "";
        }

       
        if(type === "num" ){

            num = $answer.text();
            num += value;
            $answer.text(num)
        // if the type is operator, push num into array
        } else if(type === "op"){

            opPress = true;
            if(num !== ""){
                numArr.push(Number(num));
            }
            console.log(numArr);
            
        } else{
            //  clear all values
            if(value === "AC"){
                numArr = [];
                $answer.text("");
                $second.text("");
            }
        }

    }

});