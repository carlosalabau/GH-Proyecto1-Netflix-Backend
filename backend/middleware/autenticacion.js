const { Usuarios, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const key = require('../key/config');
const jwt = require('jsonwebtoken');

const autenticacion = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token,key.llave);
        const user = await Usuarios.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where:{
                [Op.and]:[
                    {UserId: user.id},
                    {token: token}
                ]
            }
        });
        if(!user || !tokenFound){
            res.status(401).send({mensaje:'No estas autorizado'});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send({error, mensaje:'Ha habido un problema con el token'})
    }
};
    const isAdmin = async (req,res,next) => {
        try {
            const admins = 'Admin';
            if(!admins.includes(req.body.rol)){
                return res.status(403).send({mensaje: 'No tienes permiso para ver esta seccion'})
            }
            next();
        } catch (error) {
            res.status(500).send(error);
        }
       
    }

module.exports= { autenticacion, isAdmin }