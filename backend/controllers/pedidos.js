const {Pedidos} = require('../models/index');

const PedidosController = {
    async NuevoPedido(req, res){
        try {
            const userId = req.user.id;
            const nuevoPedido = await Pedidos.create({UsuarioId: userId,...req.body});
            res.send(nuevoPedido);
        } catch (error) {
            res.status(500).send({mensaje: 'Pedido creado'})
        }
    },
    async ListarPedidos(req,res){
        const pedidos = await Pedidos.findAll();
        res.send(pedidos)
    },
    async FechaAlquiler(req,res){
        const recogida = await Pedidos.findAll({
            attributes:['id','fechaRecogida']
        })
        res.send(recogida)
    },
    async FechaDevolucion(req,res){
        const devolucion = await Pedidos.findAll({
            attributes: ['id','fechaDevolucion']
        })
        res.send(devolucion)
    }

}

module.exports = PedidosController;