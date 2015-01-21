$(document).ready(function() {
  $('.gallery-set .gallery').click(function(e) {
      e.preventDefault();
      //Get location of picture in project directory
      var image_src = $(this).find("img").attr("src");
      
      //add this picture to the lightbox, (inside content)
      $('#content').append('<img src="' + image_src + '" /> ');
      //show lightbox div
      $('#lightbox').fadeIn("500");
  });
  
  //click anywhere to close lightbox
  $("#lightbox").live("click", function()  {
    $("#lightbox").hide();
  });
});
