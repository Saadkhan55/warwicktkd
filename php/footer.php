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
                <li><a href="news.php">NEWS</a></li>
                <li><a href="calendar">CALENDAR</a></li>
             </ul> 
          </div>    

          <div class="middle">
             <ul class="unlisted">
                <li><a href="http://warwicksport.warwick.ac.uk/clubs/taekwondo/" target="_blank">JOIN US</a></li>
                <li><a href="beginners.php">FAQ</a></li>
                <li><a href="quiz.php">QUIZ</a></li>
             </ul> 
          </div>  

          <div class="right">
             <ul class="unlisted">
                <li><a href="training.php">TRAINING</a></li>
                <li><a href="gallery.php">GALLERY</a></li>
                <li><a href="contact.php">CONTACT</a></li>
             </ul> 
          </div>    
        </div><!--End of row-->

        <div class="social">
          <h2>SOCIAL</h2>
          <div class="social-button">
            <a href="https://www.facebook.com/groups/warwicktkd" target="_blank">
              <img src="images/social/facebook.png" alt="Facebook">
            </a>
            <a href="https://www.google.com/calendar/embed?src=taekwondowarwick%40gmail.com" target="_blanK">
              <img src="images/social/google+.png" alt="Google Calendar" target="_blanK">
            </a>
            <a href="https://twitter.com/warwicktkd" target="_blanK">
              <img src="images/social/twitter.png" alt="Twitter">
            </a>
            <a href="https://www.youtube.com/channel/UC926iPSTDZ-m5TgpTiXdn4Q" target="_blanK">
              <img src="images/social/youtube.png" alt="Youtube">
            </a>
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

        //foreach row create a mini story
        foreach ($result as $row) {
          $id = $row['Id'];
          $date = $row['Date'];
          $photo = $row['Photo'];
          $title = $row['Title'];

          echo '
            <li>
              <a href="news.php?Id='.$id.'">'.$photo.'</a> 
              <div class="heading">
                <p>
                  <a href="news.php?Id='.$id.'">'.$title.'</a>
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
            Westwood Games Hall <br>
            University Of Warwick <br>
            CV4 7AL <br>
            Email:tkd@warwicksu.com <br>
          </p>
        </div> <!--End of address-->
      </div> <!--End of third col-->
    </div> <!-- end of row -->
  </div> <!-- End of container -->
  <div class="credits ">Warwick Tae Kwon Do &copy 2014-2015. All rights reserved.</div> <!-- End of credits -->
</div><!--End of footer-->

<!-- jQuery and bootstrap for plugins with local fallbacks-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery.min.js"><\/script>')</script> 
<script src="js/vendor/Tocca.min.js"></script>
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/vendor/lazyload.min.js"></script>
<!-- Own Created JS files-->
<script src="js/vendor/jquery.bcSwipe.min.js"></script> <!-- Swipe left /right -->
<script src="js/active.js"></script> <!-- Change active navbar link depending on page -->
<script src="js/scroll.js"></script> <!-- Allow smooth scroll to an anchor link using jquery -->
<script src="js/accordion.js"></script> <!-- Changes class to add plus and minus effect on accordion when open/closed -->
<script src="js/theory.js"></script>
<script src="js/contact.js"></script>
<script src="js/video_play.js"></script>
<script src="js/quiz.js"></script>
<script src="js/team.js"></script>
<script src="js/vendor/lazy_load.js"></script>

