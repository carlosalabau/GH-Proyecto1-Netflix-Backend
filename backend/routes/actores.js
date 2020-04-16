var express = require('express');
var router = express.Router();

//
const   ActoresController = require('../controllers/actores')
//

router.get('/', ActoresController.ListarActores);
router.post('/agregar', ActoresController.NuevoActor);
router.put('/editar/:id', ActoresController.EditarActor);
router.delete('/eliminar/:id', ActoresController.EliminarActor);

module.exports = router;