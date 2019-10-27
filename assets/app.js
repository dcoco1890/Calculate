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

  function opPress (val) {
    // create new element, add num txt to it
    keyedOpButton = true;
    let otherNum = $ ("<div class='o-nums'>");
    otherNum.text (num + ' ' + val);

    // add current num to top div
    $second.append (otherNum);
    // create evaluation string for later
    evalStr += num + val;
    console.log (evalStr);
  }

  function evaluate () {
    // show the evaluation string (all nums with signs plus equals at the end)
    // in the 'otherNums' area
    let newp = $ ("<div class='o-nums'>");

    // creating new evaluation string before we take 'num'
    // and stick it up top with an equals sign
    evalStr += num;

    // num now equals what it was before plus an equal sign so the user
    // can see a nice pretty string
    num += ' ' + '=';
    newp.text (num);
    $second.append (newp);
    console.log (eval (evalStr)); // should work
  }
});
