'use strict';

const Sequelize = require('sequelize');
const Profile = require('./profile');
const Zzim = require('./zzim');
const User = require('./user');
const Main = require('./main');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Profile = Profile;
db.Zzim = this.Zzim;
db.Main = Main;

User.init(sequelize);
Profile.init(sequelize);
Zzim.init(sequelize);
Main.init(sequelize);

module.exports = db;
