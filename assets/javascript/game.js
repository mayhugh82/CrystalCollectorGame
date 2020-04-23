//used crystal example and lottery generator for blueprint

$(document).ready(function () {
  // target random number between 19 -120
  let random = Math.floor(Math.random() * 101) + 19;
  $(".target-number").html(random);

 //player's wins and losses
  let wins = 0;
  let losses = 0;

  //points player has during the game
  let points = 0;
  $('.points').html(points);
  

  // var randomGem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // var increment = randomGem[Math.round(Math.random())];

  // // Here we created an on-click event that responds to button clicks of the crystal image.
  // $("#blue").on("click", function () {
  //   //each time the user clicks the blue crystal the counter goes up by 1.
  //   counter ++ increment;

  //   // Clicking the button triggers an alert message.
  //   alert("Your new score is " + counter);
  // });

  // $("#red").on("click", function () {
  //   //each time the user clicks the blue crystal the counter goes up by 1.
  //   counter += increment;

  //   // Clicking the button triggers an alert message.
  //   alert("Your new score is " + counter);
  // });

  // $("#green").on("click", function () {
  //   //each time the user clicks the blue crystal the counter goes up by 1.
  //   counter += increment;

  //   // Clicking the button triggers an alert message.
  //   alert("Your new score is " + counter);
  // });

  // $("#yellow").on("click", function () {
  //   //each time the user clicks the blue crystal the counter goes up by 1.
  //   counter += increment;

  //   // Clicking the button triggers an alert message.
  //   alert("Your new score is " + counter);
  // });

  // $(".target-number").ready(function () {
  //   // Create a string which will hold the target or starting number
  //   var targetNumber = "";

  //   var random = Math.floor(Math.random() * 101) + 19;

  //   $(".target-number").html(random);
  // });
});
