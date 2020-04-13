const { Usuarios, Token } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../key/config');
const {Op} = require('sequelize')

const LoginController = {
    async ListarUsuarios(req,res){
        const listadoUsuarios = await Usuarios.findAll();
        res.send(listadoUsuarios);
    },
    async NuevoUsuario(req, res){
        const usuarioCreado = await Usuarios.create({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            ciudad: req.body.ciudad,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            rol: req.body.rol
        })
        res.send({mensaje: 'Usuario creado', usuarioCreado})
    },

    async LoginUsuario(req, res){
        const usuario = await Usuarios.findOne({
            where: {
                email: req.body.email
            }
        })
    if(!usuario){
        return res.status(400).send({mensaje: 'Usuario o contraseña incorrectos'})
    }
    const coincide = await bcrypt.compare(req.body.password, usuario.password);
    if(!coincide){
     return res.status(400).send({mensaje: 'Usuario o contraseña incorrectos'})
    }
    const token = jwt.sign({
        id: usuario.id
    }, key.llave);
    await Token.create({
        token,
        UserId: usuario.id
    });
    res.send({mensaje: 'Bienvenido' + usuario.nombre, usuario, token})
},
    async Logout(req, res){
        await Token.destroy({
            where: { [Op.and]:[
                {UserId: req.usuario.id},
                {token: req.headers.authorization}
            ]}
        });
        res.send({mensaje: 'Desconectado con exito'})
    }
}
module.exports = LoginController;