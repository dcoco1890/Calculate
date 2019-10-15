$(document).ready(function () {

    // declaring things
    const $button = $(".button");
    const $answer = $("#main");
    const $second = $("#otherNums");
    let evalStr = "";
    let numArr = [];
    let opArr = [];
    let keyedOpButton = false;
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


        } else {

        }


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

        if (keyedOpButton) {
            $answer.text("");
            keyedOpButton = false;
        }
        console.log(val);
        num = $answer.text();
        num += val;
        $answer.text(num)
    }

    // operator press function
    function opPress(val) {

        keyedOpButton = true;
        // create new element, add num txt to it
        let newp = $("<div class='o-nums'>")
        newp.text(num)

        // add current num to top div
        $second.append(newp);


        evalStr = num + ' ' + val; //only will do 2 numbers, i think
        console.log(evalStr);
    }

    // function evaluate()

});