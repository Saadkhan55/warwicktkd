//***********************************************
// Contact.js
//
// Validates form fields in the contact.php
// only 3 which are all required,
// first gets the values from the fields if 
// are empty adds an error class, 
// waits for user to submit
//**********************************************
$(document).ready(function() {
  $(".submit").click(function(e) {
    //get value from form fields
    var name = $("#fname").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var captcha = grecaptcha.getResponse();
    console.log(captcha);

    //r emove all error classes before checking again, 
    // the class will be added again if empty
    $("#fname").removeClass("error");
    $("#email").removeClass("error");
    $("#message").removeClass("error");
    $("#captcha").removeClass("error");

    //check for emptyiness from all 3 fields
    if(name == "") {
      //give class error
      $("#fname").addClass("error");
      //change placeholder text
      $("#fname").attr("placeholder", "Name is required");
      //prevent default submit if error
      e.preventDefault();
    }

    if(email == "") {
      $("#email").addClass("error");
      $("#email").attr("placeholder", "Email is required");
      e.preventDefault();
    }

    if(message == "") {
      $("#message").addClass("error");
      $("#message").attr("placeholder", "Message is required");
      e.preventDefault();
    }

    if(captcha.length == 0) {
      $("#captcha").addClass("error");
      console.log("ERROE");
      e.preventDefault();
    }
  
  });
});
//***********************************************
// Active.js
// This JS file changes the active class on the 
// navbar element (giving them a blue colour
// as a pose to black).
//
// It uses the page title to determine what page
// it is.
//**********************************************
$(document).ready(function() {
  //get page title to see which navabar element to give active
  var pageName = $(document).find("title").text();

  //use switch statement to work out what to add active to
  switch (pageName) {
    case "Home Page" :
      $(".home").addClass("active");
      break;

    case "News Page" :
      $(".news").addClass("active");
      break;

    case "Gallery" :
      $(".news").addClass("active");
      break;

    case "Calendar" :
      $(".news").addClass("active");
      break;

    case "Beginners" :
      $(".about").addClass("active");
      break;

    case "Training" :
      $(".about").addClass("active");
      break;

    case "ITF or WTF":
      $(".about").addClass("active");
      break;

    case "Exec Team" :
      $(".about").addClass("active");
      break;

    case "Theory Game" :
      $(".students").addClass("active");
      break;

    case "White Belt (10th Kup)" :
      $(".students").addClass("active");
      break;

    case "Yellow Tag (9th Kup)" :
      $(".students").addClass("active");
      br;eak;

    case "Yellow Belt (8th Kup)" :
      $(".students").addClass("active");
      break;

    case "Green Tag (7th Kup)" :
      $(".students").addClass("active");
      break;

    case "Green Belt (6th Kup)" :
      $(".students").addClass("active");
      break;

    case "Blue Tag (5th Kup)" :
      $(".students").addClass("active");
      break;

    case "Blue Belt (4th Kup)" :
      $(".students").addClass("active");
      break;

    case "Red Tag (3rd Kup)" :
      $(".students").addClass("active");
      break;

    case "Red Belt (2nd Kup)" :
      $(".students").addClass("active");
      break;

    case "Black Tag (1st Kup)" :
      $(".students").addClass("active");
      break;

    case "Contact Us" :
      $(".contact").addClass("active");
      break;
  }
});
//***********************************************
// news.js
// When a pagination page is clicked
// works out what articles would be on that
// page then uses ajax to get those articles back
// without needing a page refresh.
//**********************************************
$(document).ready(function() {
  $("body").on('click', '.pagination li ', function(e) {
    e.preventDefault();

    //remove active class from current element
    $(".pagination .active").removeClass("active");

    //get href page link to see which page to show (dynamically)
    var href = $(this).children().attr("href");

    //will store page number user is trying to see
    var pageNumber;
    //if href has no ?p=number, then make it equal to 1
    if(href == "news.php") {
      pageNumber = 1;
    }
    //else get number from href
    else {
      pageNumber = parseInt(href.match("[0-9]+"), 10);
    }

   //current page used in pagination to determine
   //what pages to show besides it
    var currentPage = pageNumber;

   // as this will be used for offset, (if only 5 articles);
   // then page number -1  = 0, 0 *5 = 0
   // offset in query will be 0. 
    pageNumber = (pageNumber - 1) * 5; 

    //using ajax sent pagenumber to php file which will return what
    // 5 articles summaries to display on the screen
    $.ajax ({
      type: "POST", 
      url: "getArticles.php",
      dataType: 'json', 
      data: {
        "pageNumber" : pageNumber,
        "currentPage" : currentPage
      },
      success: function(html) {
        //remove everything inside news-story div
        $(".news-story").empty();
        //apend html to div
        $(".news-story").append(html);
        //scroll to top
        $("html, body").animate({ scrollTop: 0 }, "slow");
      }
    });
    
    //and add active class to clicked pagination
    $(this).addClass("active");
  });

  //hide pictures if video exists
  if($(".embed-responsive").length) {
    $(".news-story").find("img").hide();
  }
});
//***********************************************
// scroll.js
//
// Very simply smoothly scrolls to class/id's
// when target of anchor such as #header.
//
// Mainly used for to top button near bottom
// left of screen
// 
// Hide to top button when at top of screen
//**********************************************
$(document).ready(function(){

  $('#up').hide(); 

  $('#up').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#up').fadeIn();
    } else {
      $('#up').fadeOut();
    }
  });

});
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

  //*******************************************
  // gradeNumber - white belt is 1 
  // black tag = 10 etc, gets questions based on 
  // grade
  //
  // questioNo - Keeps track of number of 
  // questions only 10 questions per 'round'
  //
  // correctAnswer - Keeps track number of 
  // correct answers, shows the user at the
  // end
  //
  // correct - current correct answer in the 
  // form Choice[nu,]
  //
  // clicked - checks if choice has already 
  // clicked i.e. doesn't allow double clicks
  //
  // start - checks if user has clicked the 
  // start button to begin the quiz
  //*******************************************
  var gradeNumber;
  var questionNo = 1;
  var correctAnswers = 0;
  var correct;
  var clicked = false;
  var start = false;

  //on click on a radio button on intro screen
  $(".radio-inline").click(function() {
    $("#quiz-container .radio-inline").removeClass("active")
    $(this).addClass("active");
  });

  //on click of start button, get selected radio button
  //get the value to get gradeNumber then get next question
  $(".start").click(function() {
    var selected = $("input[type='radio']:checked");
    gradeNumber = selected.val();

    getNextQuestion(gradeNumber);
    $(".intro").fadeOut(800).empty();
    start = true;
  });
  
  //When an option has been clicked
  //select choice and compare with correct
  //answer. Then show correct answer.
  //
  //If less than 10 questions have been 
  //asked get next question
  //
  //else
  //get end screen with correct answers
  //and reset button
  $("body").on('click','label' , function() {

      //if the option has been clicked return
      if(clicked || !start) {
        return;
      }
      //else user has clickec set to true
      else {
        clicked = true;
      }

      var choice = $(this).find('.choice').attr("id");
      if(choice == correct) {
        correctAnswers++;
      }

      next();

      //if less than 10, get next question
      if(questionNo < 10) {
        questionNo++;
        setTimeout(function() {getNextQuestion(gradeNumber)}, 1000);

        return false;
      }
      //else get end screen
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
        var html = getQuestion(quiz);
        $(".question").append(html);

        checkStringLength();
        clicked = false;
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


    var html = "<h3 class=''>" + array.question  + "</h3>";
    html += "<div class='container'> <div class='row'>";
    html += '<div class="question-no"> <div class="question-title">Questions</div> '
         + questionNo +'/10</div>';

    var numbers = [1,2,3,4];


      //for each choice (4 choices)
      for(i = 1; i < 5; i++) {
        
        //randomElement = is a random index from array
        //random = pick a random element from numbers index
        var randomElement = Math.floor(Math.random()*numbers.length);
        var random = numbers[randomElement];
        //splice array to get rid of element choosen so not choosen twice
        numbers.splice($.inArray(random, numbers),1);
        var choice = "ERROR";

        switch(random) {
          case 1:
            choice = array.choice1;
            break;

          case 2:
            choice = array.choice2
            break;

          case 3:
            choice = array.choice3;
            break;

          case 4:
            choice = array.choice4;
            break;
        }

        html += '<div class="option col-md-6">';
        html += '<div class="number">'+ i +'</div>';
        html += '<div class="radio">' + 
          '<label>' + '<input type="radio" name="Choices" class="choice" id="Choice'+random+'" value="option"'+ random +'>' + 
          choice + 
          '</label>' + 
          '</div>' +
          '</div>';

    }

    html += '</div>'; // end of container
        '</div>'; // end of row

    correct = array.correct;
    console.log(correct);
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

});
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=6a8a149d26824bfca78c)
 * Config saved to config.json and https://gist.github.com/6a8a149d26824bfca78c
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),a=n.data("bs.carousel"),s=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e),r="string"==typeof e?e:s.slide;a||n.data("bs.carousel",a=new i(this,s)),"number"==typeof e?a.to(e):r?a[r]():s.interval&&a.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),n="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(n&&!this.options.wrap)return e;var a="prev"==t?-1:1,s=(i+a)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,n){var a=this.$element.find(".item.active"),s=n||this.getItemForDirection(e,a),r=this.interval,o="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var d=s[0],c=t.Event("slide.bs.carousel",{relatedTarget:d,direction:o});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(s)]);h&&h.addClass("active")}var p=t.Event("slid.bs.carousel",{relatedTarget:d,direction:o});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,a.addClass(o),s.addClass(o),a.one("bsTransitionEnd",function(){s.removeClass([e,o].join(" ")).addClass("active"),a.removeClass(["active",o].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(a.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(p)),r&&this.cycle(),this}};var n=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this};var a=function(i){var n,a=t(this),s=t(a.attr("data-target")||(n=a.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var r=t.extend({},s.data(),a.data()),o=a.attr("data-slide-to");o&&(r.interval=!1),e.call(s,r),o&&s.data("bs.carousel").to(o),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",a).on("click.bs.carousel.data-api","[data-slide-to]",a),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(a).remove(),t(s).each(function(){var n=t(this),a=e(n),s={relatedTarget:this};a.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(a[0],i.target)||(a.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),a.removeClass("open").trigger("hidden.bs.dropdown",s))))}))}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new r(this)),"string"==typeof e&&n[e].call(i)})}var a=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.3.5",r.prototype.toggle=function(n){var a=t(this);if(!a.is(".disabled, :disabled")){var s=e(a),r=s.hasClass("open");if(i(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var o={relatedTarget:this};if(s.trigger(n=t.Event("show.bs.dropdown",o)),n.isDefaultPrevented())return;a.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",o)}return!1}},r.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var a=e(n),r=a.hasClass("open");if(!r&&27!=i.which||r&&27==i.which)return 27==i.which&&a.find(s).trigger("focus"),n.trigger("click");var o=" li:not(.disabled):visible a",l=a.find(".dropdown-menu"+o);if(l.length){var d=l.index(i.target);38==i.which&&d>0&&d--,40==i.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var o=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=o,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s,r.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",r.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),a=n.data("bs.tab");a||n.data("bs.tab",a=new i(this)),"string"==typeof e&&a[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var a=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),r=t.Event("show.bs.tab",{relatedTarget:a[0]});if(a.trigger(s),e.trigger(r),!r.isDefaultPrevented()&&!s.isDefaultPrevented()){var o=t(n);this.activate(e.closest("li"),i),this.activate(o,o.parent(),function(){a.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:a[0]})})}}},i.prototype.activate=function(e,n,a){function s(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),o?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),a&&a()}var r=n.find("> .active"),o=a&&t.support.transition&&(r.length&&r.hasClass("fade")||!!n.find("> .fade").length);r.length&&o?r.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),r.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var a=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',a).on("click.bs.tab.data-api",'[data-toggle="pill"]',a)}(jQuery),+function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function i(e){return this.each(function(){var i=t(this),a=i.data("bs.collapse"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!a&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),a||i.data("bs.collapse",a=new n(this,s)),"string"==typeof e&&a[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.5",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,a=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(a&&a.length&&(e=a.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){a&&a.length&&(i.call(a,"hide"),e||a.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return o.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var a=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(n.TRANSITION_DURATION):a.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var a=t(n);this.addAriaAndCollapsedClass(e(a),a)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var a=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=a,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var a=t(this);a.attr("data-target")||n.preventDefault();var s=e(a),r=s.data("bs.collapse"),o=r?"toggle":a.data();i.call(s,o)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var a=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(a,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map
//***********************************************
// Accordion.js Changes icon next to accordion
// when closed shows a minus, when opened by a 
// user click it shows a plus.
// Only one accordion can be opened at one
//**********************************************
$(document).ready(function() {

  $(function() {
    //when accordion is opened
    $('.collapse').on('shown.bs.collapse','' ,function (e) {
      //get opened div id (is unique)
      var panelId = "#" + e.currentTarget.id;
      //select panel-title, add open to it
      $(panelId).parent().children().children().toggleClass("open");
    });
  }); //end of open function

  //similar to function above except when accordion panel is closed
  $(function() {
    $('.collapse').on('hidden.bs.collapse','' ,function (e) {
      var panelId = "#" + e.currentTarget.id;
      $(panelId).parent().children().children().toggleClass("open");

    });
  }); //end of hidden function
});
//***********************************************
// theory.js
//
// Hides/shows the korean theory when the
// hide/show button is pressed.
//
// Starts of with hide and when clicked
// hide the second column of the theory
// otherwise shows the second column
//**********************************************
$(document).ready(function() {
  $(".btn-primary").click(function() {
    //if button has text show
    if($(this).html() == "Hide") {
      //change hide second table
      $(this).html("Show");
      $(".theory tr :nth-child(2)").fadeOut("500");
    }
    else {
      //else do opposite
      $(this).html("Hide");
      $(".theory tr :nth-child(2)").fadeIn("1000");
    }
  });
});

