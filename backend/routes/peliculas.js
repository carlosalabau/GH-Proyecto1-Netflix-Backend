var express = require('express');
var router = express.Router();

//
const PeliculaController = require('../controllers/pelicula');
//



router.put('/actualizar/:id', PeliculaController.EditarPelicula);
router.delete('/eliminar/:id', PeliculaController.BorrarPelicula);
router.post('/agregar', PeliculaController.NuevaPelicula);
router.get('/estrenos', PeliculaController.Estrenos);
router.get('/titulo/:titulo', PeliculaController.BusquedaTitulo);
router.get('/actores/:nombre', PeliculaController.BusquedaActores);
router.get('/generos/:tipo', PeliculaController.BusquedaGeneros);
router.get('/', PeliculaController.ListarPeliculas);
router.get('/:id', PeliculaController.ListarId)

module.exports = router;
