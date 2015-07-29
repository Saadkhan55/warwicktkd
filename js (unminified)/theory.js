//***********************************************
// theory.js
//
// Hides/shows the korean theory when the
// hide/show button is pressed.
//
// Starts of with hide and when clicked
// hide the second column of the theory
// otherwise shows the second column
//**********************************************
$(document).ready(function() {
  $(".btn").click(function() {
    //if button has text show
    if($(".btn").html() == "Hide") {
      //change hide second table
      $(".btn").html("Show");
      $(".theory tr :nth-child(2)").fadeOut("500");
    }
    else {
      //else do opposite
      $(".btn").html("Hide");
      $(".theory tr :nth-child(2)").fadeIn("1000");
    }
  });
});

