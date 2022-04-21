require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_HOST,
    logging: false,
    dialect: 'postgres',
  },
  test: {
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_NAME,
    host: process.env.TEST_DATABASE_HOST,
    logging: false,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_DATABASE_USERNAME,
    password: process.env.PROD_DATABASE_PASSWORD,
    database: process.env.PROD_DATABASE_NAME,
    host: process.env.PROD_DATABASE_HOST,
    dialect: 'postgres',
  },
};