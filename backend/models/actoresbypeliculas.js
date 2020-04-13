'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActoresByPeliculas = sequelize.define('ActoresByPeliculas', {
    ActorId: DataTypes.INTEGER,
    PeliculaId: DataTypes.INTEGER
  }, {});
  ActoresByPeliculas.associate = function(models) {
    // associations can be defined here
  };
  return ActoresByPeliculas;
};