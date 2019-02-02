module.exports = function(app){

    app.get('/', function(req, res){
        app.controllers.index.home( app, req, res);
    });

}