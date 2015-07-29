//***********************************************
// scroll.js
//
// Very simply smoothly scrolls to class/id's
// when target of anchor such as #header.
//
// Mainly used for to top button near bottom
// left of screen
// 
// Hide to top button when at top of screen
//**********************************************
$(document).ready(function(){

  $('#up').hide(); 

  $('#up').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#up').fadeIn();
    } else {
      $('#up').fadeOut();
    }
  });

});