//***********************************************
//Gallery.js: Lightbox
//**********************************************
$(document).ready(function() {


  //These variables do the following
  //imagesArray - stores the src of every image inside the gallery div
  //index - keeps track of what index the current image src is in the imagesArray variables
  //src - the src of the image the user clicks on
  var imagesArray;
  var index;
  var src;

  //if user clicks on any image in the gallery
  $(".gallery .img-responsive").click(function() {

    //get src of this image
    src = $(this).attr("src");

    //show lightbox, append image into lightbox
    //disable overflow so that scroll bar disappears
    $("#lightbox").show();
    $("#content").append("<img class='light-image' src='" +  src + "'>"); 
    $("body").css("overflow", "hidden");

    //images array maps every image src inside gallery div 
    //to an item in the array
    imagesArray = $(".gallery").find("img").map(function()
    {
      return $(this).attr("src");
    }).get();

    //get index of current image being displayed, 
    //so we know which image to get next
    index = getIndex(src);

    //set margin so image is vertically centered
    setMargin();
    
  });

  //on scrollwheel (on mouse)
  $('#lightbox').on( 'DOMMouseScroll mousewheel', function ( event ) {
    //if scroll down, get next image
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { 
      next(index);
      index++;
    } 
    
    //else scroll up get prev image
    else {
      prev(index);
      index--;
    }
  });



  //on click of right icon, get next image from array
  //add 1 to index
  $("#lightbox").on("click", ".fa-chevron-right", function(e) {
    e.stopPropagation();
    next(index);
    index++;
  });

  //similiar to function above except goes backwards in the imagesArray
  $("#lightbox").on("click", ".fa-chevron-left", function(e) {
    e.stopPropagation();
    prev(index);
    index--;
  });

  //on click of anywhere hide lightbox 
  //and reset everything
  $("body").on("click", "#lightbox", function() {
    $("#lightbox").hide();
    $(".light-image").remove();
    $("body").css("overflow", "scroll");
  });


  //for touch events (for mobile)
  var el = document.getElementById("lightbox");
  var touch = new Hammer.Manager(el);

  touch.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );

  //functions same as above but made for mobile touch
  touch.on("swiperight", function(e) {
    e.stopPropagation();
    next(index);
    index++;

  });

  touch.on("swipeleft", function(e) {
    e.stopPropagation();
    prev(index);
    index--;
  });

  touch.on("doubletap", function() {
    $("#lightbox").hide();
    $(".light-image").remove();
    $("body").css("overflow", "scroll");
  });


  //@summary - gets the index of the src paramater where it exists 
  //in the imagesArray
  //@param src - src of the image the user clicked on
  //@return index - stores index of src inside imagesArray
  function getIndex(src) {
    var index = 0;

    //for each image inside gallery div
    $(".gallery .img-responsive").each(function() {

      //if match found in imagesArray
      //return false
      //else increment index
      if(src === $(this).attr("src")) {
        return false;
      }
      index++;
    });

    return index;
  }


  //@summary - works out how much margin-top needs to be applied to the image
  function setMargin() {
    //get image height
    var imageHeight = $(".light-image").height();
    //get how much pixels from top one of the navigations buttons are
    var pixelsFromTop = $(".fa-chevron-right").position().top;
    
    //the margin top is pixels from top - height of image divided by 2
    //since we want halfway point of image inline with navigation buttons
    var marginTop = (pixelsFromTop - (imageHeight/2)) + "px";

    //add css to image
    $(".light-image").css("margin-top", marginTop);
  }

  //@summary - changes images gets next image in imagesArray
  //@param index - index of current image in array
  function next(index) {

    //if index plus one is equal to array length, 
    //start at 0 to add wrap around
    if(index+1 === imagesArray.length) {
      index = 0;
    }

    //update image
    $(".light-image").attr("src",  imagesArray[index+1]); 
    setMargin();
  }

  //@summary - changes images gets previous image in imagesArray
  //@param index - index of current image in array
  function prev(index) {
    //if index at 0, add wrap around
    //so get last image
    if(index === 0) {
      index = imagesArray.length;
    }

    //update image
    $(".light-image").attr("src",  imagesArray[index-1]); 
    setMargin();
  }

});

