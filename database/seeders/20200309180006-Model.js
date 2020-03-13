const mocksData = require('../../utils/mocks/mocksData');
module.exports = {
  //eslint-disable-next-line
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Models', mocksData, {}),
  //eslint-disable-next-line
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Models', null, {})
};
