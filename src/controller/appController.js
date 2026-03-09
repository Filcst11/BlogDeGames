const Postagem = require('../model/postagem')

function index(req, res){
    //parte de saber se é admin ou nn
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;


    //parte para receber as informações das postagens
    
    Postagem.findAll({
       
    }).then((postagems)=>{
        res.render('index.html', {postagems, usuario, admin})
    }).catch((erro_recuperar)=>{
        res.render('index.html', {erro_recuperar, usuario, admin})
    })
        
    
}

function administrador(req, res){
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;

    Postagem.findAll({
       
    }).then((postagems)=>{
        res.render('administrador.html', {postagems, usuario, admin})
    }).catch((erro_recuperar)=>{
        res.render('administrador.html', {erro_recuperar,  usuario, admin})
    })
}

module.exports = {
    index,
    administrador
}