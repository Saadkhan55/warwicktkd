//***********************************************
// Contact.js
//
// Validates form fields in the contact.php
// only 3 which are all required,
// first gets the values from the fields if 
// are empty adds an error class, 
// waits for user to submit
//**********************************************
$(document).ready(function() {
  $(".submit").click(function(e) {
    //get value from form fields
    var name = $("#fname").val();
    var email = $("#email").val();
    var message = $("#message").val();

    //r emove all error classes before checking again, 
    // the class will be added again if empty
    $("#fname").removeClass("error");
    $("#email").removeClass("error");
    $("#message").removeClass("error");

    //check for emptyiness from all 3 fields
    if(name == "") {
      //give class error
      $("#fname").addClass("error");
      //change placeholder text
      $("#fname").attr("placeholder", "Name is required");
      //prevent default submit if error
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
