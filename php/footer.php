<div id="footer">
  <a id="up" href="#header"><i class="fa fa-chevron-up"></i></a> <!-- End of up button -->
  <div class="container">
    <div class="row">
      <div class="col-sm-4">      
        <h2>SITEMAP</h2>
        <div class="row sitemap">
          <!-- SITEMAP left, middle and right rows -->
          <div class="left">
             <ul class="unlisted">
                <li><a href="index.php">HOME</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">CALENDAR</a></li>
             </ul> 
          </div>    

          <div class="middle">
             <ul class="unlisted">
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">BEGINNERS</a></li>
                <li><a href="#">SOCIALS</a></li>
             </ul> 
          </div>  

          <div class="right">
             <ul class="unlisted">
                <li><a href="#">EXEC TEAM</a></li>
                <li><a href="#">TRAINING</a></li>
                <li><a href="#">CONTACT</a></li>
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


      <!-- 
        ** Gets the 3 latest news articles and displays in a condensed form
        **
      -->
      <?php 
        //recent posts need to access db
        require_once('database.php');

        $db = new Database();
        //select latest 3 articles
        $result = $db->query("SELECT * FROM Articles ORDER BY ID DESC LIMIT 3");
        //print out html 'like normal'
        echo '<div class="col-sm-4">
                <h2>RECENT POSTS </h2>
                <div class="blog-post">
                  <ul class="unlisted">';

        //get result, then for each row create a mini story
        while($row = $result -> fetch_assoc()) {
          $id = $row['Id'];
          $date = $row['Date'];
          $photo = $row['Photo'];
          $title = $row['Title'];

          echo '
            <li>
              <a href="news.php?Id='.$id.'">'.$photo.'</a> 
              <div class="heading">
                <p>
                  <a href="news?Id='.$id.'">'.$title.'</a>
                  <small> '.$date.'</small>
                </p>
              </div>
            </li>';
        }

        echo '</ul>
            </div> 
          </div>';

      ?>

      <!-- Third column -->
      <div class="col-sm-4">
        <div class="address">
          <h2>CONTACT US</h2>
          <p> 
            100, LOREM ISPUM, LENG <br>
            LONDON, UK <br>
            PHONE: 020 1345 6789 <br>
            FAX: 020 1345 6789 <br>
            EMAIL: test@test.com <br>
          </p>
        </div> <!--End of address-->
      </div> <!--End of third col-->
    </div> <!-- end of row -->
  </div> <!-- End of container -->
  <div class="credits">Warwick Tae Kwon Do &copy 2014-2015. All rights reserved.</div> <!-- End of credits -->
</div><!--End of footer-->

<!-- jQuery and bootstrap for plugins with local fallbacks-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery.min.js"><\/script>')</script> 
<!-- Bootstrap with CDN fallbacks-->
<script src="js/vendor/bootstrap.min.js"></script>
<!-- Own Created JS files-->
<script src="js/active.js"></script> <!-- Change active navbar link depending on page -->
<script src="js/scroll.js"></script> <!-- Allow smooth scroll to an anchor link using jquery -->

