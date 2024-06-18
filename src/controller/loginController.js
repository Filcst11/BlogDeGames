const Usuario = require('../model/usuario')

function formularioLogin(req, res){
    res.render('login.html')
}

async function autenticar(req, res){
    const usuario = await Usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    })
    
    if (usuario != null){
        req.session.autorizado = true
        req.session.usuario = usuario

        if(usuario.admin){
            req.session.admin = true
            res.redirect('/')
        }
        else{
            req.session.admin = false
            res.redirect('/')
        }
    }
    else{
        let erro_autenticacao = true
        res.render('login.html', {erro_autenticacao})
    }
}

function logout(req, res){
    req.session.destroy()
    res.redirect('/')
}

module.exports = {
    formularioLogin,
    autenticar,
    logout
}