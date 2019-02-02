/* import server config */
var app = require('./config/server');

/* listening port 3000 */
var server = app.listen(3000, function(){
    console.log('Server running on port 3000');
})

var io = require('socket.io').listen(server);

/* creating conection with WebSocket */
io.on('connection', function(socket){
    console.log('User Connected!');

    socket.on('disconnect', function(){
        console.log('User Disconnected!');
    });
});