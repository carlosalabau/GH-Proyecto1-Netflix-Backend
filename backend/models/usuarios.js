'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
    Usuarios.hasMany(models.Pedidos);
  };
  return Usuarios;
};