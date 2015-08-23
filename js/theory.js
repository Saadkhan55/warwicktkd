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
  $(".btn-primary").click(function() {
    //if button has text show
    if($(this).html() == "Hide") {
      //change hide second table
      $(this).html("Show");
      $(".theory tr :nth-child(2)").fadeOut("500");
    }
    else {
      //else do opposite
      $(this).html("Hide");
      $(".theory tr :nth-child(2)").fadeIn("1000");
    }
  });
});

