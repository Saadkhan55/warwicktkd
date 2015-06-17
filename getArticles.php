<?php

  //create database object
  require_once("database.php");
  $db = new Database();

  //get pagenumber from post json
  $page_number = filter_input(INPUT_POST, 'pageNumber', FILTER_SANITIZE_NUMBER_INT);
  $current_page = filter_input(INPUT_POST, 'currentPage', FILTER_SANITIZE_NUMBER_INT);

  //get max number of articles
  $db->prepare("SELECT COUNT(*) FROM Articles");
  $row = $db->single();
  $article_number = $row['COUNT(*)'];

  //call functions from article 
  require_once("articles.php");

  //turn into int 
  $page_number = (int) $page_number;

  //get summaries for this page
  $html .= getSummaries($page_number);
  $html .= getPagination($current_page ,$article_number);

  //store html in assoc array
  $arr = array (
    'html' => $html
  );

  //return json encoded html
  echo json_encode($html);

?>
