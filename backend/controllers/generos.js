const { Generos } = require('../models/index');


const GenerosController = {
    async ListarGeneros(req,res){
        try{
            const generos = await Generos.findAll();
            res.status(200).send(generos)
        }
        catch(error){
            res.send(error);
        }
    },
    async NuevoGenero(req,res){
        try{
            const body = req.body;
            const nuevoGenero = await Generos.create({...body});
            res.status(200).send({mensaje: 'Usuario creado',nuevoGenero});
        }
        catch(error){
            res.status(500).send(error);
        }
    },
    async EditarGenero(req,res){
        try {
            const body = req.body;
            const _id = req.params.id;
            const editarGenero = await Generos.update(
                {...body},
            {
                where: {
                id:_id
            }
        });
            res.status(200).send({mensaje: 'Usuario editado', editarGenero})
        } catch (error) {
            res.status(500).send(error)   
        } 
    },
    async EliminarGenero(req,res){
        try {
            let _id = req.params.id;
            const eliminarGenero = await Generos.destroy({
                where: { id: _id}
            });
            res.status(500).send({mensaje: 'Usuario eliminado con ID: ' + _id, eliminarGenero})
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
module.exports = GenerosController;