'use strict';

//sequelize 모델 정의
//models 폴더 내에 있는 파일을 읽어서 모델로 정의한다.
const Sequelize = require('sequelize');
const User = require('./user');
const Post = require('./post');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Post = Post;

User.init(sequelize);
Post.init(sequelize);

User.associate(db);
Post.associate(db);

module.exports = db;
