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
            res.status(500).send({mensaje: 'Pedido creado'})
        }
    },
    async ListarPedidos(req,res){
       try{ const pedidos = await Pedidos.findAll();
            res.send(pedidos)
       }catch(error){
        res.status(500).send({mensaje: 'Ha habido un problema'})
       }
    },
    async FechaAlquiler(req,res){
           try{
            const recogida = await Pedidos.findAll({
                where: 
                {estado: 'pendiente', UsuarioId: req.user.id}
             });
             res.send(recogida)
           }catch(error){
               res.status(500).send({mensaje: 'Ha habido un problema'})
           }
        
    },
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
                    PeliculaId: req.body.PeliculaId,
                    UsuarioId: req.user.id
            }
                })
            res.send(cambioEstado)
        }catch(error){
            res.status(500).send({mensaje: 'Ha habido un problema'})
        }
    }
}

module.exports = PedidosController;