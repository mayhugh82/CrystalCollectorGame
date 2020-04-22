//copied from crystal example for blueprint

//counter used to track the user's total
let counter = 0;
// Here we created an on-click event that responds to button clicks of the crystal image.
$("#blue").on("click", function() {

  //each time the user clicks the blue crystal the counter goes up by 1.
  counter += 1;

    // Clicking the button triggers an alert message.
    alert("You clicked a crystal " + counter + " times!");

  });