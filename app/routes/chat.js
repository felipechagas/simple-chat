module.exports = function(app){

    app.post('/chat', function(req, res){
        app.controllers.chat.iniciaChat(app, req, res);
    });

    app.get('/chat', function(req, res){
        app.controllers.chat.iniciaChat(app, req, res);
    });

}