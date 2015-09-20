//***********************************************
//Gallery.js: Lightbox
//**********************************************
$(document).ready(function() {


  //These variables do the following
  //imagesArray - stores the src of every image inside the gallery div
  //index - keeps track of what index the current image src is in the imagesArray variables
  //src - the src of the image the user clicks on
  var imagesArray;
  var index;
  var src;

  //if user clicks on any image in the gallery
  $(".gallery .img-responsive").click(function() {

    //get src of this image
    src = $(this).attr("src");

    //show lightbox, append image into lightbox
    //disable overflow so that scroll bar disappears
    $("#lightbox").show();
    $("#content").append("<img class='light-image animated fadeIn' src='" +  src + "'>"); 
    $("body").css("overflow", "hidden");

    //images array maps every image src inside gallery div 
    //to an item in the array
    imagesArray = $(".gallery").find("img").map(function()
    {
      return $(this).attr("src");
    }).get();

    //get index of current image being displayed, 
    //so we know which image to get next
    index = getIndex(src);

    //set margin so image is vertically centered
    setMargin();
    
  });

  //on scrollwheel (on mouse)
  $('#lightbox').on( 'DOMMouseScroll mousewheel', function ( event ) {
    //if scroll down, get next image
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { 
      next(index);
      index++;
    } 
    
    //else scroll up get prev image
    else {
      prev(index);
      index--;
    }
  });



  //on click of right icon, get next image from array
  //add 1 to index
  $("#lightbox").on("click", ".fa-chevron-right", function(e) {
    e.stopPropagation();
    next(index);
    index++;
  });

  //similiar to function above except goes backwards in the imagesArray
  $("#lightbox").on("click", ".fa-chevron-left", function(e) {
    e.stopPropagation();
    prev(index);
    index--;
  });

  //on click of anywhere hide lightbox 
  //and reset everything
  $("body").on("click", "#lightbox", function() {
    $("#lightbox").hide();
    $(".light-image").remove();
    $("body").css("overflow", "scroll");
  });


  //for touch events (for mobile)
  if(document.location.pathname.match(/[^\/]+$/)[0] == "gallery.php") {
    var el = document.getElementById("lightbox");
    var touch = new Hammer(el);


    //functions same as above but made for mobile touch
    touch.on("swiperight", function() {
      next(index);
      index++;
    });

    touch.on("swipeleft", function() {
      prev(index);
      index--;
    });

    touch.on("swipeup", function() {
      $("#lightbox").hide();
      $(".light-image").remove();
      $("body").css("overflow", "scroll");
    });
  }


  //@summary - gets the index of the src paramater where it exists 
  //in the imagesArray
  //@param src - src of the image the user clicked on
  //@return index - stores index of src inside imagesArray
  function getIndex(src) {
    var index = 0;

    //for each image inside gallery div
    $(".gallery .img-responsive").each(function() {

      //if match found in imagesArray
      //return false
      //else increment index
      if(src === $(this).attr("src")) {
        return false;
      }
      index++;
    });

    return index;
  }


  //@summary - works out how much margin-top needs to be applied to the image
  function setMargin() {
    //get image height
    var imageHeight = $(".light-image").height();
    //get how much pixels from top one of the navigations buttons are
    var pixelsFromTop = $(".fa-chevron-right").position().top;
    
    //the margin top is pixels from top - height of image divided by 2
    //since we want halfway point of image inline with navigation buttons
    var marginTop = (pixelsFromTop - (imageHeight/2)) + "px";

    //add css to image
    $(".light-image").css("margin-top", marginTop);
  }

  //@summary - changes images gets next image in imagesArray
  //@param index - index of current image in array
  function next(index) {

    //if index plus one is equal to array length, 
    //start at 0 to add wrap around
    if(index+1 === imagesArray.length) {
      index = 0;
    }

    //update image
    $(".light-image").remove(); 
    $("#content").append("<img class='light-image animated fadeIn' src='" +  imagesArray[index+1]+ "'>"); 
    setMargin();
  }

  //@summary - changes images gets previous image in imagesArray
  //@param index - index of current image in array
  function prev(index) {
    //if index at 0, add wrap around
    //so get last image
    if(index === 0) {
      index = imagesArray.length;
    }

    //update image
    $(".light-image").remove(); 
    $("#content").append("<img class='light-image animated fadeIn' src='" +  imagesArray[index-1]+ "'>"); 
    setMargin();
  }

});

