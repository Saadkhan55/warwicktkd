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
        </ol>

        <div class="carousel-inner">

          <div class="item active">
            <div class="container">
              <div class="row">

                <div class="col-md-6 col-xs-12"> <!-- Each newslider element -->
                  <div class="carousel-caption"> 
                    <h1 class="title">Beginners Guide</h1> <!-- Newslider title -->
                    <p class="carousel-text">New to the club, or looking to start Tae Kwon Do. Have a look at our beginners guide to help answer some of your questions.</p> <!-- newslider text -->

                    <a href="beginners.php"><button type="button" class="btn btn-danger btn-lg">Learn More</button></a> <!-- newslider button -->
                  </div>
                </div> <!--End of col-md-6 -->

                <div class="col-md-6 col-sm-4 hidden-xs">
                  <div class="carousel-image">
                    <img class="img-responsive" src="images/placeholder.png" width="250px" height="250px">
                  </div> <!--End of carousel-image -->
                </div> <!--End of carousel-image -->

              </div> <!--End of row -->
            </div> <!--End of container -->
          </div> <!--End of first item-->

          <div class="item">
            <div class="container">
              <div class="row">

                <div class="col-md-6 col-xs-12">
                  <div class="carousel-caption">
                    <h1 class="title">Students</h1>
                     <p class="carousel-text">Already a student at the club, want to revise theory or learn your patterns. Has all the information for the grading syllabus. Select appropiate grade in dropdown menu.</p>

                    <div class="btn-group dropup"> <!-- Link of kup grades (dropdown menu) -->
                      <button type="button" class="btn btn-danger btn-lg dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        Grade <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu scrollable-menu" role="menu">
                        <li><a href="white-belt.php">10th Kup</a></li>
                        <li><a href="yellow-tag.php">9th Kup</a></li>
                        <li><a href="yellow-belt.php">8th Kup</a></li>
                        <li><a href="green-tag.php">7th Kup</a></li>
                        <li><a href="green-belt.php">6th Kup</a></li>
                        <li><a href="blue-tag.php">5th Kup</a></li>
                        <li><a href="blue-belt.php">4th Kup</a></li>
                        <li><a href="red-tag.php">3rd Kup</a></li>
                        <li><a href="red-belt.php">2nd Kup</a></li>
                        <li><a href="black-tag.php">1st Kup</a></li>
                      </ul>
                    </div> <!-- End of btn group-->

                  </div> <!-- End of caption -->
                </div> <!--End of col-md-6 -->

                <div class="col-md-6 col-sm-4 hidden-xs">
                  <div class="carousel-image">
                    <img class="img-responsive" src="images/placeholder.png" width="250px" height="250px">
                  </div> <!--End of carousel-image -->
                </div> <!--End of carousel-image -->

              </div> <!--End of row -->
            </div> <!--End of container -->
          </div> <!--End of second item-->

          <div class="item">
            <div class="container">
              <div class="row">

                <div class="col-md-6 col-xs-12">
                  <div class="carousel-caption">
                    <h1 class="title">News</h1>
                    <p class="carousel-text">Take a look at the latest news for the club, such competitions the university has completed in or results of gradings or even on going events</p>
                    <a href="news.php"><button type="button" class="btn btn-danger btn-lg">Read More</button></a> <!-- newslider button -->
                  </div>
                </div> <!--End of col-md-6 -->

                <div class="col-md-6 col-sm-4 hidden-xs">
                  <div class="carousel-image">
                    <img class="img-responsive" src="images/placeholder.png" width="250px" height="250px">
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

            <a href="#">
              <div class="col-md-4">
                <i class="fa fa-user"></i>
                 <h2>Beginner Guide</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mauris eu velit euismod sodales. Nullam ipsum leo, volutpat vitae accumsan quis, ornare vel diam. </p>
              </div>
            </a> <!-- End of first story -->

            <a href="#">
              <div class="col-md-4">
                <i class="fa fa-info"></i>
                 <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mauris eu velit euismod sodales. Nullam ipsum leo, volutpat vitae accumsan quis, ornare vel diam. </p>
              </div>
            </a> <!-- End of second story -->

            <a href="#">
              <div class="col-md-4">
                <i class="fa fa-users"></i>
                 <h2>Exec Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mauris eu velit euismod sodales. Nullam ipsum leo, volutpat vitae accumsan quis, ornare vel diam. </p>
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

              //get result, then for each row create a mini story
              while($row = $result -> fetch_assoc()) {
                $id = $row['Id'];
                $date = $row['Date'];
                $photo = $row['Photo'];
                $title = $row['Title'];
                $summary = $row['Summary'];

                //Create each article show title summary and picture
                echo '
                  <a href="news.php?Id='.$id.'"> <!-- Article links to news equivalent -->
                    <div class="row">
                      <div class="summary-news">
                       <h2>'.$title.'<small>'.$date.'</small></h2>
                       <div class="col-sm-3">
                          '.$photo.'
                        </div> <!-- End of picture -->

                        <div class="col-sm-9">
                          <p>'.$summary.'</p>
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
  </body>
</html>

