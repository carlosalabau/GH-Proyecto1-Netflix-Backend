'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define('Pedidos', {
    fechaRecogida: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    fechaDevolucion: DataTypes.DATE,
    estado: DataTypes.STRING,
    UsuarioId: DataTypes.INTEGER,
    PeliculaId: DataTypes.INTEGER
  }, {});
  Pedidos.associate = function(models) {
    // associations can be defined here
    Pedidos.belongsTo(models.Usuarios);
    Pedidos.belongsTo(models.Peliculas);
  };
  return Pedidos;
};