const {Pedidos} = require('../models/index');
const {Op} = require('sequelize');

const PedidosController = {
    async NuevoPedido(req, res){
        try {
            const userId = req.user.id;
            const _estado = 'pendiente';
            const nuevoPedido = await Pedidos.create({UsuarioId: userId,estado: _estado,...req.body});
            res.send(nuevoPedido);
        } catch (error) {
            res.status(500).send({mensaje: 'No se ha podido crear el pedido'})
        }
    },
    async ListarPedidos(req,res){
       try{ const pedidos = await Pedidos.findAll();
            res.send(pedidos)
       }catch(error){
        res.status(500).send({mensaje: 'Ha habido un problema'})
       }
    },
    async PedidosId(req,res){
        const pedidosId = await Pedidos.findOne({
            where: { id: req.user.id}
        })
    },
    async EliminarPedido(req,res){
        let _id = req.params.id;
        const eliminarPedido = await Pedidos.destroy({
            where: {
                id: _id
            }
        })
    },
    /* async FechaAlquiler(req,res){
           try{
            const recogida = await Pedidos.findAll({
                where: 
                {estado: 'pendiente', UsuarioId: req.user.id}
             });
             res.send(recogida)
           }catch(error){
               res.status(500).send({mensaje: 'Ha habido un problema'})
           }
        
    }, */
/*     async FechaDevolucion(req,res){
            const devolucion = await Pedidos.findAll({
            attributes: ['id','fechaDevolucion']
        })
        res.send(devolucion)
    }, */
    async CambiarEstado(req,res){
       try{
           const cambioEstado = await Pedidos.update({
            fechaDevolucion: 'finalizado'
            },
            { where: {
                    id: req.params.id,
                    UsuarioId: req.user.id
            }
                })
            res.send(cambioEstado)
        }catch(error){
            res.status(500).send({mensaje: 'Ha habido un problema'})
        }
    },
   /*  async FechaDevolucion(req,res){
       try {
        const devolucion = await Pedidos.update({
            fechaDevolucion: req.body.fechaDevolucion
        })
        res.send(devolucion)
       } catch (error) {
           res.status(500).send({mensaje: 'Ha habido un problema'})
       } 
    } */
}

module.exports = PedidosController;