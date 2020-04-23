var express = require('express');
var router = express.Router();
const { autenticacion } = require('../middleware/autenticacion');

//
const   PedidosController = require('../controllers/pedidos')
//

router.get('/', autenticacion,PedidosController.ListarPedidos);
router.get('/recogida', autenticacion,PedidosController.FechaAlquiler);
router.get('/devolucion', autenticacion,PedidosController.FechaDevolucion);


module.exports = router;