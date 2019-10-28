const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Connected USER');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome to this App'
    });

    client.on('disconnect', () => {
        console.log('Disconnected USER');
    });

    // listen to client
    client.on('sendMessage', (data, cb) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);

        /* if (data.user) {
            cb({ res: 'its OK' });
        } else {
            cb({ res: 'something is wrong' });
        } */
    })
});