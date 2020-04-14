'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActoresByPeliculas = sequelize.define('ActoresByPeliculas', {
    ActoreId: DataTypes.INTEGER,
    PeliculaId: DataTypes.INTEGER
  }, {});
  ActoresByPeliculas.associate = function(models) {
    // associations can be defined here
  };
  return ActoresByPeliculas;
};