//***********************************************
// team.js Changes exec team shown when 
// user clicks on different year. For example
// 2014 exec is hiddem until user clicks on it
//**********************************************
$(document).ready(function() {
  //on pagination click
  $(".pagination-css").click(function(e) {
    e.preventDefault();

    //remove active class from all paginations except the 
    //one the user clicked
    $(".pagination").children("li").removeClass("active");
    $(this).parent("li").addClass("active");

    //get id of clicked pagination
    var id = $(this).attr("id");

    //for each exec team
    $(".new-exec").each(function(e) {

      //get year for this team
      var teamYear = $(this).attr("id");

      //if year matches the year the user clicked
      //show that group
      if(id == teamYear) {
        $(this).removeClass("hidden");
      }
      //else hide this exec group
      else {
        $(this).addClass("hidden");
      }
    });
  
  });
});
