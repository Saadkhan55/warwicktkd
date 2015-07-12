<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>404 - Page Not Found</title>
  </head>
  <body>
    <div id="wrapper">
    <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
      <div class="container">
        <div class="row">

            <div class="center">
              <img src="images/404.png" class="404" alt="404">
              <p class="large-font blue-text"> <b>The page you are looking for cannot be found</b></p>
              <a href="index.php"><button type="button" class="btn btn-primary btn-lg">Home Page</button></a> <!-- home button -->
              </button>
            </div>
        </div> <!-- End of row -->
      </div> <!-- End of container -->
    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
  </body>
</html>

