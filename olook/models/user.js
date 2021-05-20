const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        autoIncrement: true,
        primaryKey: true
      },
      prefer_color: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      prefer_style: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      prefer_brand: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      price_range: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};