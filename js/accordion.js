//***********************************************
//Accordion plus icon change to minus
//when the user clicks on that collapse panel
//**********************************************
//document ready (i.e. page loaded)
$(document).ready(function() {

  //Changes plus and minus icon on accordions 
  $(function() {
    //when accordion is opened
    $('.collapse').on('shown.bs.collapse','' ,function (e) {
      //get opened div id
      var panelId = "#" + e.currentTarget.id;
      //select panel-title, add open to it
      $(panelId).parent().children().children().toggleClass("open");
    });
  }); //end of open function

  //similar to function above except when accordion panel is closed
  $(function() {
    $('.collapse').on('hidden.bs.collapse','' ,function (e) {
      var panelId = "#" + e.currentTarget.id;
      $(panelId).parent().children().children().toggleClass("open");

    });
  }); //end of hidden function
});
