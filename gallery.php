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

        <!--Gallery set stores pictures with similar proprties such as from the same event-->
        <div class="gallery-set">
          <h2 class="title">Uni Champs - 2014</h2>
          <!--3 Images per row-->
          <div class="row">
            <div class="col-sm-3">
              <a class="gallery" href="#"><img src="images/gallery/example/1.jpg" class="img-responsive"></a> <!--anchor link with image inside -->
            </div> <!-- End of col -->

            <div class="col-sm-3">
              <a class="gallery" href="#"><img src="images/gallery/example/2.jpg" class="img-responsive"></a> 
            </div> <!-- End of col -->

            <div class="col-sm-3">
              <a class="gallery" href="#"><img src="images/gallery/example/3.jpg" class="img-responsive"></a> 
            </div> <!-- End of col -->

            <div class="col-sm-3">
              <a class="gallery" href="#"><img src="images/gallery/example/4.jpg" class="img-responsive"></a> 
            </div> <!-- End of col -->
          </div> <!-- End of row -->

          <div class="row">
            <div class="col-sm-3">
              <a class="gallery" href="#"><img src="images/gallery/example/5.jpg" class="img-responsive"></a> <!--anchor link with image inside -->
            </div> <!-- End of col -->

            <div class="col-sm-3">
              <a class="gallery" href="#"><img src="images/gallery/example/6.jpg" class="img-responsive"></a> 
            </div> <!-- End of col -->

            <div class="col-sm-3">
              <a class="gallery" href="#"><img src="images/gallery/example/7.jpg" class="img-responsive"></a> 
            </div> <!-- End of col -->

            <div class="col-sm-3">
              <a class="gallery" href="#"><img src="images/gallery/example/8.jpg" class="img-responsive"></a> 
            </div> <!-- End of col -->

          </div> <!-- End of row -->
        </div> <!-- End of set of gallery -->
        <!--Gallery set stores pictures with similar proprties such as from the same event-->
      </div> <!-- End of container -->

      <div id="lightbox">
        <div id="content">
        </div><!-- End of content -->
      </div><!-- End of lightbox -->

    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
    <script src="js/lightbox.js"></script>
  </body>
</html>

