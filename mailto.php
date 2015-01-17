<?php

// define variables and set to empty values
//if request method is post
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $err = false;

  if (empty($_POST["name"])) {
    $nameErr = "Name is required"
    $err = true;
    header("Location: contact.php");
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
    $err = true;
    header("Location: contact.php");
  } else {
    $email = test_input($_POST["email"]);
  }

  if (empty($_POST["Message"])) {
    $messageErr = "Message is required";
    $err = true;
    header("Location: contact.php");
  } else {
    $message = test_input($_POST["message"]);
  }

  $to = "hmajid2301@gmail.com";
  $subject = "Contact-Us ".$name;
  $header = "From: ".$email;

  mail($to,$subject,$message);
}

  header("Location: contact.php");
?>
