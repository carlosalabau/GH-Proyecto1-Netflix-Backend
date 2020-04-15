const {Pedidos} = require('../models/index');

const PedidosController = {
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