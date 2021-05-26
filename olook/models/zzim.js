const Sequelize = require('sequelize');

module.exports = class Zzim extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Zzim',
      tableName: 'zzim',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};