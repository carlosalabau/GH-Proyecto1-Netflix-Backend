'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenerosByPeliculas = sequelize.define('GenerosByPeliculas', {
    GeneroId: DataTypes.INTEGER,
    PeliculaId: DataTypes.INTEGER
  }, {});
  GenerosByPeliculas.associate = function(models) {
    // associations can be defined here
  };
  return GenerosByPeliculas;
};