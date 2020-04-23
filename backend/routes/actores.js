var express = require('express');
var router = express.Router();
const {autenticacion, isAdmin} = require('../middleware/autenticacion');
//
const   ActoresController = require('../controllers/actores')
//

router.get('/', ActoresController.ListarActores);
router.post('/agregar', autenticacion,isAdmin, ActoresController.NuevoActor);
router.put('/editar/:id',autenticacion, isAdmin, ActoresController.EditarActor);
router.delete('/eliminar/:id', autenticacion,isAdmin, ActoresController.EliminarActor);

module.exports = router;