const { Usuarios } = require('../models/index');
const bcrypt = require('bcryptjs');

const RegistrarUsuario = (req, res) => {
    Usuarios.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        ciudad: req.body.ciudad,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        rol: req.body.rol
    })
    .then(() => {
        res.send('USUARIO INTRODUCIDO')
    })

}

module.exports = RegistrarUsuario