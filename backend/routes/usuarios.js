var express = require('express');
var router = express.Router();
const { autenticacion, isAdmin } = require('../middleware/autenticacion');

//
const UsuarioController = require('../controllers/usuario')
//


router.get('/pedidos/:id', autenticacion, UsuarioController.PorPedidos);
router.put('/actualizar', autenticacion, UsuarioController.EditarUsuario);
router.delete('/eliminar/:id', autenticacion,isAdmin, UsuarioController.BorrarUsuario);
router.post('/registro', UsuarioController.NuevoUsuario);
router.post('/login', UsuarioController.LoginUsuario);
router.get('/logout', autenticacion, UsuarioController.Logout);
router.get('/', autenticacion, UsuarioController.ListarUsuarios);

module.exports = router;