//***********************************************
// video_play.js this will pause the carousel
// when a youtube is played. 
//**********************************************
var tag = document.createElement('script');

//add script to create iframe
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var src = $(".active #player").attr("name");

//add iframe from src (youtube) create youtube player object
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {         
    videoId: src,
         events: {
           'onStateChange': onPlayerStateChange
         }
  });
}

//on player when is played
function onPlayerStateChange(event) {
  switch(event.data){
    case 1:
      $("#carousel").carousel('pause');
      break;

    default:
      $("#carousel").carousel();
      break;
  }
}
//***********************************************
// team.js Changes exec team shown when 
// user clicks on different year. For example
// 2014 exec is hiddem until user clicks on it
//**********************************************
$(document).ready(function() {
  //on pagination click
  $(".pagination-css").click(function(e) {
    e.preventDefault();

    //remove active class from all paginations except the 
    //one the user clicked
    $(".pagination").children("li").removeClass("active");
    $(this).parent("li").addClass("active");

    //get id of clicked pagination
    var id = $(this).attr("id");

    //for each exec team
    $(".new-exec").each(function(e) {

      //get year for this team
      var teamYear = $(this).attr("id");

      //if year matches the year the user clicked
      //show that group
      if(id == teamYear) {
        $(this).removeClass("hidden");
      }
      //else hide this exec group
      else {
        $(this).addClass("hidden");
      }
    });
  
  });
});
