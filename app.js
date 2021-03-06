/* import server config */
var app = require('./config/server');

/* listening port 3000 */
var server = app.listen(3000, function(){
    console.log('Server running on port 3000');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/* creating conection with WebSocket */
io.on('connection', function(socket){
    console.log('User Connected!');

    socket.on('disconnect', function(){
        console.log('User Disconnected!');
    });

    socket.on('msgToServer', function(data){
        socket.emit(
            'msgToClient',
            { apelido: data.apelido, msg: data.msg }
        );
        socket.broadcast.emit(
            'msgToClient',
            { apelido: data.apelido, msg: data.msg }
        );
        
        if(parseInt(data.apelido_atualizado) == 0) {
            socket.emit(
                'usersToClient',
                { apelido: data.apelido }
            );
            socket.broadcast.emit(
                'usersToClient',
                { apelido: data.apelido }
            );
        }
    }); 
});