'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Peliculas', [{
      titulo: 'Gladiator',
      descripcion: 'Máximo, general romano, desea volver a casa, pero el emperador Marco Aurelio quiere que herede el imperio. Esto hace que Cómodo ordene matar a su familia. Máximo escapa de la muerte y regresa a Roma como gladiador para vengar la muerte de su familia.',
      anyo: 2000,
      imagen: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQv7C9Nb-32UNRsibMkHMkTjKytxbUA5UIjEMsymomhrtsXFcja',
      isEstreno: 0,
      isDisponible: 1 
    }], 
    [{
      titulo: 'Joker',
      descripcion: 'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.',
      anyo: 2019,
      imagen: '',
      isEstreno: 1,
      isDisponible: 0 
    }],
    {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
