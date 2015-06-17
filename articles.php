<?php

//*******************************************
// @summary: Gets the 5 articles for the 
// page number
// 
// @param: page_number - current page
// number to determine offset
//
// @return: html to be printed out
//*******************************************
function getSummaries($page_number) {
    require_once('database.php');
    $db = new Database();

    //get 5 summary articles depending on page number (offset will change)
    $db->prepare("SELECT Id, Title, Date, Photo, Summary FROM Articles ORDER BY Id DESC LIMIT 5 OFFSET :offset ");
    //bind results and execute query
    $db->bind(":offset",  $page_number);
    $result = $db->resultset();
    
    //for each result fetch them
    foreach($result as $row) {

      $id = $row['Id'];
      $date = $row['Date'];
      $title = $row['Title'];
      $photo = $row['Photo'];
      $summary = $row['Summary'];

      //html = out html similar to on index page -> summaries
      $html .= '
        <a href="news.php?Id='.$id.'"> <!-- Article links to news equivalent -->
        <div class="row animated wow bounceInLeft">
        <div class="summary-news">
        <h2>'.$title.'<small>'.$date.'</small></h2>
        <div class="col-sm-3">
        '.$photo.'
        </div> <!-- End of picture -->
        <div class="col-sm-9">
        <p class="larger-font">'.$summary.'</p>
        </div> <!-- End of main summary --> 
        </div> <!-- End of summary -->
        </div> <!-- End of row -->
        </a>';
    }
    
    return $html;
  }

//*******************************************
// @summary: Creates pagination for 
// the number of articles 5 articles per
// page
// 
// @param: current_page - currnet page
// number to make it active
//
// @param: article_number - total number of
// articles in the db
//
// @return: html to be printed out
//*******************************************
function getPagination($current_page ,$article_number) {
  $html .= '<div class="text-center animated wow bounceInRight">';
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
