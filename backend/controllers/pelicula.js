const { Peliculas, Actores, ActoresByPeliculas } = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const PeliculaController = {
    async ListarPeliculas(req,res){
        const peliculas = await Peliculas.findAll();
        res.send(peliculas);
    },
    async EditarPelicula(req,res){
        let body = req.body;
        let _id = req.params.id;
        await Peliculas.update({
            titulo: body.titulo,
            descripcion: body.descripcion,
            año: body.año,
            isEstreno: body.isEstreno,
            isDisponible: body.isDisponible
        },
        {
            where: {
                id: _id
            }
        })
        res.send({mensaje: 'Pelicula actualizada'})
    },
    async BorrarPelicula(req,res){
        let _id = req.params.id;
        await Peliculas.destroy({
            where: {
                id: _id
            }
        })
        res.send({mensaje: 'Pelicula eliminada'})
    },
    async NuevaPelicula(req,res){
        let body = req.body;
        const NuevaPelicula = await Peliculas.create({
            titulo: body.titulo,
            descripcion: body.descripcion,
            año: body.año,
            isEstreno: body.isEstreno,
            isDisponible: body.isDisponible 
        })
        res.send({mensaje: 'Pelicula introducida', NuevaPelicula})
    },
    async Estrenos(req,res){
        const estrenos = await Peliculas.findAll({
            where: {
                isEstreno: true
            }
        })
        res.send({estrenos})
    },
    async BusquedaTitulo(req,res){
       const titulo =  await Peliculas.findAll({
            where: {
                titulo: {
                    [Op.like]: '%'+ req.params.titulo +'%'
                }
            }
        })
        res.send({titulo})
    },
    async BusquedaActores(req,res){
        const actores = await Peliculas.findAll(
            {
            attributes: ['titulo','descripcion'],
            include:{
                model: Actores,
                attributes: ['nombre']
                }                
            }
        )
        res.send({actores})
    }


}

module.exports = PeliculaController;