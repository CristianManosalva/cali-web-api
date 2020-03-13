'use strict';
const mockDataScore = require('../../utils/mocks/mocksDataScore');
module.exports = {
  //eslint-disable-next-line
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Scores', mockDataScore, {});
  },
  //eslint-disable-next-line
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Scores', null, {});
  }
};
