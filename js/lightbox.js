$(document).ready(function() {
  //on click of a gallery object
  $('.gallery-set .gallery').click(function(e) {
      e.preventDefault();
      //get image src
      var image_src = $(this).find("img").attr("src");
      //append this image to lightbox
      $('#content').append('<img src="' + image_src + '" /> ');
      $('#content').append('<i class="fa fa-chevron-right"></i>');
      $('#content').append('<i class="fa fa-chevron-left"></i>');
      //show lightbox
      $('#lightbox').fadeIn("500");

      //array to store all images inside gallery-set
      var images = [];
      //store this as this
      var $this = $(this);
      //get each img inside gallery-set
      $this.parents(".gallery-set").find('img').each(function() {
        images.push($(this).attr("src"));
      });

      //on click of right button
      $('.fa-chevron-right').on('click' ,function(ev) {
        //stop event propoagation -> and closing lightbox
        ev.stopPropagation();
        //get index of current image
        var index = getIndex(images, image_src);

        //if index is at last picture wrap around to first
        if(index == images.length - 1) {
          index = 0;
        }
        else {
          index++;
        }

      //remove child
      $("#content").children("img").remove();
      $('#content').append('<img class="animated bounceInRight delay-1" src="' + images[index] + '" /> ');
      //change image src to new image
      image_src = images[index];

      });
      
      //on click of left button
      $('.fa-chevron-left').on('click' ,function(ev) {
        //stop event propoagation -> and closing lightbox
        ev.stopPropagation();
        //get index of current image
        var index = getIndex(images, image_src);

        //if index is at first picture wrap around to last
        if(index == 0) {
          index = images.length - 1;
        }
        else {
          index--;
        }

      //remove child
      $("#content").children("img").remove();
      $('#content').append('<img class="animated bounceInRight delay-1" src="' + images[index] + '" /> ');
      //change image src to new image
      image_src = images[index];
      });
  });

  //click anywhere to close lightbox
  $('#lightbox').on('click', function() {
    $('#lightbox').hide();
    $('#content').empty();
  });

  //returns the index of currentImage inside array which is images
  function getIndex(images, currentImage) {
    var index;
    //for every value
    for(index = 0; index < images.length;++index) {
      //if current images 
      if(images[index] == currentImage) {
        //return index number
        return index;
      }
    }
    return -1;
  }
});
