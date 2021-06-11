const { STRING } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = class Main extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      img: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      item_url: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      like_cnt: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      color: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      style: {
        type: Sequelize.STRING(10),
        allowNull:true
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Main',
      tableName: 'main',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
