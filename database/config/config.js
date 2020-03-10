require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  },
  production: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  }
};
