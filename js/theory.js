//For theory pages when user clicks on hide korean button
//will give class korean-hide to table and hide korean column
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

