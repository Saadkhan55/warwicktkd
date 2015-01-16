//This js files gets the page url following the host i.e. index.php
//and works out which navbar element should have the active class, 
//thus changing color

//wait for document to load/page to get ready
$(document).ready(function() {
  //get page name (current), uses regex to match
  var pageName = document.location.pathname.match(/\/|[^\/]+$/ig)[0];

  //for each case work out which navbar element to add class active to
  switch (pageName) {
    case "/" :
      $(".home").addClass("active");
      break;

    case "index.php" :
      $(".home").addClass("active");
      break;

    case "news.php" :
      $(".news").addClass("active");
      break;

    case "about.php" :
      $(".about").addClass("active");
      break;

    case "beginners.php" :
      $(".about").addClass("active");
      break;

    case "training.php" :
      $(".about").addClass("active");
      break;

    case "team.php" :
      $(".about").addClass("active");
      break;

    case "contact.php" :
      $(".contact").addClass("active");
      break;
  }
});
