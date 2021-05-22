const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nickname: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      pw: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      enroll_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      user_age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      user_gender: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      prefer_style: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      prefer_color: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      prefer_brand: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      user_height: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      user_weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_range: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      job_title: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      unregister: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'user',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
