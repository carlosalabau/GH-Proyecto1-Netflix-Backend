var express = require('express');
var router = express.Router();
const { autenticacion } = require('../middleware/autenticacion');

//
const UsuarioController = require('../controllers/usuario')
//

router.get('/:id', autenticacion, UsuarioController.ListarUsuarios);
router.put('/actualizar/:id', UsuarioController.EditarUsuario);
router.delete('/eliminar/:id', UsuarioController.BorrarUsuario);
router.post('/registro', UsuarioController.NuevoUsuario);
router.post('/login', UsuarioController.LoginUsuario);
router.get('/logout', autenticacion, UsuarioController.Logout);

module.exports = router;
