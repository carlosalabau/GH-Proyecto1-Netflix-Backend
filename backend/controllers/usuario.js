const { Usuarios, Token, Pedidos } = require('../models/index');
const db = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../key/config');
const {Op} = require('sequelize');

const LoginController = {
    async ListarUsuarios(req,res){
        try {
            const usuarios = await Usuarios.findAll();
            res.send(usuarios);
        } catch (error) {
            console.log(error);
            res.status(401).send({mensaje: 'No es posible listar usuarios'})
        }
    },
    async UserId(req,res){
        try {
            res.send(req.user)
        } catch (error) {
            res.status(500).send({mensaje: 'Ha ocurrido un problema'})
        }
    },

    async EditarUsuario(req,res){
       try {
        let body =  req.body;
        req.body.rol = req.user.rol;
        
        if(body.password){
            const coincide = await bcrypt.compare(body.oldPassword, req.user.password)
            if(!coincide) res.status(500).send({mensaje: 'Las contraseña no coinciden'})
            body.password = bcrypt.hash(body.password, 10);
        }
        const user = await Usuarios.update({
            ...body
        }, 
        {where: 
            {id: req.user.id}})
        res.send({mensaje: 'Usuario actualizado', user})
       } catch (error) {
           console.log(error)
           res.status(500).send({mensaje: 'No se ha podido actualizar el usuario'})
       }
    },

    async BorrarUsuario(req,res){
       try {
        let _id = req.params.id;
        const eliminar = await Usuarios.destroy({
            where:{
                id: _id
            }
        });
        res.send({mensaje: 'Usuario eliminado'})
       } catch (error) {
           res.status(500).send({mnensaje: 'No se ha podido borrar el usuario'})
       }
    },

    async NuevoUsuario(req, res){
         try {
            let _email = req.body.email;
            const emailExiste = await Usuarios.findOne({
                where: {
                    email: _email
                }
            })
             if(emailExiste){
                return res.status(500).send({mensaje: 'El email ya existe'})
             } 
                await Usuarios.create({
                    nombre: req.body.nombre,
                    apellidos: req.body.apellidos,
                    ciudad: req.body.ciudad,
                    email: req.body.email,
                    telefono: req.body.telefono,
                    password: bcrypt.hashSync(req.body.password, 10),
                    rol: 'usuario'
                })
            res.status(200).send({mensaje: 'Usuario creado'})
         } catch (error) {
             console.log(error);
             res.status(500).send({mensaje: 'No se ha podido crear el usuario'})
         }
    },

    async LoginUsuario(req, res){
        try {
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
        res.send({mensaje: 'Bienvenido ' + usuario.nombre, usuario, token})
        } catch (error) {
            console.log(error)
            res.status(500).send({mensaje: 'No se puede iniciar sesion'})
        }
},
    async Logout(req, res){
        try {
            console.log('Estoy en logout')
            await Token.destroy({
                where: { [Op.and]:[
                    {UserId: req.user.id},
                    {token: req.headers.authorization}
                ]}
            });
            res.send({mensaje: 'Desconectado con exito'})
        } catch (error) {
            console.log(error)
            res.status(500).send({mensaje: 'Ha habido un problema', error});
        }
        
    },
    async PorPedidos(req,res){
        try {
            let _id = req.params.id;
        const peli = await Usuarios.findAll({
            include: [Pedidos]
        },
        {
            where: {
                id: _id
            }
        })
        res.send(peli)
    }catch (error) {
            
        }
}

}

module.exports = LoginController;