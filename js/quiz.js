//wait for document to be ready
$(document).ready(function() {

  //number used in db to associate with grade i.e. white belt = 1 and black tag = 10;
  var gradeNumber;
  //store correct answer
  var correcti = 0;
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
    $(".intro").hide();

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
      }
    });
    questionNo++;
  }

  //turn question date into html
  function getQuestion(array) {
    var html = "<h3>" + array.question  + "</h3>";

    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" id="Choice1" value="option1" checked>' + 
                array.choice1 + 
               '</label>' + 
              '</div>';

    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" id="Choice2" value="option2">' + 
                array.choice2 + 
               '</label>' + 
              '</div>';

    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" id="Choice3" value="option3">' + 
                array.choice3 + 
               '</label>' + 
              '</div>';

    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" id="Choice4" value="option4">' + 
                array.choice4 + 
               '</label>' + 
              '</div>';

   html += '<button type="button" class="btn btn-danger next">Next</button>';
   
   //store correct answer
    correct = array.correct;
    return html;
  }

  function getEnd() {
    $(".question").empty();
    $("#quiz-container").append("Number of correct answers " + correctAnswers);
  }

  $("body").on('click','.next' , function() {
    //get choice selected 
    var choice = $(".question input[type='radio']:checked").attr("id");
    //if answer is correct increment correct answers by 1
    if(choice == correct) {
      correctAnswers++;
    }

    if(questionNo < 10) {
      //get next question
      getNextQuestion(gradeNumber);
    }
    else {
      getEnd();
    }
  });
});
