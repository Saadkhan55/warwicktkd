<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>Gallery</title>
  </head>
  <body>
    <div id="wrapper">
      <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>

      <div class="container">
        <div class="row">
          <h2 class="section">EVENT</h2>

          <div class="col-md-3">
            <a href="images/placeholder.png"><img class="img-responsive" src="images/placeholder.png" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/placeholder.png"><img class="img-responsive" src="images/placeholder.png" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/placeholder.png"><img class="img-responsive" src="images/placeholder.png" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/placeholder.png"><img class="img-responsive" src="images/placeholder.png" alt=""></a>
          </div>

        </div> <!-- End of Row -->
      </div>

    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>

    <script src="js/vendor/jquery.tosrus.min.all.js"></script>
    <script src="js/vendor/hammer.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/vendor/jquery.tosrus.all.css" />


    <script type="text/javascript">
    $(".row .col-md-3 a").tosrus({});

    </script>

  </body>
</html>

