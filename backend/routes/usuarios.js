var express = require('express');
var router = express.Router();

//
const UsuarioController = require('../controllers/usuario')
//

router.get('/', UsuarioController.ListarUsuarios);
router.put('/actualizar/:id', UsuarioController.EditarUsuario);
router.delete('eliminar/:id', UsuarioController.BorrarUsuario);
router.post('/registro', UsuarioController.NuevoUsuario);
router.post('/login', UsuarioController.LoginUsuario);
router.post('/logout', UsuarioController.Logout);
module.exports = router;
