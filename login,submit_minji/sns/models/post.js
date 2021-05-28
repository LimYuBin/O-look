const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4', 
      collate: 'utf8mb4_general_ci',
    });
  }

  // static associate(db) {
  //   db.Post.belongsTo(db.User); //foriengkey, targetkey 적지 않아도 자동으로 belongsto 라고 쓴 쪽의 모델에 UserId 칼럼이 생기고 foriegn key가 된다.
  // }
};
