<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>News Page</title>
  </head>
  <body>
    <div id="wrapper">
    <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
      <div class="container news-story">
      <?php

        require_once('database.php');
        $db = new Database();
        $conn = $db->connect();

        //sanitize input
        $page_id = filter_input(INPUT_GET, 'Id', FILTER_SANITIZE_STRING);

        //if there is an news id in the url then display that article
        if($page_id != null) {
          //prepare statement with id from url
          $stmt = $conn->prepare("SELECT Title, Date, Photo, Article FROM Articles WHERE Id = ?");
          //bind parameters
          $stmt->bind_param("s", $page_id); 

          //if execution is successful
          if($stmt->execute()) {
            //bind result to variables
            $stmt->bind_result($title, $date, $photo, $article);
            //fetch results and echo (print out) html to browser
            while($stmt->fetch()) {
                echo "<h2 class='title'>". $title ."<small>". $date ."</small></h2>";
                echo $photo;
                echo "<p class='larger-font'>".$article."</p>";
            } 
            $stmt->close();
          }
        }
        // else if no news id in url display 5 news stories per page
        else {
          //cast p (url) to an int, filter input
          $val = filter_input(INPUT_GET, 'p', FILTER_SANITIZE_STRING);
          $page_val = (int) $val;

          //if page val equals 0 the url not an integer so therefore page number to 1
          if($page_val == 0) {
            $page_number = 1;
          }
          else {
            $page_number = $val;
          }

           //store current page number as page number will be changed
          $current_page = $page_number;
          //page_number will be offset so multiple by 5, (need to subtract one as on first page should be no offset)
          $page_number = ($page_number - 1) * 5;
          //get 5 summary articles depending on page number (offset will change)
          $stmt = $conn -> prepare("SELECT Id, Title, Date, Photo, Summary FROM Articles ORDER BY Id DESC LIMIT 5 OFFSET ? ");

          //bind results and execute query
          $stmt->bind_param("s",  $page_number);

          if($stmt->execute()) {
            //bind result to variables
            $stmt->bind_result($id, $title, $date, $photo, $summary);

            //while there are result fetch them
            while($stmt->fetch()) {
              //echo out html similar to on index page
              echo '
                <a href="news.php?Id='.$id.'"> <!-- Article links to news equivalent -->
                <div class="row">
                <div class="summary-news">
                <h2>'.$title.'<small>'.$date.'</small></h2>
                <div class="col-sm-3">
                '.$photo.'
                </div> <!-- End of picture -->

                <div class="col-sm-9">
                <p>'.$summary.'</p>
                </div> <!-- End of main summary --> 
                </div> <!-- End of summary -->
                </div> <!-- End of row -->
                </a>';

            }
          }
          //get number of articles to displasy in pagination
          $result = $db->query("SELECT COUNT(*) FROM Articles");
          $article_number = 0;
          while($row = $result -> fetch_assoc()) {
            $article_number = $row['COUNT(*)'];
          }

          echo '<div class="text-center">';

          //set up pagination
          require_once("php/vendor/pagination.php");
          $pg = new bootPagination();
          $pg->pagenumber = $current_page;
          $pg->pagesize = 5;
          $pg->totalrecords = $article_number;
          $pg->paginationcss = "pagination-larger";
          $pg->paginationstyle = 0;
          $pg->defaultUrl = "news.php";
          $pg->paginationUrl = "news.php?p=[p]";
          echo $pg->process();
          echo '</div>';
        }
      ?>
      </div> <!-- End of container -->
    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
    <script src="js/news.js"></script>
  </body>
</html>

