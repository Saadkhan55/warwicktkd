<?php
  require_once("database.php");
  $db = new Database();

  //get grade number from post json
  $grade_number = filter_input(INPUT_POST, 'gradeNumber', FILTER_SANITIZE_NUMBER_INT);
  $grade_number = (int) $grade_number;

  $db->prepare("SELECT Question, Choice1, Choice2, Choice3, Choice4, Correct  FROM quiz WHERE Grade <= :grade ORDER BY Rand() LIMIT 1");

  //bind results and execute query
  $db->bind(":grade",  $grade_number);

  //bind result to variables
  $result = $db->single();

  $question = $result['Question']; 
  $choice1 = $result['Choice1']; 
  $choice2= $result['Choice2']; 
  $choice3 = $result['Choice3']; 
  $choice4 = $result['Choice4']; 
  $correct = $result['Correct']; 


  //encode values into an array
  $arr = array (
    'question' => $question,
    'choice1' => $choice1,
    'choice2' => $choice2,
    'choice3' => $choice3,
    'choice4' => $choice4,
    'correct' => $correct
  );

    echo json_encode($arr);
?>
