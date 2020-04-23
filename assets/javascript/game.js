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
  $(".points").html(points);

  //and array with numbers 1-12 for each crystal to pick a random number from

  let randomGem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let blue = randomGem[Math.floor(Math.random() * randomGem.length)];
  let red = randomGem[Math.floor(Math.random() * randomGem.length)];
  let green = randomGem[Math.floor(Math.random() * randomGem.length)];
  let yellow = randomGem[Math.floor(Math.random() * randomGem.length)];

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $("#blue").on("click", function () {
    points = points + blue;
    $(".points").html(points);
    checker();
  });

  $("#red").on("click", function () {
    points = points + red;
    $(".points").html(points);
    checker();
  });

  $("#green").on("click", function () {
    points = points + green;
    $(".points").html(points);
    checker();
  });

  $("#yellow").on("click", function () {
    points = points + yellow;
    $(".points").html(points);
    checker();
  });

  // copied from psychic hw
  //this function resets the game
  function reset() {
    points = 0;
    random = Math.floor(Math.random() * 101) + 19;
    $(".target-number").html(random);
    $(".points").html(points);
  }

  // This logic determines the outcome of the game (win/loss), and increments the appropriate number
  function checker() {
    if (points === random) {
      wins++;
      $("#wins").html(wins);
      reset();
    } else {
      console.log(points, random);
      if (points > random) {
        losses++;
        $("#losses").html(losses);
        reset();
      }
    }
  }
});
