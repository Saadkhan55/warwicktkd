//***********************************************
// lightbox.js
// This works as a lightbox when an image is clicked
// on the gallery.php page. On click of an image
// will show the lightbox div, then will move 
// image inside that lightbox div (#content)
//
// All images inside gallery-set are stored in 
// an array,
//
// This used when the user clicks right/left
// chevron buttons finds the next image to display
// there is wraparound with the images.
//
// To close lightbox user simply clicks anywhere
// besides chevron buttons
//**********************************************

$(document).ready(function() {
  //on click of an image inside gallery-set
  $('.gallery-set .gallery').click(function(e) {
      //prevent default link to file
      e.preventDefault();
      //get image src for the image we just clicked on
      var image_src = $(this).find("img").attr("src");

      //append this image to lightbox
      $('#content').append('<img src="' + image_src + '" /> ');
      $('#content').append('<i class="fa fa-chevron-right"></i>');
      $('#content').append('<i class="fa fa-chevron-left"></i>');
    
      //show lightbox div, with the new image
      $('#lightbox').fadeIn("500");

      //array to store all images inside gallery-set
      var images = [];

      //store this as this
      var $this = $(this);

      //get each img inside gallery-set
      $this.parents(".gallery-set").find('img').each(function() {
        //add each image ot the array
        images.push($(this).attr("src"));
      });
      
      //click anywhere to close lightbox
      $('#lightbox').on('click', function() {
        $('#lightbox').hide();
        $('#content').empty();
      });

      //on click of right button
      $('.fa-chevron-right').on('click' ,function(ev) {
        //stop event propoagation -> and closing lightbox
        ev.stopPropagation();
        //get index of current image
        var index = getIndex(images, image_src);
        //run function get get next image
        getNext(index, 1);

      });

      //on click of left button
      $('.fa-chevron-left').on('click' ,function(ev) {
        //stop event propoagation -> and closing lightbox
        ev.stopPropagation();
        //get index of current image
        var index = getIndex(images, image_src);
        //run function to get next image
        getNext(index, 0);
      });


      //running for mobile swiping right or left and do the same as the buttons
      $(document).on('swipeleft', function() {
        var index = getIndex(images, image_src);
        getNext(index, 0);
      });

      $(document).on('swiperight', function() {
        var index = getIndex(images, image_src);
        getNext(index, 1);
      });


      //left or right navigation arrow key is pressed down
      $(document).keydown(function(e) {
        if( e.which == 37) { // left
          var index = getIndex(images, image_src)
          getNext(index, 0);
        }
        else if(e.keyCode == 39) { // right
          var index = getIndex(images, image_src)
          getNext(index, 1);
        }
      });

      //**************************************************
      // @summary: If user clicked right button, 
      // then add one to index if at max index, make it one
      // and do vice versa for left click
      // get image at this index and show in lightbox
      //
      // @param: index - index of current image being
      // show in the lightbox
      //
      // @param: right - 1 if the user clicked the right 
      // button , else 0 for left click
      //*************************************************
      function getNext(index, right) {

        //if the right button was clicked
        if(right) {

          //if index is at last picture wrap around to first
          if(index == images.length - 1) {
            index = 0;
          }
          //else increment by one to get next image
          else {
            index++;
          }
        }

        //else left button must've been clicked
        else {

          //if index is at first picture wrap around to last
          if(index == 0) {
            index = images.length - 1;
          }
          else {
            //else decrement
            index--;
          }

        }

        //remove current image, from content then add new image
        $("#content").children("img").remove();
        $('#content').append('<img class="animated bounceInRight delay-1" src="' + images[index] + '" /> ');
        //change image src to new image
        image_src = images[index];

      }
  });

  //**************************************************
  // @summary: goes through array and finds, 
  // index of current image stored, uses a regular
  // search until found.
  //
  // @param: images - Array to be searched through 
  //
  // @param: currentImage - currentImage src 
  // looking for.
  //
  // @return - returns index of current Image if found
  // else returns -1.
  //*************************************************
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
