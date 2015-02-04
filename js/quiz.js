//***********************************************
// quiz.js
// Takes the grade of the user
// then asks questions randomly from that grade
// or below, 10 questions are asked
// and keeps track of correct answers
// shown at the end.
//
// Once finished can reset the quiz
//**********************************************

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
    //remove current active class and add to clicked class
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



  //********************************************
  // @summary: Uses ajax to get a new question
  // to display. On Success deletes previous 
  // question and adds new one to html
  //
  // @param: gradeNumber - what grade question
  // should be retrieved 1 for white belt
  // 2 for yellow tag etc
  //********************************************
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
        // get html from function in correct format
        var html = getQuestion(quiz);
        $(".question").append(html);
        //if the length of strings really big reduce size
        checkStringLength();
      }
    });
  }

  //********************************************
  // @summary: Using the data from ajax, 
  // generates the question in the correct
  // format with the 4 choices and the title
  // 
  // @param: array - Holds all the data from database
  // for that question such as each choice
  // correct answer etc.
  //
  // @return: Returns html, for the question in 
  // the form of title -> 4 choices.
  //********************************************
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

  //********************************************
  // @summary: checks the length of each label,
  // the inside text that is, if greater than 20
  // change the size of font and padding to make
  // it fit.
  //********************************************
  function checkStringLength() {
    $("label").each(function() {
      var choice = $(this).text();
      
      //if length of text greater than 20 characters
      if( choice.length > 20) {
        //change css to make it smaller
        $(this).css({
          "font-size" : "16px",
          "padding-top" : "27px",
          "padding-right" : "15px"
        });
      }
    });
  }

  //********************************************
  // @summary: Appends html for the final
  // section of the quiz at the end which 
  // shows number of correct answers and
  // reset button to start again
  //********************************************
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

  
  //********************************************
  // @summary: Ads correct answer and 
  // wrong answer icon then.
  //********************************************
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

  //on click of an option/choice from the question
  //show correct answer and get the next question.
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

  //When reset button is clicked reset all variable
  //data, and get next question 
  $("body").on('click','.reset' , function() {
    correctAnswers = 0;
    questionNo = 1;
    $('.end').empty();
    getNextQuestion(gradeNumber);
  });
});
