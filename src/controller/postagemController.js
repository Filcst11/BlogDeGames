const Postagem = require('../model/postagem')

function cadastrarPostagem(req, res){
    let postagem = {
        imagemLink: req.body.imagemLink,
        titulo: req.body.titulo,
        texto:  req.body.texto,
        autor: req.body.autor
    }

    Postagem.create(postagem).then(()=>{
        let sucesso = true
        res.render("index.html", {sucesso})
    }).catch((err)=>{
        console.log(err)
        let erro = true
        res.render("index.html", {erro})
    })
}

function formularioPostagem(req, res){
    res.render('formularioPostagem.html')
}

function visualizarPostagem(req, res){
    
    Postagem.findOne({
       where: {
        id: req.params.id
       }
    }).then((postagems)=>{
        res.render('postagem.html', {postagems})
    }).catch((erro_recuperar)=>{
        res.render('index.html', {erro_recuperar})
    })
}

function excluirPostagem(req, res){

}


module.exports = {
    cadastrarPostagem,
    formularioPostagem,
    visualizarPostagem,
    excluirPostagem
}