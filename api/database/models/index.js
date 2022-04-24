require('dotenv').config();
const { Sequelize } = require("sequelize");
const envConfigs =  require('../config/config');
const User = require('./user');
const Role = require('./role');
const Outlet = require('./outlet');
const UserOutlet = require('./user-outlet');

// append models here
const models = {
    User,
    Role,
    Outlet,
    UserOutlet,
};

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

const sequelize = config.uri
    ? new Sequelize(config.uri, {})
    : new Sequelize(config);

// init each models
Object.values(models)
    .forEach(model => model.init(sequelize));

// run `.associate` if it exists,
Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

console.log('model has been initialized');

module.exports = {
    ...models,
    sequelizeInstance: sequelize
}
