const express = require('express');
const router  = express.Router();
const appController = require('../controller/appController')
const cadastrarUsuario = require('../controller/cadastrarUsuario')
const postagemController = require('../controller/postagemController')

router.get('/', appController.index)

router.get('/login', appController.login)
router.get('/cadastrarUsuario', cadastrarUsuario.formulario)
router.post('/cadastrarUsuario', cadastrarUsuario.cadastrar)
router.get('/administrador', appController.administrador)
router.get('/cadastrarPostagem', postagemController.formularioPostagem)
router.post('/cadastrarPostagem', postagemController.cadastrarPostagem)
router.get('/visualizarPostagem/:id', postagemController.visualizarPostagem)
router.get('/visualizarPostagem/:id', postagemController.visualizarPostagem)

module.exports = router