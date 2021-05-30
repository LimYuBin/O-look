const Sequelize = require('sequelize');

module.exports = class Profile extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      login_id: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      user_age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_gender: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      user_height: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      user_weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      job_title: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      // unregister: {
      //   type: Sequelize.STRING(1),
      //   allowNull: true,
      // },
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
      modelName: 'Profile',
      tableName: 'profile',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
