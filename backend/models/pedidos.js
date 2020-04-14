'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define('Pedidos', {
    fechaRecogida: DataTypes.DATE,
    fechaDevolucion: DataTypes.DATE,
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