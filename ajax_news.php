<?php

  //create database object
  require_once("database.php");
  $db = new Database();

  //connect to database
  $conn = $db->connect();

  //get pagenumber from post json
  $page_number = filter_input(INPUT_POST, 'pageNumber', FILTER_SANITIZE_NUMBER_INT);
  $current_page = filter_input(INPUT_POST, 'currentPage', FILTER_SANITIZE_NUMBER_INT);

  //get max number of articles
  $result = $db->query("SELECT COUNT(*) FROM Articles");
  $article_number = 0;
  while($row = $result -> fetch_assoc()) {
    $article_number = $row['COUNT(*)'];
  }

  //call functions from article 
  require_once("articles.php");
  //get summaries for this page
  $html .= getSummaries($page_number, $conn);
  $html .= getPagination($current_page ,$article_number);

  //store html in assoc array
  $arr = array (
    'html' => $html
  );

  //return json encoded html
  echo json_encode($html);

?>
