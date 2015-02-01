//wait for document to be ready
$(document).ready(function() {

  //number used in db to associate with grade i.e. white belt = 1 and black tag = 10;
  var gradeNumber;
  //current question number
  var questionNo = 1;
  //number of correct answer
  var correctAnswers = 0;
  //choice
  var correct;

  //on click on a radio button on intro screen
  $(".radio-inline").click(function() {
    //remove current active class
    $("#quiz-container .radio-inline").removeClass("active")
    $(this).addClass("active");
  });

  //on click of start button
  $(".start").click(function() {
    //get selected radio button
    var selected = $("input[type='radio']:checked");
    //value of button is grade number so get value
    gradeNumber = selected.val();

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
  }

  //turn question date into html
  function getQuestion(array) {
    var html = "<h3>" + array.question  + "</h3>";
    html += "<div class='container'> <div class='row'>";
    html += '<div class="question-no"> <div class="question-title">Questions</div> '
         + questionNo +'/10</div>';

    html += '<div class="option col-md-6">';
    html += '<div class="number">1</div>';
    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" class="choice" id="Choice1" value="option1">' + 
                array.choice1 + 
               '</label>' + 
            '</div>' +
          '</div>';

    html += '<div class="option col-md-6">';
    html += '<div class="number">2</div>';
    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" class="choice" id="Choice2" value="option2">' + 
                array.choice2 + 
               '</label>' + 
              '</div>' + 
            '</div>' +  // end of options
          '</div>'; // end of row

    html += '<div class="row">'

    html += '<div class="option col-md-6">';
    html += '<div class="number">3</div>';
    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" class="choice" id="Choice3" value="option3">' + 
                array.choice3 + 
               '</label>' + 
             '</div>' +  
            '</div>'; //end of option

    html +=  '<div class="option col-md-6">';
    html +=  '<div class="number">4</div>';
    html += '<div class="radio">' + 
              '<label>' + '<input type="radio" name="Choices" class="choice" id="Choice4" value="option4">' + 
                array.choice4 + 
               '</label>' + 
            '</div>' +
          '</div>' + //end of option
        '</div>'; // end of row

    html += '</div>'; // end of container

    correct = array.correct;
    return html;
  }

  //last section -> end
  function getEnd() {
    $(".question").empty();
    var html = '<div class="container end">' + 
                '<div class="row">' + 
                  '<div class="question-no">' + 
                    '<div class="question-title">Correct Answers</div>' + 
                    correctAnswers +  '/10' +
                  '</div>' + 
                  '<button class="reset btn btn-danger">Reset</button>' +
              '</div>' + 
             '</div>';
    $('.question').append(html);
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
          $(this).parent().addClass("correct-answer");
        }
        else {
          $(this).parent().append("<i class='wrong fa fa-remove'></i>").fadeIn(500);
          $(this).parent().addClass("wrong-answer");
        }
      });
    }
  }

  //on click of next body
  $("body").on('click','.option' , function() {
      //get choice selected 
      var choice = $(this).find('.choice').attr("id");
      //if answer is correct increment correct answers by 1
      if(choice == correct) {
        correctAnswers++;
      }

      next();
      //set timeout runs twice so for 10 questions
      if(questionNo < 10) {
        //get next question
        questionNo++;
        setTimeout(function() {getNextQuestion(gradeNumber)}, 1000);
        
        //stop multiple running
        return false;
      }
      else {
        setTimeout(function() {getEnd()}, 1000);
        return false;
      }

  });

  //on click of next body
  $("body").on('click','.reset' , function() {
    correctAnswers = 0;
    questionNo = 1;
    $('.end').empty();
    getNextQuestion(gradeNumber);
  });
});
