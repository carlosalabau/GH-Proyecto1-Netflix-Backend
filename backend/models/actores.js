'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actores = sequelize.define('Actores', {
    nombre: DataTypes.STRING
  }, {});
  Actores.associate = function(models) {
    // associations can be defined here
    Actores.belongsToMany(models.Peliculas,{
      through: models.ActoresByPeliculas
    })
  };
  return Actores;
};