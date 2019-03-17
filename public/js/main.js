$(document).ready(function () {
  module.init();
});

const module = {
  eventsHTML: '',
  nextEvent: undefined,
  currentEvent: undefined,
  room: 0,
  url: 'js/api.json',

  init: function() {
    module.room = document.getElementById('room-input').value;
    module.polling();
  },

  polling: function(){
    $.get(module.url, function(data) {
      module.eventsHTML = "";
      module.nextEvent = undefined;
      module.currentEvent = undefined;
      module.fillEvents(data);
      setTimeout(module.polling,5000);
    });
  },

  fillEvents: function(data) {
    const events = data[module.room]['programs'];
    events.forEach(module.processEvent);
    if (module.currentEvent) {
      const currentEvent = module.currentEvent;
      var currentEventHTML =
        `<h3>
          <strong>${currentEvent.title}</strong> - ${currentEvent.performer}
        </h3>
        <span>${currentEvent.time}</span>
        ${currentEvent.text}`;
      $('.current-event').html(currentEventHTML);
    } else {
      $('.current-event').html("-");
    }

    if (module.nextEvent) {
      const nextEvent = module.nextEvent;
      var nextEventHTML =
        `<h3>${nextEvent.title} - ${nextEvent.performer}</h3>
        <span>${nextEvent.time}</span>`;
      $('.next-event').html(nextEventHTML);
    } else {
      $('.next-event').html("-");
    }

    $('.events').html(module.eventsHTML);
  },

  processEvent: function(event) {
    if (event.break == '1')
      return;

    const splittedTime = event.time.split('-');
    const splittedStartTime = splittedTime[0].split(':');
    const splittedendTime = splittedTime[1].split(':');

    const startTime = new Date();
    startTime.setHours(parseInt(splittedStartTime[0]));
    startTime.setMinutes(parseInt(splittedStartTime[1]));

    const endTime = new Date();
    endTime.setHours(parseInt(splittedendTime[0]));
    endTime.setMinutes(parseInt(splittedendTime[1]));

    const currentDate = new Date();

    var type;
    if (endTime < currentDate) {
      type = 'past';
    }
    else if (startTime > currentDate) {
      type = 'next';
      if (typeof module.nextEvent === 'undefined') {
        module.nextEvent = event;
      }
    }
    else {
      module.currentEvent = event;
      type = 'current'
    };

    module.eventsHTML +=
      `<div class="card col-xs-12">
        <div class="card-body ${type}">
          <span>${event.time}</span>
          <div class="separator"></div>
          <strong>${event.title}</strong> - ${event.performer}
        </div>
      </div>`;
  }
}
