$(document).ready(function() {
  $('.gallery-set .gallery').click(function(e) {
      e.preventDefault();
      var image_src = $(this).find("img").attr("src");
      console.log(image_src);
      $('#content').append('<img src="' + image_src + '" /> ');
      $('#lightbox').fadeIn("500");
  });
});
