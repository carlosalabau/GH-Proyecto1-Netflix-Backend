const { Peliculas, Generos, Actores } = require('../models/index');
const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const PeliculaController = {
    async ListarPeliculas(req,res){
        const peliculas = await Peliculas.findAll({
            include: [Generos, Actores]
        });
        res.send(peliculas);
    },

    async ListarId(req,res){
        let _id = req.params.id;
        const peli = await Peliculas.findOne({
            where: {
                id: _id
            }
        })
        res.send(peli)
    },
    async EditarPelicula(req,res){
        let body = req.body;
        let _id = req.params.id;
        await Peliculas.update({
            titulo: body.titulo,
            descripcion: body.descripcion,
            anyo: body.anyo,
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
        try{
            const pelis = req.body;
            const pelicula = await Peliculas.create({...pelis});
            await pelicula.addGeneros(req.body.GeneroId);
            await pelicula.addActores(req.body.ActorId);
            res.send(pelicula);
        }
        catch(error){
            res.status(500).send({mensaje: 'Problema al crear la pelicula'});
            console.log(error)
        }
        
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
        let _nombre = req.params.nombre;
        const actores = await db.sequelize.query(`SELECT Peliculas.titulo, Actores.nombre FROM Peliculas, Actores, ActoresByPeliculas WHERE ActoresByPeliculas.ActoreId = Actores.id AND ActoresByPeliculas.PeliculaId = Peliculas.id AND Actores.nombre = '${_nombre}'`);
        res.send(actores)
    },
    async BusquedaGeneros(req,res){
       try {
        let _tipo = req.params.tipo;
        /* const generos = await db.sequelize.query(`SELECT DISTINCT Peliculas.titulo, Generos.tipo FROM Peliculas, Generos, GenerosByPeliculas WHERE GenerosByPeliculas.GeneroId = Generos.id AND GenerosByPeliculas.PeliculaId = Peliculas.id AND Generos.tipo = '${_tipo}'`); */
        const genres = await Peliculas.findAll({
            include: [{
                model:Generos,
                where: {tipo: _tipo}
            }],
        })
        res.send(genres)
       } catch (error) {
           res.status(500).send({mensaje: 'Ha ocurrido un error', error})
       } 
    }

}

module.exports = PeliculaController;