const { Actores } = require('../models/index');


const ActoresController = {
    async ListarActores(req,res){
        try{
            const actores = await Actores.findAll();
            res.status(200).send(actores)
        }
        catch(error){
            res.send(error);
        }
    },
    async NuevoActor(req,res){
        try{
            const body = req.body;
            const nuevoActor = await Actores.create({...body});
            res.status(200).send({mensaje: 'Actor creado',nuevoActor});
        }
        catch(error){
            res.status(500).send(error);
        }
    },
    async EditarActor(req,res){
        try {
            const body = req.body;
            const _id = req.params.id;
            const editarActor = await Actores.update(
                {...body},
            {
                where: {
                id:_id
            }
        });
            res.status(200).send({mensaje: 'Actor editado', editarActor})
        } catch (error) {
            res.status(500).send(error)   
        } 
    },
    async EliminarActor(req,res){
        try {
            let _id = req.params.id;
            const eliminarActor = await Actores.destroy({
                where: { id: _id}
            });
            res.status(500).send({mensaje: 'Actor eliminado con ID: ' + _id, eliminarActor})
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
module.exports = ActoresController;