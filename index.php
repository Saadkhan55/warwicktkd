<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>Home Page</title>
  </head>
  <body>
    <div id="wrapper">
    <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators, dots at the bottom -->
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
          <li data-target="#carousel" data-slide-to="3"></li>
        </ol>

        <div class="carousel-inner">

          <div class="item active">
            <div class="container">
              <div class="row">

                <div class="col-md-6 animated bounceInLeft"> <!-- Each newslider element -->
                  <div class="carousel-caption video-caption"> 
                    <h1 class="title">My First Tae Kwon Do Lesson</h1> <!-- Newslider title -->
                    <p class="carousel-text">Watch this video to get to know a bit more about Tae Kwon Do. This is what your first Tae Kwon Do lesson might look like. The video goes through the main aspects that you will cover in lessons.</p> <!-- newslider text -->

                    <a href="https://www.warwicksu.com/sports/clubs/taekwondo/" target="_blank"><button type="button" class="btn btn-danger btn-lg">Join Us</button></a> <!-- newslider button -->
                  </div>
                </div> <!--End of col-md-6 -->

                <div class="col-md-6 animated delay-3 bounceInRight">
                  <div class="carousel-video">
                    <div class="embed-responsive embed-responsive-16by9">
                    <div>  <iframe width="560" height="315" src="https://www.youtube.com/embed/KMyrvgwDUzw" frameborder="0" allowfullscreen></iframe> </div>
                    </div>
                  </div> <!--End of carousel-image -->
                </div> <!--End of carousel-image -->

              </div> <!--End of row -->
            </div> <!--End of container -->
          </div> <!--End of first item-->

          <div class="item ">
            <div class="container">
              <div class="row">

                <div class="col-md-6 animated bounceInLeft"> <!-- Each newslider element -->
                  <div class="carousel-caption"> 
                    <h1 class="title">Beginners Guide</h1> <!-- Newslider title -->
                    <p class="carousel-text">New to the club, or looking to start Tae Kwon Do? Have a look at our beginners guide to help answer some of your questions.</p> <!-- newslider text -->

                    <a href="beginners.php"><button type="button" class="btn btn-danger btn-lg">Learn More</button></a> <!-- newslider button -->
                  </div>
                </div> <!--End of col-md-6 -->

                <div class="col-md-6 animated delay-3 bounceInRight">
                  <div class="carousel-image">
                    <img class="img-responsive" src="images/carousel/beginners.jpg" width="350px" height="260px" alt="beginners">
                  </div> <!--End of carousel-image -->
                </div> <!--End of carousel-image -->

              </div> <!--End of row -->
            </div> <!--End of container -->
          </div> <!--End of third item-->

          <div class="item">
            <div class="container">
              <div class="row">

                <div class="col-md-6 animated bounceInLeft">
                  <div class="carousel-caption">
                    <h1 class="title">Students</h1>
                     <p class="carousel-text">Already a student at the club? Find your new PUMA grading syllabus and etiquette guide right here</p>

                   <div class="btn-group dropup"> <!-- Links to syllabus pdfs (dropdown menu) -->
                      <button type="button" class="btn btn-danger btn-lg dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        Syllabus <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu scrollable-menu" role="menu">
                        <li><a href = "etiquette.pdf">Etiquette Guide</a></li>
                        <li><a href="white-belt.php">10th Kup</a></li>
                        <li><a href="yellow-tag.php">9th Kup</a></li>
                        <li><a href="yellow-belt.php">8th Kup</a></li>
                        <li><a href="green-tag.php">7th Kup</a></li>
                        <li><a href="green-belt.php">6th Kup</a></li>
                        <li><a href="blue-tag.php">5th Kup</a></li>
                        <li><a href="blue-belt.php">4th Kup</a></li>
                      </ul>
                    </div> <!-- End of btn group-->
                  </div> <!-- End of caption -->
                </div> <!--End of col-md-6 -->

                <div class="col-md-6 animated delay-3 bounceInRight">
                  <div class="carousel-image">
                    <img class="img-responsive" src="images/carousel/students.jpg" width="350px" height="260px" alt="student">
                  </div> <!--End of carousel-image -->
                </div> <!--End of carousel-image -->

              </div> <!--End of row -->
            </div> <!--End of container -->
          </div> <!--End of second item-->

          <div class="item">
            <div class="container">
              <div class="row">

                <div class="col-md-6 animated bounceInLeft">
                  <div class="carousel-caption">
                    <h1 class="title">Training Times</h1>
                    <p class="carousel-text">Training times for this year are all at Westwood Games Hall (<a class="map-link" href="http://campus.warwick.ac.uk/?search=Westwood+Games+Hall&slid=41357" target="_blank">Map Link</a>)
                      <br><br>
                      <br> Monday (WT) : 19:00 - 20:30
                      <br> Tuesday(ITF) : 18:00 - 19:30
                      <br> Thursday (ITF) : 20:30 - 22:00
                      <br> Saturday (Squad) : 12:00 - 14:00
                      <br>
                    </p>
                    <a href="training.php"><button type="button" class="btn btn-danger btn-lg">Read More</button></a> <!-- newslider button -->
                  </div>
                </div> <!--End of col-md-6 -->

                <div class="col-md-6 animated delay-3 bounceInRight">
                  <div class="carousel-image">
                    <img class="img-responsive " src="images/carousel/training.jpg" width="350px" height="260px" alt="training">
                  </div> <!--End of carousel-image -->
                </div> <!--End of carousel-image -->

              </div> <!--End of row -->
            </div> <!--End of container -->
          </div> <!--End of third item-->

        </div> <!-- End of carousel-inner -->

        <!-- Controls - navigation buttons -->
        <a class="left carousel-control animated bounceInLeft" href="#carousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="right carousel-control animated bounceInRight" href="#carousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div><!--End of newslider(carousel) -->

      <!-- "Three Story" -->
      <div class="three-story">
        <div class="container">
          <div class="row">

             <a href="beginners.php">
              <div class="col-md-4 ">
                <i class="fa fa-user"></i>
                 <h2>Beginner Guide</h2>
                <p>New to the club, or looking to start Tae Kwon Do? Have a look at our beginners guide to help answer some of your questions.</p>
              </div>
            </a> <!-- End of first story-->

            <a href="training.php">
              <div class="col-md-4 ">
                <i class="fa fa-info"></i>
                 <h2>About Us</h2>
                <p>Find out our training times and where we train, as well as how much it costs to be a member of our club.</p>
              </div>
            </a> <!-- End of second story -->

            <a href="team.php">
              <div class="col-md-4 ">
                <i class="fa fa-users"></i>
                 <h2>Exec Team</h2>
                <p>Get to know all the great people who run the club. Learn a bit about them and what they do.</p>
              </div>
            </a> <!-- End of third story -->

          </div> <!-- End of row -->
        </div> <!-- End of container -->
      </div> <!-- End of three stories -->

      <!--Shows most recent news-->
      <div class="recent-news">
        <div class="container">

            
            <!-- Gets summaries of 3 latest news articles-->
            <?php 
              require_once("database.php");
              $db = new Database();
              //select latest 3 articles
              $result = $db->query("SELECT * FROM Articles ORDER BY ID DESC LIMIT 3");

              //For each row in the query (3 in this case)
              foreach ($result as $row) {
                $id = $row['Id'];
                $date = $row['Date'];
                $photo = $row['Photo'];
                $title = $row['Title'];
                $summary = $row['Summary'];

                //Create each article show title summary and picture
                echo '
                  <a href="news.php?Id='.$id.'"> <!-- Article links to news equivalent -->
                    <div class="row ">
                      <div class="summary-news">
                       <h2>'.$title.'<small>'.$date.'</small></h2>
                       <div class="col-sm-3">
                          '.$photo.'
                        </div> <!-- End of picture -->

                        <div class="col-sm-9">
                          <p class="larger-font">'.$summary.'</p>
                        </div> <!-- End of main summary --> 
                      </div> <!-- End of summary -->
                    </div> <!-- End of row -->
                  </a>';
              }

            ?>
        </div> <!-- End of container -->
      </div> <!-- End of recent news -->

    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>

    <!-- Touch events for carousel -->
    <script>
      //touch events
      var myElement = document.getElementById('carousel');
      var touch = new Hammer(myElement);

      touch.on("swiperight", function() {
          $("#carousel").carousel('next');

      });

      touch.on("swipeleft", function() {
          $("#carousel").carousel('prev');

      });

    </script>
  </body>
</html>

