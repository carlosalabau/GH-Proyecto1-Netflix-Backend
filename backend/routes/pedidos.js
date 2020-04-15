var express = require('express');
var router = express.Router();
const { autenticacion } = require('../middleware/autenticacion');

//
const   PedidosController = require('../controllers/pedidos')
//

router.get('/', PedidosController.ListarPedidos);
router.get('/recogida', PedidosController.FechaAlquiler);
router.get('/devolucion', PedidosController.FechaDevolucion);


module.exports = router;