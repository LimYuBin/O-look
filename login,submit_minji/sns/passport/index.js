const passport = require('passport');
const local = require('./localStrategy');
//const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => { //로그인 성공할 경우 session 유지되도록 함.
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({where: { id }}) //id를 사용자 테이블 전체에서 찾는다.
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
  //kakao();
};