var express = require('express');
var router = express.Router();
const { autenticacion, isAdmin } = require('../middleware/autenticacion');

//
const   PedidosController = require('../controllers/pedidos')
//


/* router.get('/recogida', autenticacion,PedidosController.FechaAlquiler); */
router.post('/cambiarEstado', autenticacion,PedidosController.CambiarEstado);
router.post('/agregar', autenticacion, PedidosController.NuevoPedido);
router.get('/usuario', autenticacion, PedidosController.PedidosId);
router.delete('/eliminar', isAdmin, autenticacion, PedidosController.EliminarPedido)
/* router.post('/devolucion', autenticacion, PedidosController.FechaDevolucion); */
router.get('/', autenticacion,PedidosController.ListarPedidos);

module.exports = router;