//***********************************************
// Accordion.js Changes icon next to accordion
// when closed shows a minus, when opened by a 
// user click it shows a plus.
// Only one accordion can be opened at one
//**********************************************
$(document).ready(function() {

  $(function() {
    //when accordion is opened
    $('.collapse').on('shown.bs.collapse','' ,function (e) {
      //get opened div id (is unique)
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
