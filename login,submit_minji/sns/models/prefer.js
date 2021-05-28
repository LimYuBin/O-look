const Sequelize = require('sequelize');

module.exports = class Prefer extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
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
      price_range: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Prefer',
      tableName: 'prefer',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
