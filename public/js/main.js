$(document).ready(function () {
    var socket = io();
    Input.initialize(socket);

    socket.on('events', function (message) {
        $('#events).html(events(message));
    });

});



function events(events) {
    var output = "";
    events.forEach(function(event) {
        output = output + "<tr><td><strong>"
            + event.name + "</strong></td><td>"
            + event.presenter + "</td><td>"
            + event.startDate + "</td></tr>";
    });
    return output;
}