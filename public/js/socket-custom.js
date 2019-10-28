var socket = io();

// on method -> TO LISTEN event
// emit method -> TO SEND event

socket.on('connect', function () {
    console.log('Connected to Server');
});

socket.on('disconnect', function () {
    console.log('Lost connection with server');
});

// send information
socket.emit('sendMessage', {
    user: 'Carlos',
    message: 'Good Morning Bro'
}, function (res) {
    console.log('server response: ', res);
});

// listen information
socket.on('sendMessage', function (message) {
    console.log('server: ', message);
});