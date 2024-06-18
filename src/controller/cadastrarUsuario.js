const Usuario = require('../model/usuario');

function formulario(req, res){
    res.render('cadastrarUsuario.html')
}

function cadastrar(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        telefone: req.body.telefone
    }
    
    Usuario.create(usuario).then(()=>{
        let sucesso = true;
        res.render('cadastrarUsuario.html', {sucesso});
    }).catch((err)=>{
        console.log(err);
        let erro = true;
        res.render('cadastrarUsuario.html', {erro});
    });
}

module.exports = {
    formulario,
    cadastrar
}