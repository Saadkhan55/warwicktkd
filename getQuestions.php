<?php
  require_once("database.php");
  $db = new Database();
  //connect to database
  $conn = $db->connect();

  //get grade number from post json
  $grade_number = filter_input(INPUT_POST, 'gradeNumber', FILTER_SANITIZE_NUMBER_INT);

  $stmt = $conn -> prepare("SELECT Question, Choice1, Choice2, Choice3, Choice4, Correct  FROM quiz WHERE Grade <= ? ORDER BY Rand() LIMIT 1");

  //bind results and execute query
  $stmt->bind_param("s",  $grade_number);

  if($stmt->execute()) {
    //bind result to variables
    $stmt->bind_result($question, $choice1, $choice2, $choice3, $choice4, $correct);

    //while there are result fetch them
    while($stmt->fetch()) {
      //encode values into an array
      $arr = array (
        'question' => $question,
        'choice1' => $choice1,
        'choice2' => $choice2,
        'choice3' => $choice3,
        'choice4' => $choice4,
        'correct' => $correct
      );
    }
  }

    echo json_encode($arr);
?>
