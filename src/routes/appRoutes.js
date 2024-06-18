const express = require('express');
const router  = express.Router();
const appController = require('../controller/appController')
const cadastrarUsuario = require('../controller/cadastrarUsuario')
const postagemController = require('../controller/postagemController')
const loginController = require('../controller/loginController')
const contaController = require('../controller/contaController')

router.get('/', appController.index)

router.get('/cadastrarUsuario', cadastrarUsuario.formulario)
router.post('/cadastrarUsuario', cadastrarUsuario.cadastrar)
router.get('/login', loginController.formularioLogin)
router.post('/login', loginController.autenticar)
router.get('/logout', loginController.logout)
router.get('/administrador', appController.administrador)
router.get('/cadastrarPostagem', postagemController.formularioPostagem)
router.post('/cadastrarPostagem', postagemController.cadastrarPostagem)
router.get('/visualizarPostagem/:id', postagemController.visualizarPostagem)
router.get('/editarPostagem/:id', postagemController.editarPostagem)
router.get('/excluirPostagem/:id', postagemController.excluirPostagem)
router.post('/cadastrarEditarPostagem', postagemController.cadastrarEditarPostagem)
router.get('/conta', contaController.mostrarConta)
router.get('/editarConta', contaController.formularioEditarConta)
router.post('/editarConta', contaController.editarConta)
router.post('/excluirConta', contaController.excluirConta)
router.get('/adminEditarConta/:id', contaController.formularioAdminEditarConta)
router.post('/adminEditarConta/:id', contaController.adminEditarConta)
router.post('/adminExcluirConta/:id', contaController.adminExcluirConta)

module.exports = router