'use strict';
module.exports = (sequelize, DataTypes) => {
  const Peliculas = sequelize.define('Peliculas', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    año: DataTypes.STRING,
    imagen: DataTypes.STRING,
    isEstreno: DataTypes.BOOLEAN,
    isDisponible: DataTypes.BOOLEAN
  }, {});
  Peliculas.associate = function(models) {
    // associations can be defined here
  };
  return Peliculas;
};