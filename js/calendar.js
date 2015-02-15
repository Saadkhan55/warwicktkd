$(document).ready(function() {
  //json feed URL for calendar
  var url ='https://www.googleapis.com/calendar/v3/calendars/taekwondowarwick@gmail.com/events?key=AIzaSyA2RSOuMAEVSQ4Z7E16dl1p7RX-LEPfrGA';

  //datepicker from jquery ui
  $('#calendar').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  });

  //first time load all events
  getJsonObjects();

  //on click of each date, get json objects again
  $(document).on("mouseup",".ui-datepicker-default, .ui-state-hover, .ui-datepicker-next, .ui-datepicker-prev" ,function(e) {
    getJsonObjects();
  });
  
  //on hover of an item with event
  $(document).on("mouseover","td, .ui-state-hover" ,function() {
    $(this).find(".event").fadeIn("500");
  });

  //on hover of an item with event
  $(document).on("mouseleave","td" ,function() {
    $(this).find(".event").fadeOut();
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
  // appends html to td, checks for each element
  // (date) if element date matches current date.
  //
  // If the element has an event
  // appends to the div event as a pose
  // to creating a new one.
  //
  // @param: item - current json item
  // @param: date - current date of json object
  //*******************************************
  function addEventToCalendar(item, date) {
    var day = date.split("-")[2];

    //for each element with that day (can have dates from previous months showing)
    $("td").each(function() {
      //disabled - check if date is from previous month
      //hasEvent - check if element already has an event inside it
      //date - get date of current element
      var disabled = $(this).hasClass("ui-state-disabled");
      var hasEvent = $(this).children("div").hasClass("hasEvent");
      var date = $(this).children("a").text();

      //if day is less than 10, add to date so can check for equality
      if(parseInt(day) < 10) {
        date = "0" + date;
      }

      //if not disabled AND date of event equals date of day
      if(!disabled && (date == day)) {
        //if element doesn't have an event
        if(!hasEvent) {
          //add event and hasEvent ( blue box)
          $(this).append("<div class='event'>" + getInfo(item) + "</div>");
          $(this).prepend("<div class='hasEvent'></div>");
        }
        else {
          //else prepend event to event div
          $(this).find(".event").prepend(getInfo(item));
        }
      }
    });
  }

  //*******************************************
  // @summary - gets information to be 
  // displayed in calendar. First
  // tests that the value is not null
  // if not then added to string to be 
  // returned
  // 
  // @param: item - current json item
  // @return: information - string containing
  // information about the event such as 
  // location.
  //*******************************************
  function getInfo(item) {
    var eventLocation = item.location;
    var eventStartTime = item.start.dateTime;
    var eventEndTime = item.end.dateTime;
    var information = "<br></br>" + item.summary;

    if(eventLocation != null) {
      information += "</br> Location: " + eventLocation;
    }
    if(eventStartTime != null) {
      information += "</br> Starts at: " + eventStartTime.substring(11,16) + "<br> Ends at: " + eventEndTime.substring(11,16);
    }

    return information;
  }
});

