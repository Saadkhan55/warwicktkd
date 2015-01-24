//wait for document to be ready
$(document).ready(function() {

  //number used in db to associate with grade i.e. white belt = 1 and black tag = 10;
  var gradeNumber;
  //store correct answer
  var correct = 0;
  //current question number
  var questionNo = 1;
  //number of correct answer
  var correctAnswers = 0;

  //on click of start button
  $(".start").click(function() {
    //get grade for questions
    var select = $(".select").val();

    //switch turn name of grade to number i.e. white belt to 1
    switch(select) {
      case 'White Belt': 
        gradeNumber = 1;
        break;

      case 'Yellow Tag': 
        gradeNumber = 2;
        break;

      case 'Yellow Belt': 
        gradeNumber = 3;
        break;

      case 'Green Tag': 
        gradeNumber = 4;
        break;

      case 'Green Belt': 
        gradeNumber = 5;
        break;

      case 'Blue Tag': 
        gradeNumber = 6;
        break;

      case 'Blue Belt': 
        gradeNumber = 7;
        break;

      case 'Red Tag': 
        gradeNumber = 8;
        break;

      case 'Red Belt': 
        gradeNumber = 9;
        break;

      case 'Black Tag': 
        gradeNumber = 10;
        break;
    }
    //get next question
    getNextQuestion(gradeNumber);
    $(".intro").fadeOut(800).empty();
  });

  //gets a random next question for grade or any grade under it
  function getNextQuestion(gradeNumber) {
    $.ajax ({
      type: "POST", 
      url: "getQuestions.php",
      dataType: 'json', 
      data: {
        "gradeNumber" : gradeNumber
      },
      success: function(quiz) {
        $(".question").empty();
        var html = getQuestion(quiz);
        $(".question").append(html);
        $(".warning").hide();
      }
    });
    questionNo++;
  }

  //turn question date into html
  function getQuestion(array) {
    var html = "<h3>" + array.question  + "</h3>";
    html += "<h4 class='warning'>Please select an option</h4>";

    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" classs="choice" id="Choice1" value="option1">' + 
                array.choice1 + 
               '</label>' + 
              '</div>';

    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" class="choice" id="Choice2" value="option2">' + 
                array.choice2 + 
               '</label>' + 
              '</div>';

    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" class="choice" id="Choice3" value="option3">' + 
                array.choice3 + 
               '</label>' + 
              '</div>';

    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" class="choice" id="Choice4" value="option4">' + 
                array.choice4 + 
               '</label>' + 
              '</div>';

   html += '<button type="button" class="btn btn-danger next">Next</button>';
   
   //store correct answer
    correct = array.correct;
    return html;
  }

  //last section -> end
  function getEnd() {
    $(".question").empty();
    $("#quiz-container").append("Number of correct answers " + correctAnswers);
  }

  //checks if option is selected
  function optionSelected() {
    var checked = false;
      $(".question input[type='radio']").each(function() {
        if($(this).is(':checked')) {
          checked = true;
        }
      });
    return checked;
  }

  
  function next() {

    //if no correct icon has been added yet add one if not don't -> i.e. stops multiple icons from appearing when next button is pressed
    if(!$(".question").find(".correct").length) {  
      //for all radios
      $(".question input[type='radio']").each(function() {
        var current = $(this).attr("id");
        //if current radio is correct answer
        if(current == correct) {
          $(this).parent().append("<i class='correct fa fa-check'></i>").fadeIn(500);
        }
        else {
          $(this).parent().append("<i class='wrong fa fa-remove'></i>").fadeIn(500);
        }
      });
    }
  }

  //on click of next body
  $("body").on('click','.next' , function() {
    //if option is selected
    if(optionSelected()) {
      $(".warning").hide();
      //get choice selected 
      var choice = $(".question input[type='radio']:checked").attr("id");
      //if answer is correct increment correct answers by 1
      if(choice == correct) {
        correctAnswers++;
      }

      next();
      if(questionNo < 10) {
        //get next question
        setTimeout(function() {getNextQuestion(gradeNumber)}, 1000);
      }
      else {
        getEnd();
      }
    }
    //else if no option selected
    else {
     $(".warning").fadeIn(800); 
    }
  });
});
