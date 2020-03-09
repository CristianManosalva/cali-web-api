'use strict';

module.exports = {
  //eslint-disable-next-line
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Scores',
      [
        {
          score_model: 1,
          modelId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          score_model: 5,
          modelId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          score_model: 2,
          modelId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  //eslint-disable-next-line
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Scores', null, {});
  }
};
