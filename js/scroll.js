//Smoothly scrolls to an anchor link
//for now only up button will work with this
$(document).ready(function(){
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
});


//stop anchor being includes in URL
//$('html, body').stop().animate({
//     'scrollTop': $target.offset().top
//     }, 900, 'swing');
