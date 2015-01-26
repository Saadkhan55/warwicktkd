//This js files gets the page url following the host i.e. index.php
//and works out which navbar element should have the active class, 
//thus changing color

//wait for document to load/page to get ready
$(document).ready(function() {
  //get page name (current), uses regex to match
  var pageName = $(document).find("title").text();

  //for each case work out which navbar element to add class active to
  switch (pageName) {
    case "Home Page" :
      $(".home").addClass("active");
      break;

    case "News" :
      $(".news").addClass("active");
      break;

    case "Gallery" :
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
      break;

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

    case "Contact Us" :
      $(".contact").addClass("active");
      break;
  }
});
