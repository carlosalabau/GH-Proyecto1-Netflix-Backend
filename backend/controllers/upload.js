
const SubirImagenesController = {
    async SubirImagenes(req,res){
        let _imagen = req.body.imagen;
        let _id = req.params.id;
        const subirImagen = await Peliculas.create({
            imagen: _imagen
        },{
            where: {id: _id}
        })
        res.send({mensaje: 'Fichero subido correctamente', subirImagen});
    }

}

module.exports = SubirImagenesController;