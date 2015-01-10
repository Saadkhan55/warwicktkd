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

      <!-- Carousel, newslider recent news -->
      <div id="newslider" class="carousel slide" data-ride="carousel">
        <img class="carousel-background img-responsive" src="images/background.jpg">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#newslider" data-slide-to="0" class="active"></li>
          <li data-target="#newslider" data-slide-to="1"></li>
          <li data-target="#newslider" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">

          <div class="item active">
            <img src="..." alt="...">
            <div class="carousel-caption">
              ...
            </div>
          </div> <!-- End of item -->
          <?php 
            //recent posts need to access db
            require('database.php');

            $db = new Database();
            //select latest 3 articles
            $result = $db->query("SELECT * FROM Articles ORDER BY ID DESC LIMIT 3");
          ?>
        </div> <!-- End of carousel inner -->

        <!-- Controls -->
        <a class="left carousel-control" href="#newslider" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#newslider" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> <!-- End of newslider -->

    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
  </body>
</html>



