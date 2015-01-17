//Validates form fields
//and checks if they're empty
$(document).ready(function() {
  $(".submit").click(function(e) {
    
    //get value from form fields
    var name = $("#fname").val();
    var email = $("#email").val();
    var message = $("#message").val();

    //remove all error classes before checking again
    $("#fname").removeClass("error");
    $("#email").removeClass("error");
    $("#message").removeClass("error");

    if(name == "") {
      $("#fname").addClass("error");
      $("#fname").attr("placeholder", "Name is required");
      e.preventDefault();
    }

    if(email == "") {
      $("#email").addClass("error");
      $("#email").attr("placeholder", "Email is required");
      e.preventDefault();
    }

    if(message == "") {
      $("#message").addClass("error");
      $("#message").attr("placeholder", "Message is required");
      e.preventDefault();
    }
  
  });
});
