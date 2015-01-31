<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>Calendar</title>
  </head>
  <body>
    <div id="wrapper">
    <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
      <div class="container">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.google.com/calendar/embed?src=taekwondowarwick%40gmail.com&ctz=Europe/London%22" width="800" height="600" scrolling="no">
        </div> <!-- End of repsonsive embed -->
        </iframe> <!-- Google calendar -->
      </div> <!-- End of container -->
    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
  </body>
</html>

