const Postagem = require('../model/postagem')

function index(req, res){
    //parte de saber se é admin ou nn
    let admin = true
    
    //parte para receber as informações das postagens
    
    Postagem.findAll({
       
    }).then((postagems)=>{
        res.render('index.html', {admin,postagems})
    }).catch((erro_recuperar)=>{
        res.render('index.html', {erro_recuperar})
    })
        
    
}

function login(req, res){
    console.log("Entrando na página de login")
}

function administrador(req, res){
    Postagem.findAll({
       
    }).then((postagems)=>{
        res.render('administrador.html', {postagems})
    }).catch((erro_recuperar)=>{
        res.render('administrador.html', {erro_recuperar})
    })
}

module.exports = {
    index,
    login,
    administrador
}