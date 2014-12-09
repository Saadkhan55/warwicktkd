<div id="footer">
  <a href="#header"><i class="fa fa-chevron-up"></i></a> <!-- End of up button -->
  <div class="container">
    <div class="row">

      <div class="col-sm-4">      
        <h2>SITEMAP</h2>
        <div class="row sitemap">
          <div class="left">
             <ul class="unlisted">
                <li><a href="index.php">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">TEAM</a></li>
                <li><a href="#">PRICING</a></li>
             </ul> 
          </div>    

          <div class="middle">
             <ul class="unlisted">
                <li><a href="features_css.php">CSS</a></li>
                <li><a href="features_components.php">COMPONENTS</a></li>
                <li><a href="#">ADDITIONAL</a></li>
                <li><a href="#">FAQ</a></li>
             </ul> 
          </div>  

          <div class="right">
             <ul class="unlisted">
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">SERVICE</a></li>
                <li><a href="#">PORTFOLIO</a></li>
                <li><a href="#">BLOG</a></li>
             </ul> 
          </div>    
        </div><!--End of row-->

        <div class="social">
          <h2>SOCIAL</h2>
          <div class="social-button">
            <img src="images/social/facebook.png" alt="">
            <img src="images/social/google+.png" alt="">
            <img src="images/social/instagram.png" alt="">
            <img src="images/social/twitter.png" alt="">
            <img src="images/social/youtube.png" alt="">
          </div> <!--End of social buttons -->
        </div> <!-- End of social -->
      </div> <!--End of first col-->
    <div class="credits col-md-8">Warwick Tae Kwon Do &copy 2014. All rights reserved.</div> <!-- End of second --> 
    </div> <!-- end of row -->
</div><!--End of footer-->

<!-- jQuery and bootstrap for plugins with local fallbacks-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery.min.js"><\/script>')</script> <!-- CDN fallback -->

<!-- Bootstrap with CDN fallbacks-->
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script>window.jQuery.fn.modal || document.write('<script src="js/vendor/bootstrap.min.js"><\/script>')</script>
<script>
    (function($) {
        $(function() {
            if ($('body').css('color') !== 'rgb(51, 51, 51)') {
                $('head').prepend('<link rel="stylesheet" href="css/vendor/bootstrap.min.css">');
            }
        });

        // Font-Awesome CDN fallback
        $(function() {
           if ($('body').find('.fa').css('font-family') !== 'font-awesome') {
                $('head').prepend('<link rel="stylesheet" href="css/vendor/font-awesome.min.css">');
            }
        });
    })(window.jQuery);
</script>
<!-- Own Created JS files-->
<script src="js/active.js"></script> <!-- Change active navbar link depending on page -->

