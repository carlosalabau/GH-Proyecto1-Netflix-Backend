'use strict';
module.exports = (sequelize, DataTypes) => {
  const Generos = sequelize.define('Generos', {
    tipo: DataTypes.STRING
  }, {});
  Generos.associate = function(models) {
    // associations can be defined here
  };
  return Generos;
};