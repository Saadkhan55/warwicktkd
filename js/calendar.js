$(document).ready(function() {
  //json feed URL for calendar
  var url ='https://www.googleapis.com/calendar/v3/calendars/taekwondowarwick@gmail.com/events?key=AIzaSyA2RSOuMAEVSQ4Z7E16dl1p7RX-LEPfrGA';

  //datepicker from jquery ui
  $('#calendar').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  })

  $( "#calendar" ).datepicker( "option", "disabled", true );

  //first time calendar loads
  getJsonObjects();

  //on click of next or previous button, get json objects again
  $(document).on("click",".ui-datepicker-next, .ui-datepicker-prev" ,function() {
    getJsonObjects();
  });

  $(document).on("mouseenter", "td", function() {
    $(this).children(".event").fadeIn();
  });

  //*******************************************
  // @summary - Get all the json objects from
  // the feed. If the date matches with 
  // calendar, then add event to calendar
  // else skip the element.
  //*******************************************
  function getJsonObjects() {
    $.getJSON(url, function(data) {
      //for each event in the calendar
      for(i in data['items']) {
        item = data['items'][i];

        var date = getDate(item);
        //if date of current item doesn't match the year and month of calendar skip item
         if(!checkEvent(getDate(item))) {
          continue;
         }

         //add current event to the calendar
         addEventToCalendar(item, date);
      }
    });
  }


  //*******************************************
  // @summary - Get the date of the current
  // json object, coverts date from dateTime
  // then return it
  //
  // @param: item - The current json object
  //
  // @return - returns date in the form 
  // YYYY-DD-MM
  //*******************************************
  function getDate(item) {
    //date format can be date or datetime
    //if datetime is not null must be in 
    //form item.start.dateTime not item.start.date
    if(item.start.dateTime != null) {
      //get substring to only include YYYY-DD-MM (not time aswell)
      var date = item.start.dateTime.substring(0, 10);
    }
    else {
      var date = item.start.date;
    }

    return date
  }

  //*******************************************
  // @summary - Checks if the current json
  // element date matches current calendar
  // date (That is month and year)
  //
  // @param: date - in the form YYYY-DD-MM
  //
  // @return - returns true if date of current
  // calendar matches json element date
  //*******************************************
  function checkEvent(date) {

    // year - Split date by - to get the year off the current json item
    // month - Split date by - to get month - parse an int, subtract by 1 calendar starts at 0 (january_
    // day - Split daye by - to get day
    // calendarYear - current year on the calendar
    // calendarMonth - current month on the calendar
    
    var year = date.split("-")[0];
    var month = (parseInt((date.split("-")[1])) - 1);
    var day = date.split("-")[2];
    var calendarYear = $("tr:nth-child(2) td:first-child").attr("data-year");
    var calendarMonth = parseInt($("tr:nth-child(2) td:first-child").attr("data-month"));

    //current json item year equals 
    //the year on the current calendar
    //And json item month equals
    //the month on the current calendar
    if(year == calendarYear && month == calendarMonth) {
      return true;
    }

    //return false  if dates dont match up
    return false;
  }

  //*******************************************
  // @summary - adds event to calendar
  // appends html to td 
  //
  // @param: item - current json item
  // @param: date - current date of json object
  //*******************************************
  function addEventToCalendar(item, date) {
    var day = date.split("-")[2];
    var disabled = false;
    var hasEvent = false;

    //Check if td has class disabled means from previous month
    disabled = $("td:contains("+day+")").hasClass("ui-state-disabled");
    //Check if td already has class hasEvent
    hasEvent = $("td:contains("+day+") div").hasClass("hasEvent");

    //if not disbaled then from current month so append event
    if(!disabled) {
     $("td:contains("+day+") a").append("<div class='event hide'>" + item.summary + "</div>");
     //if the date doesn't already have event icon added
     if(!hasEvent) {
       $("td:contains("+day+")").prepend("<div class='hasEvent'></div>");
     }
    }
  }
});

