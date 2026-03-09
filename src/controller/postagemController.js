const Postagem = require('../model/postagem')

function cadastrarPostagem(req, res) {
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;

    let postagem = {
        imagemLink: req.body.imagemLink,
        titulo: req.body.titulo,
        texto: req.body.texto,
        autor: req.body.autor
    }

    Postagem.create(postagem).then(() => {
        let sucesso = true
        res.render("index.html", { sucesso, usuario, admin })
    }).catch((err) => {
        console.log(err)
        let erro = true
        res.render("index.html", { erro, usuario, admin })
    })
}

function cadastrarEditarPostagem(req, res) {
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;
    
    console.log("Entrou no cadastrarEditarPostagem  id:" + req.body.id + "TITULO:" + req.body.titulo)
    
    Postagem.findOne({
        where: {
            id: req.body.id
        }
    }).then((postagems) => {
        console.log("Encontrou a postagem" + postagems)
        postagems.imagemLink = req.body.imagemLink
        postagems.titulo = req.body.titulo
        postagems.texto = req.body.texto
        postagems.autor = req.body.autor


        postagems.save()
        res.redirect('/administrador')
    }).catch((erro_recuperar) => {
        console.log("Não encontrou a postagem")
        res.render('index.html', { erro_recuperar, usuario, admin })
    })

}

function formularioPostagem(req, res) {
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;
    res.render('formularioPostagem.html', { admin, usuario })
}

function visualizarPostagem(req, res) {
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;

    Postagem.findOne({
        where: {
            id: req.params.id
        }
    }).then((postagems) => {
        res.render('postagem.html', { postagems, usuario, admin })
    }).catch((erro_recuperar) => {
        res.render('index.html', { erro_recuperar, usuario, admin })
    })
}

async function excluirPostagem(req, res) {
    //falta gerar um popup de "você tem certeza que deseja excluir?"
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;

    if (admin) {
        Postagem.findOne({
            where: {
                id: req.params.id
            }
        }).then((postagems) => {
            
            postagems.destroy()
            res.redirect('/administrador')
        }).catch((erro_recuperar) => {
            res.render('index.html', { erro_recuperar, usuario, admin })
        })
    }
}

function editarPostagem(req, res) {
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;

    if (admin) {
        Postagem.findOne({
            where: {
                id: req.params.id
            }
        }).then((postagems) => {
            let admin = req.session.admin === true
            let usuario = req.session.usuario ? true : false;
            res.render('formularioEditarPostagem.html', { admin, usuario, postagems })
            
            
            
        }).catch((erro_recuperar) => {
            res.render('index.html', { erro_recuperar, usuario, admin })
        })
    }
}

module.exports = {
    cadastrarPostagem,
    formularioPostagem,
    visualizarPostagem,
    excluirPostagem,
    editarPostagem,
    cadastrarEditarPostagem
}