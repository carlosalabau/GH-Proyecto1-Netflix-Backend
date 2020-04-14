const { Usuarios, Token } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../key/config');
const {Op} = require('sequelize')

const LoginController = {
    async ListarUsuarios(req,res){
        let _id = id;
        const listadoUsuarios = await Usuarios.findOne({
            where: {
                id: _id
            }
        });
        res.send(listadoUsuarios);
    },

    async EditarUsuario(req,res){
        let body =  req.body;
        let _id = req.params.id;
        const edit = await Usuarios.update({
            nombre: body.nombre,
            apellidos: body.apellidos,
            ciudad: body.ciudad
        },{
        where: {
            id: _id
        }

        })
        res.send({mensaje: 'Usuario actualizado'})
    },

    async BorrarUsuario(req,res){
        let _id = req.params.id;
        const eliminar = await Usuarios.destroy({
            where:{
                id: _id
            }
        });
        res.send({mensaje: 'Usuario eliminado'})
    },

    async NuevoUsuario(req, res){
         await Usuarios.create({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            ciudad: req.body.ciudad,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            rol: req.body.rol
        })
        res.status(200).send({mensaje: 'Usuario creado'})
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