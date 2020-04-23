//used crystal example and lottery generator for blueprint

$(document).ready(function() {
//counter used to track the user's total
let counter = 0;
// Here we created an on-click event that responds to button clicks of the crystal image.
$("#blue").on("click", function() {

  //each time the user clicks the blue crystal the counter goes up by 1.
  counter += 10;

    // Clicking the button triggers an alert message.
    alert("Your new score is " + counter);

  });


  $(".target-number").on("click", function() {

    // Create a string which will hold the lottery number
    var targetNumber = "";

    var random = Math.floor(Math.random() * 101) + 19;

    $(".target-number").text(random);

    });

  });











