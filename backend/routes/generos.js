var express = require('express');
var router = express.Router();
const {autenticacion,isAdmin} = require('../middleware/autenticacion');
//
const   GenerosController = require('../controllers/generos')
//

router.get('/', GenerosController.ListarGeneros);
router.post('/agregar', autenticacion,isAdmin, GenerosController.NuevoGenero);
router.put('/editar/:id',autenticacion, isAdmin, GenerosController.EditarGenero);
router.delete('/eliminar/:id', autenticacion,isAdmin, GenerosController.EliminarGenero);

module.exports = router;