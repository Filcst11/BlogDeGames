const Usuario = require('../model/usuario')

async function mostrarConta(req, res) {
    let admin = req.session.admin === true
    const usuario = req.session.usuario

    if (usuario) {
        if (admin) {
            Usuario.findAll()
                .then((usuarios) => {
                    res.render('conta.html', { usuarios, usuario, admin })
                })
                .catch((err) => {
                    res.render('index.html', { err })
                });
        } else {
            res.render('conta.html', { usuario, admin })
        }
    } else {
        res.render('index.html')
    }
}

function formularioEditarConta(req, res){
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false
    res.render('editarConta.html', {admin, usuario})
}

async function editarConta(req, res){
    const {nome, email, telefone, senha} = req.body
    const userid = req.session.usuario.id

    const usuario = await Usuario.findOne({where: userid})

    if (nome) usuario.nome = nome
    if (email) usuario.email = email
    if (telefone) usuario.telefone = telefone
    if (senha) usuario.senha = senha

    await usuario.save();
    req.session.usuario = usuario;
    res.redirect('/conta');
}

async function excluirConta(req, res){
    const userid = req.session.usuario.id
    const usuario = await Usuario.findOne({where: userid})

    await usuario.destroy()
    req.session.destroy()
    res.redirect('/')
}

function formularioAdminEditarConta(req, res){
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false

    Usuario.findOne({
        where: {
         id: req.params.id
        }
     }).then((usuario)=>{
         res.render('adminEditarConta.html', {usuario, admin})
     }).catch((erro_conta)=>{
         res.render('conta.html', {usuario, admin, erro_conta})
     })
}

async function adminEditarConta(req, res) {
    const { nome, email, telefone, senha } = req.body
    const userid = req.params.id

    const usuario = await Usuario.findByPk(userid)

    if (nome) usuario.nome = nome
    if (email) usuario.email = email
    if (telefone) usuario.telefone = telefone
    if (senha) usuario.senha = senha

    await usuario.save()

    req.session.usuario = usuario

    res.redirect('/conta')
}

async function adminExcluirConta(req, res){
    const userid = req.params.id
    const usuario = await Usuario.findByPk(userid)

    if (req.session.usuario.id === usuario.id) {
        await usuario.destroy();
        req.session.destroy();
        return res.redirect('/');
    } else {
        await usuario.destroy();
        return res.redirect('/conta');
    }
}

module.exports = {
    mostrarConta,
    editarConta,
    formularioEditarConta,
    excluirConta,
    formularioAdminEditarConta,
    adminEditarConta,
    adminExcluirConta
}