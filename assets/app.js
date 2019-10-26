$ (document).ready (function () {
  // declaring things
  const $button = $ ('.button');
  const $answer = $ ('#main');
  const $second = $ ('#otherNums');
  let evalStr = '';
  let numArr = [];
  let opArr = [];
  let keyedOpButton = false;
  let keyedEquals = false;
  let num = '';
  let valid = $ ('#validation');

  // makes the buttons a lil' bigger when you hover
  $button
    .mouseover (function () {
      $ (this).toggleClass ('button-click');
    })
    .mouseout (function () {
      $ (this).toggleClass ('button-click');
    });

  //button click method
  $button.on ('click', function () {
    // $answer.children().text()
    if ($ (this).hasClass ('num')) {
      numPress ($ (this).data ('num'));
    } else if ($ (this).hasClass ('op')) {
      if ($ (this).data ('op') === '=') {
        keyedEquals = true;
        evaluate ();
      } else {
        opPress ($ (this).data ('op'));
      }
    } else if ($ (this).data ('clear') === 'yes') {
      $answer.text ('');
      $second.text ('');
      evalStr = '';
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
  function numPress (val) {
    // if you've pressed the operator, clear the "main" number
    if (keyedOpButton) {
      $answer.text ('');
      keyedOpButton = false;
    }

    // making sure the number isnt longer than 6 digits, and also sending
    // the other numbers to the other div up top
    let x = $answer.text ().length;
    if (x > 6) {
      valid.text ("Number too big. Why don't you try doing something with it?");
    } else {
      valid.text ('');
      num = $answer.text ();
      num += val;
      $answer.text (num);
    }
  }

  // operator press function
  function opPress (val) {
    keyedOpButton = true;
    // create new element, add num txt to it
    let otherNum = $ ("<div class='o-nums'>");
    otherNum.text (num + ' ' + val);

    // add current num to top div
    $second.append (otherNum);

    evalStr += num + ' ' + val; //only will do 2 numbers, i think
    console.log (evalStr);
  }

  function evaluate () {
    // same as opPress, DRY later
    let newp = $ ("<div class='o-nums'>");
    newp.text (num);
    $second.append (newp);
    console.log (evalStr);
  }
});
