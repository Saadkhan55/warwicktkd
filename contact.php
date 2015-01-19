<?php
//This php script will validate form fields
//and returns errors if the fields aren't valid
//else it will send the email out to to warwick
//tkd


  $sent = false;
  $error = false;

  //if sent button was clicked with method sent to post
  if(isset($_POST['submit'])) {
    //trim the fields and remove html character to escape them
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = trim($_POST['email']);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    $fieldsArray = array (
      'name' => $name,
      'email' => $email,
      'message' => $message
    );

    //will store all errors in this array
    $errorArray = array();

    //for each element in form (i.e. in fields array) validate them
    foreach($fieldsArray as $key => $val) {
      switch($key) {
        //if name field then check for emptiness
        case 'name':
          if(empty($val)) {
            $error = true;
            $errorArray[$key] = ucfirst($key) . " field was left empty";
          }
         break;    

        //do the same for message field
        case 'message':
          if(empty($val)) {
            $error = true;
            $errorArray[$key] = ucfirst($key) . " field was left empty";
          }    
          break;

        case 'email':
          //check if email is invalid add error
          if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = true;
            $errorArray[$key] = "Invalid Email Address entered";
          }
          //else if valid sanitize email
          else {
             $email = filter_var($email, FILTER_SANITIZE_EMAIL);
          }
          break;
      }
    }

    // if no errors then sent email to webmaster
    if(!$error) {
      $to = "me@haseebmajid.com";
      $subject = "contact form ";
      $msgcontent = "Name: $name<br> Email: $email <br>Message: $message";
      $headers = "MIME_Version: 1.0 \r\n";
      $headers .= "Content-type: text/html; charset=iso-8859-1 \r\n";
      $headers .= "From: $name <$email> \r\n";
      $mailsent = mail($to, $subject, $msgcontent, $headers);

      //if mail sent is true 
      if($mailsent) {
        //set sent variable to true
        $sent = true;
        //unset all variables;
        unset($name);
        unset($email);
        unset($message);
      }
    }
  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>Contact Us</title>
  </head>
  <body>
    <div id="wrapper">
    <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
      <div class="container">
        <div class="row">

          <div class="col-md-12">
            <div class="well well-sm">

            <form class="form-horizontal" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" novalidate>
                <fieldset>
                  <h1 class="text-center header">Contact Us</h1>
                  
                  <?php
                    //if message was sent successfully without any errors then print out a success message
                    if($sent) {
                      echo "<h2 class='success'>Thank you for the message the form was sent successfully</h2>";
                    }
                    //else list all errors
                    else if ($error) {
                      echo '<ul class="error-list unlisted">';
                      foreach($errorArray as $key => $val) {
                        echo "<li>" . ucfirst($key) . ": field error - $val </li>";
                      }
                      echo '</ul>';
                    }
                  ?>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                    <div class="col-md-8">
                    <input id="fname" name="name" type="text" placeholder="Full Name" value="<?php echo (isset($name) ? $name : ""); ?>"class="form-control" required>
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                    <div class="col-md-8">
                      <input id="email" name="email" type="text" placeholder="Email Address" value="<?php echo (isset($email) ? $email : ""); ?>" class="form-control" required>
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                    <div class="col-md-8">
                      <textarea class="form-control" id="message" name="message" placeholder="Enter your messsage for us here" value="<?php echo (isset($message) ? $message : ""); ?>" rows="7" required></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-12 text-center">
                      <button  name="submit" type="submit" class="submit btn btn-primary btn-lg">Submit</button>
                    </div>
                  </div>

                </fieldset>
              </form> <!-- End of form -->
            </div> <!-- End of well -->
          </div> <!-- End of col -->
        </div> <!-- End of row -->
      </div> <!-- End of container -->

    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
    <script src="js/contact.js"></script>
  </body>
</html>

