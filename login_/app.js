var express = require('express');
var session = require('express-session');
//var FileStore = require('session-file-store')(session);
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');
var bkfd2Password = require("pbkdf2-password");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var hasher = bkfd2Password();
var mysql = require('mysql');
var conn = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'aa0609aa',
  database : 'recommend'
});
conn.connect();
var app = express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: '1234DSFs@adf1234!@#$asd',
  resave: false,
  saveUninitialized: true,
  store:new MySQLStore({
    host:'localhost',
    port:3306,
    user:'root',
    password:'aa0609aa',
    database:'recommend'
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/count', function(req, res){
  if(req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send('count : '+req.session.count);
});
app.get('/auth/logout', function(req, res){
  req.logout();
  req.session.save(function(){
    res.redirect('/welcome');
  });
});
app.get('/welcome', function(req, res){
  if(req.user && req.user.displayName) {
    res.send(`
      <h1>Hello, ${req.user.displayName}</h1>
      <a href="/auth/logout">logout</a>
    `);
  } else {
    res.send(`
      <h1>Welcome</h1>
      <ul>
        <li><a href="/auth/login">Login</a></li>
        <li><a href="/auth/register">Register</a></li>
      </ul>
    `);
  }
});
passport.serializeUser(function(user, done) {
  console.log('serializeUser', user);
  done(null, user.authId);
});
passport.deserializeUser(function(id, done) {
  console.log('deserializeUser', id);
  var sql = 'SELECT * FROM users WHERE authId=?';
  conn.query(sql, [id],function(err, results){
    if(err) {
      console.log(error);
      done('There is no user');
    } else {
      done(null,results[0]);
    }
  });
  // for(var i=0; i<users.length; i++){
  //   var user = users[i];
  //   if(user.authId === id){
  //     return done(null, user);
  //   }
  // }
  // done('There is no user.');
});

passport.use(new LocalStrategy(
  function(username, password, done){
    var uname = username;
    var pwd = password;
    var sql = 'SELECT * FROM users WHERE authId=?';
    conn.query(sql, ['local:'+uname], function(err,results){
      if(err) {
        return done('There is no user.');
      }
      var user = results[0];
      return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
        if(hash === user.password){
          console.log('LocalStrategy', user);
          done(null, user); //serializerUser 콜백함수 호출
        } else {
          done(null, false);//deserializerUser 콜백함수 호출
        }
      });
    });
  }
));

app.post(
  '/auth/login',
  passport.authenticate(
    'local',
    {
      successRedirect: '/welcome',
      failureRedirect: '/auth/login',
      failureFlash: false
    }
  )
);

var users = [
  {
    authId:'local:egoing',
    username:'egoing',
    password:'mTi+/qIi9s5ZFRPDxJLY8yAhlLnWTgYZNXfXlQ32e1u/hZePhlq41NkRfffEV+T92TGTlfxEitFZ98QhzofzFHLneWMWiEekxHD1qMrTH1CWY01NbngaAfgfveJPRivhLxLD1iJajwGmYAXhr69VrN2CWkVD+aS1wKbZd94bcaE=',
    salt:'O0iC9xqMBUVl3BdO50+JWkpvVcA5g2VNaYTR5Hc45g+/iXy4PzcCI7GJN5h5r3aLxIhgMN8HSh0DhyqwAp8lLw==',
    displayName:'Egoing'
  }
];
app.post('/auth/register', function(req, res){
  hasher({password:req.body.password}, function(err, pass, salt, hash){
    var user = {
      authId:'local:'+req.body.username,
      username:req.body.username,
      password:hash,
      salt:salt,
      displayName:req.body.displayName
    };
    var sql = "INSERT INTO users SET ?";
    conn.query(sql, user, function(err,results) {
      if(err){
        console.log(err);
        res.status(500);
      } else {
        req.login(user, function(err){
        req.session.save(function(){
          res.redirect('/welcome');
        });
      });
      }
    });
  });
});
app.get('/auth/register', function(req, res){
  var output = `
  <h1>Register</h1>
  <form action="/auth/register" method="post">
    <p>
      <input type="text" name="username" placeholder="username">
    </p>
    <p>
      <input type="password" name="password" placeholder="password">
    </p>
    <p>
      <input type="text" name="displayName" placeholder="displayName">
    </p>
    <p>
      <input type="submit">
    </p>
  </form>
  `;
  res.send(output);
});
app.get('/auth/login', function(req, res){
  res.render('login');
  // var output = `
  // <h1>Login</h1>
  // <form action="/auth/login" method="post">
  //   <p>
  //     <input type="text" name="username" placeholder="username">
  //   </p>
  //   <p>
  //     <input type="password" name="password" placeholder="password">
  //   </p>
  //   <p>
  //     <input type="submit">
  //   </p>
  // </form>
  // <a href="/auth/facebook">facebook</a>
  // `;
  // res.send(output);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;