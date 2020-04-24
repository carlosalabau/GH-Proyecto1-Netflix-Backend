var express = require('express');
var router = express.Router();
const { autenticacion } = require('../middleware/autenticacion');

//
const   PedidosController = require('../controllers/pedidos')
//


router.get('/recogida', autenticacion,PedidosController.FechaAlquiler);
router.get('/devolucion', autenticacion,PedidosController.FechaDevolucion);
router.post('/agregar', autenticacion, PedidosController.NuevoPedido)
router.get('/', autenticacion,PedidosController.ListarPedidos);

module.exports = router;