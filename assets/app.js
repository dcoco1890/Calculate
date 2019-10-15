$(document).ready(function () {

    // declaring things
    const $button = $(".button");
    const $answer = $("#main");
    const $second = $("#otherNums");
    let evalStr = "";
    let numArr = [];
    let opArr = [];

    let num = "";


    // makes the buttons a lil' bigger when you hover
    $button.mouseover(function () {
        $(this).toggleClass("button-click")
    }).mouseout(function () {
        $(this).toggleClass("button-click")
    })

    //button click method
    $button.on("click", function () {


        // $answer.children().text()
        if ($(this).hasClass("num")) {

            numPress($(this).data("num"))

        } else if ($(this).hasClass("op")) {

            opPress($(this).data("op"))

            type = "op"
        } else {
            type = "sign"
        }
        // sending the value of the button, and what kind it is, to this 
        // button press function

    });

    // function buttonPress(value, type) {
    //     console.log(type, value); // just for me


    //     if (opPress) {
    //         $answer.text("");
    //         $second.text(num)
    //         opPress = false;
    //         num = "";
    //     }

    //     if (type === "num") {


    //         // if the type is operator, push num into array
    //     } else if (type === "op") {

    //         opPress = true;
    //         if (num !== "") {
    //             numArr.push(Number(num));
    //         }
    //         console.log(numArr);

    //     } else {
    //         //  clear all values
    //         if (value === "AC") {
    //             numArr = [];
    //             $answer.text("");
    //             $second.text("");
    //         }
    //     }

    // }
    // for when a regular number gets pressed. concat nums together
    function numPress(val) {
        console.log(val);
        num = $answer.text();
        num += val;
        $answer.text(num)
    }

    function opPress(val) {

        // create new element, add num txt to it
        let newp = $("<div class='o-nums'>")
        newp.text(num)


        $second.append(newp);
        evalStr = num + '' + val; //only will do 2 numbers, i think
        console.log(evalStr);
    }

    // function evaluate()

});