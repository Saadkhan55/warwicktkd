<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>Contact Us</title>
  </head>
  <body>
    <div id="wrapper">
    <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
      <div class="container">
        <div class="row">

          <div class="col-md-12">
            <div class="well well-sm">
              <form class="form-horizontal" method="post" action="mailto.php">
                <fieldset>
                  <h1 class="text-center header">Contact Us</h1>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                    <div class="col-md-8">
                      <input id="fname" name="name" type="text" placeholder="Full Name" class="form-control">
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                    <div class="col-md-8">
                      <input id="email" name="email" type="text" placeholder="Email Address" class="form-control" required>
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                    <div class="col-md-8">
                      <textarea class="form-control" id="message" name="message" placeholder="Enter your massage for us here. We will get back to you within 2 business days." rows="7" required></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-12 text-center">
                      <button type="submit" class="submit btn btn-primary btn-lg">Submit</button>
                    </div>
                  </div>

                </fieldset>
              </form> <!-- End of form -->
            </div> <!-- End of well -->
          </div> <!-- End of col -->
        </div> <!-- End of row -->
      </div> <!-- End of container -->

    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
    <script src="js/contact.js"></script>
  </body>
</html>

