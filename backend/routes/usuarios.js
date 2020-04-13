var express = require('express');
var router = express.Router();

//
const UsuarioController = require('../controllers/usuario')
//
router.get('/', UsuarioController.ListarUsuarios);
router.post('/registro', UsuarioController.NuevoUsuario);
router.post('/login', UsuarioController.LoginUsuario);
router.post('/logout', UsuarioController.Logout);
module.exports = router;
