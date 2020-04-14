'use strict';
module.exports = (sequelize, DataTypes) => {
  const Generos = sequelize.define('Generos', {
    tipo: DataTypes.STRING
  }, {});
  Generos.associate = function(models) {
    // associations can be defined here
    Generos.belongsToMany(models.Peliculas, {
      through: models.GenerosByPeliculas
    })
  };
  return Generos;
};