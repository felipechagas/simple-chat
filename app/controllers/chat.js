module.exports.iniciaChat = function(app, req, res){

    var formData = req.body;

    req.assert('apelido', 'Nome ou Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou Apelido deve conter entre 3 e 15 caracteres').len(3,15);

    var erros = req.validationErrors();
    console.log(erros);

    if(erros){
        res.render("index", { validation : erros });
        return;
    }

    res.render('chat');
}