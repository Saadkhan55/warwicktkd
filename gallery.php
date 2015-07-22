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

      <div class="container gallery">
        <h2 class="section">Fresher 2015</h2>

        <div class="row">

          <div class="col-md-3">
            <a href="images/gallery/freshers/1.jpg"><img class="img-responsive" src="images/gallery/freshers/1.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/2.jpg"><img class="img-responsive" src="images/gallery/freshers/2.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/3.jpg"><img class="img-responsive" src="images/gallery/freshers/3.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/4.jpg"><img class="img-responsive" src="images/gallery/freshers/4.jpg" alt=""></a>
          </div>

        </div> <!-- End of Row -->

        <div class="row">

          <div class="col-md-3">
            <a href="images/gallery/freshers/5.jpg"><img class="img-responsive" src="images/gallery/freshers/5.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/6.jpg"><img class="img-responsive" src="images/gallery/freshers/6.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/7.jpg"><img class="img-responsive" src="images/gallery/freshers/7.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/8.jpg"><img class="img-responsive" src="images/gallery/freshers/8.jpg" alt=""></a>
          </div>

        </div> <!-- End of Row -->

        <div class="row">

          <div class="col-md-3">
            <a href="images/gallery/freshers/9.jpg"><img class="img-responsive" src="images/gallery/freshers/9.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/10.jpg"><img class="img-responsive" src="images/gallery/freshers/10.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/11.jpg"><img class="img-responsive" src="images/gallery/freshers/11.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/12.jpg"><img class="img-responsive" src="images/gallery/freshers/12.jpg" alt=""></a>
          </div>

        </div> <!-- End of Row --> 

        <div class="row">
          <div class="col-md-3">
            <a href="images/gallery/freshers/13.jpg"><img class="img-responsive" src="images/gallery/freshers/13.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/14.jpg"><img class="img-responsive" src="images/gallery/freshers/14.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/15.jpg"><img class="img-responsive" src="images/gallery/freshers/15.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/16.jpg"><img class="img-responsive" src="images/gallery/freshers/16.jpg" alt=""></a>
          </div>
        
        </div>

        <div class="row">
          <div class="col-md-3">
            <a href="images/gallery/freshers/17.jpg"><img class="img-responsive" src="images/gallery/freshers/17.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/18.jpg"><img class="img-responsive" src="images/gallery/freshers/18.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/19.jpg"><img class="img-responsive" src="images/gallery/freshers/19.jpg" alt=""></a>
          </div>

          <div class="col-md-3">
            <a href="images/gallery/freshers/20.jpg"><img class="img-responsive" src="images/gallery/freshers/20.jpg" alt=""></a>
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

