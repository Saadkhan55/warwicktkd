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

                <div class="col-md-6 col-xs-12">
                  <div class="carousel-caption">
                    <h1 class="title">Title</h1>
                    <p class="carousel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus massa, pellentesque quis enim non, laoreet semper risus. Vestibulum at interdum urna. Nulla dui mauris, placerat nec gravida vitae, fringilla ut neque. Donec accumsan faucibus nunc, ut elementum erat. Aliquam non odio dui. Mauris non elit ac libero tempor fermentum ut faucibus arcu. Phasellus venenatis nisl nec ex tempus cursus.</p>
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
                    <h1 class="title">Title</h1>
                    <p class="carousel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus massa, pellentesque quis enim non, laoreet semper risus. Vestibulum at interdum urna. Nulla dut elementum erat. Aliquam non odio dui. Mauris non elit ac libero tempor fermentum ut faucibus arcu. Phasellus venenatis nisl nec ex tempus cursus.</p>
                  </div>
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
                    <h1 class="title">Title</h1>
                    <p class="carousel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus massa, pellentesque quis enim non, laoreet semper risus. Vestibulum at interdum urna. Nulla dueque. Donec accumsan faucibus nunc, ut elementum erat. Aliquam non odio dui. Mauris non elit ac libero tempor fermentum ut faucibus arcu. Phasellus venenatis nisl nec ex tempus cursus.</p>
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

      <div class="three-story">
        <div class="container">
          <div class="row">

            <div class="col-md-4">
              <i class="fa fa-user"></i>
               <h2>Beginner Guide</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mauris eu velit euismod sodales. Nullam ipsum leo, volutpat vitae accumsan quis, ornare vel diam. </p>
            </div> <!-- End of first story -->

            <div class="col-md-4">
              <i class="fa fa-info"></i>
               <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mauris eu velit euismod sodales. Nullam ipsum leo, volutpat vitae accumsan quis, ornare vel diam. </p>
            </div> <!-- End of second story -->

            <div class="col-md-4">
              <i class="fa fa-users"></i>
               <h2>Exec Team</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mauris eu velit euismod sodales. Nullam ipsum leo, volutpat vitae accumsan quis, ornare vel diam. </p>
            </div> <!-- End of third story -->

          </div> <!-- End of row -->
        </div> <!-- End of container -->
      </div> <!-- End of three stories -->

    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
  </body>
</html>

