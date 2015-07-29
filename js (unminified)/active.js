//***********************************************
// Active.js
// This JS file changes the active class on the 
// navbar element (giving them a blue colour
// as a pose to black).
//
// It uses the page title to determine what page
// it is.
//**********************************************
$(document).ready(function() {
  //get page title to see which navabar element to give active
  var pageName = $(document).find("title").text();

  //use switch statement to work out what to add active to
  switch (pageName) {
    case "Home Page" :
      $(".home").addClass("active");
      break;

    case "News Page" :
      $(".news").addClass("active");
      break;

    case "Gallery" :
      $(".news").addClass("active");
      break;

    case "Calendar" :
      $(".news").addClass("active");
      break;

    case "Beginners" :
      $(".about").addClass("active");
      break;

    case "Training" :
      $(".about").addClass("active");
      break;

    case "Exec Team" :
      $(".about").addClass("active");
      break;

    case "Theory Game" :
      $(".students").addClass("active");
      break;

    case "White Belt (10th Kup)" :
      $(".students").addClass("active");
      break;

    case "Yellow Tag (9th Kup)" :
      $(".students").addClass("active");
      br;eak;

    case "Yellow Belt (8th Kup)" :
      $(".students").addClass("active");
      break;

    case "Green Tag (7th Kup)" :
      $(".students").addClass("active");
      break;

    case "Green Belt (6th Kup)" :
      $(".students").addClass("active");
      break;

    case "Blue Tag (5th Kup)" :
      $(".students").addClass("active");
      break;

    case "Blue Belt (4th Kup)" :
      $(".students").addClass("active");
      break;

    case "Red Tag (3rd Kup)" :
      $(".students").addClass("active");
      break;

    case "Red Belt (2nd Kup)" :
      $(".students").addClass("active");
      break;

    case "Black Tag (1st Kup)" :
      $(".students").addClass("active");
      break;

    case "Contact Us" :
      $(".contact").addClass("active");
      break;
  }
});
