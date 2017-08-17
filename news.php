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
        //sanitize input
        $page_id = filter_input(INPUT_GET, 'Id', FILTER_SANITIZE_STRING);

        //if there is an news id in the url then display that article
        if($page_id != null) {

          //prepare statement with id from url
          $db->prepare("SELECT Title, Date, Photo, Article FROM Articles WHERE Id = :id");
          //bind parameters
          $db->bind(":id", $page_id); 
          //Store result in variable
          $result = $db->resultset();

          //foreach row
          foreach($result as $row ) {
            $title = $row['Title'];
            $date = $row['Date'];
            $photo = $row['Photo'];
            $article = $row['Article'];

            echo "<h2 class='title'>". $title ."<small>". $date ."</small></h2>";
            echo $photo;
            echo "<p class='larger-font'>".$article."</p>";
            echo '<div class="fb-comments" data-href="http://www.haseebmajid.com/warwicktkd?'.$page_id.'" data-width="1000px" data-numposts="5"></div>';
          } 
        }
        
        // else if no news id in url display 5 news stories per page
        else {

          //filter input, and sanitize the string $_GET['p']
          $val = filter_input(INPUT_GET, 'p', FILTER_SANITIZE_STRING);

          //cast val to page_val, if it isn't an int will be cast to 0
          $page_val = (int) $val;
          
          //Get total number of articles in the db
          $db->prepare("SELECT COUNT(*) FROM Articles");
          $row = $db->single();
          $article_number = $row['COUNT(*)'];

          //work out the max number of pages needed for pagination as 5 pages are displayed per page
          if($article_number % 5 === 0) {
            $max_pages = ($article_number/5);
          }
          else {
            $max_pages = (int) (($article_number/5) + 1);
          }

          //if page val equals 0 then url not an integer so therefore set page number to 1
          if($page_val == 0) {
            $page_number = 1;
          }
          //else if page value is greater than maximum number of pages
          else if($page_val > $max_pages) {
            //set page number to max number of pages
            $page_number = $max_pages;
          }
          //else set page number to value
          else {
            $page_number = $val;
          }

           //store current page number as page number will be changed
          $current_page = $page_number;
          //page_number will be offset so multiple by 5, (need to subtract one as on first page should be no offset)
          $page_number = ($page_number - 1) * 5;

          require_once("articles.php");
          echo getSummaries($page_number);
          echo getPagination($current_page ,$article_number);

        }
      ?>
      </div> <!-- End of container -->
    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
    <script src="js/news.js"></script>
    <div id="fb-root"></div>
        <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.4";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
  </body>
</html>

