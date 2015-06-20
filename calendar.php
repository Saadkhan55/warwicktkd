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
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=taekwondowarwick%40gmail.com&amp;color=%232952A3&amp;ctz=Europe%2FLondon" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
    <script src="js/vendor/jquery-ui.min.js"></script>
  </body>
</html>

