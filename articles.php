<?php

  /**
   * Returns 5 summaries in the form similar to index page, 
   * the summary will include photo, title, date and 
   * summaries. 5 are shown per page
   *
   * @param $page_number - Is the offset for the query, i.e. if page number is 2
   * want the offset to be 5 so it will get articles with id 6-10.
   * @param $conn - connection to the database
   **/
  function getSummaries($page_number, $conn) {
    //get 5 summary articles depending on page number (offset will change)
    $stmt = $conn -> prepare("SELECT Id, Title, Date, Photo, Summary FROM Articles ORDER BY Id DESC LIMIT 5 OFFSET ? ");

    //bind results and execute query
    $stmt->bind_param("s",  $page_number);

    if($stmt->execute()) {
      //bind result to variables
      $stmt->bind_result($id, $title, $date, $photo, $summary);

      //while there are result fetch them
      while($stmt->fetch()) {
        //$html = out html similar to on index page
        $html .= '
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

    return $html;
  }

  /** 
   * Creates a pagination, page navigation, which will have the correct number of 
   * pages etc.
   *
   * @param $current_page - Is the current page the user is on.
   * @param $article_number - Number of articles in the db
   **/
  function getPagination($current_page ,$article_number) {
    $html .= '<div class="text-center">';

    //set up pagination using pagination
    require_once("php/vendor/pagination.php");
    $pg = new bootPagination();
    $pg->pagenumber = $current_page;
    $pg->pagesize = 5;
    $pg->totalrecords = $article_number;
    $pg->paginationcss = "pagination-larger";
    $pg->paginationstyle = 0;
    $pg->defaultUrl = "news.php";
    $pg->paginationUrl = "news.php?p=[p]";
    $html .= $pg->process();
    $html .= '</div>';

    return $html;

  }

?>
