'use strict';

const Sequelize = require('sequelize');
const User = require('./user');
const Prefer = require('./prefer');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Prefer = Prefer;

User.init(sequelize);
Prefer.init(sequelize);

module.exports = db;
