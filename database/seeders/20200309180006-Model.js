module.exports = {
  //eslint-disable-next-line
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Models',
      [
        {
          first_name: 'Jeniece',
          last_name: 'Edmondson',
          user_name: 'jedmondson0',
          email: 'jedmondson0@e-recht24.de',
          gender: 'Female',
          location_model: 'Sizhou',
          birthdate: '06/06/1998',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Garrard',
          last_name: 'Mussilli',
          user_name: 'gmussilli1',
          email: 'gmussilli1@yale.edu',
          gender: 'Male',
          location_model: 'Shangyu',
          birthdate: '28/08/2001',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Smitty',
          last_name: 'Mabbott',
          user_name: 'smabbott2',
          email: 'smabbott2@weather.com',
          gender: 'Male',
          location_model: 'Ibarreta',
          birthdate: '08/05/1997',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Gary',
          last_name: 'Myers',
          user_name: 'gmyers3',
          email: 'gmyers3@mtv.com',
          gender: 'Male',
          location_model: 'Oepuah',
          birthdate: '23/06/1994',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),
  //eslint-disable-next-line
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Models', null, {})
};
