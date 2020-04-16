var express = require('express');
var router = express.Router();

//
const   GenerosController = require('../controllers/generos')
//

router.get('/', GenerosController.ListarGeneros);
router.post('/agregar', GenerosController.NuevoGenero);
router.put('/editar/:id', GenerosController.EditarGenero);
router.delete('/eliminar/:id', GenerosController.EliminarGenero);

module.exports = router;