$(document).ready(function() {

  $('#calendar').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  });

  var url ='https://www.googleapis.com/calendar/v3/calendars/taekwondowarwick@gmail.com/events?key=AIzaSyA2RSOuMAEVSQ4Z7E16dl1p7RX-LEPfrGA';
  $.getJSON(url, function(data) {
    for(i in data['items']) {
      item = data['items'][i];
      $("#event-list").append(item.summary + "<br/>");
    }
  });
});
