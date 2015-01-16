//For theory pages when user clicks on hide korean button
//will give class korean-hide to table and hide korean column

$(document).ready(function() {
    $(".btn").click(function() {
      //if button has text show
      if($(".btn").html() == "Show") {
        //change html to hide and toggle class korean-hide
        $(".btn").html("Hide");
        $(".theory .table").toggleClass("korean-hide");
      }
      else {
        //else do opposite
        $(".btn").html("Show");
        $(".theory .table").toggleClass("korean-hide");
      }
  });
});
