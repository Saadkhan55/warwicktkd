//This script changes pages without need to refesh i.e. instead of using php uses AJAX. 
$(document).ready(function() {
  //on click of a pagination link
  $(".pagination li").click(function(e) { 
    //remove current active class and give it to newly
    //clicked link
    $(".pagination .active").removeClass("active");
    $(this).addClass("active");

    //stop default action (i.e. link to another page), otherwise page
    //will refresh so pointless
    e.preventDefault();
    var number = 1;
    var test1 = 2;


    $.ajax({ 
      url: "ajax_news.php", 
      type: "post",
      data: {
        "number": number,
        "test1": test1
      },
      success: function (data) {
         console.log("TEST");
      }
    });
  });
});
