<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>Theory Game</title>
  </head>
  <body>
    <div id="wrapper">
    <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
      <div id="quiz-container" class="container">
        <div class="intro">
          <h2>Tae Kwon Do - Theory Quiz</h2>
          <h4>Select Grade</h4>

          <select class="form-control select">
            <option>White Belt</option>
            <option>Yellow Tag</option>
            <option>Yellow Belt</option>
            <option>Green Tag</option>
            <option>Green Belt</option>
            <option>Blue Tag</option>
            <option>Blue Belt</option>
            <option>Red Tag</option>
            <option>Red Belt</option>
            <option>Black Tag</option>
            <option>Black Belt</option>
          </select> <!-- Select option to pick which grade questions user wants -->

          <button class="btn btn-danger start">Start </button>
        </div> <!-- Introduction page -->
        <div class="question">
          
        </div><!-- End of question --> 

      </div><!-- End of quiz container -->
    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
    <script src="js/quiz.js"></script>
  </body>
</html>

