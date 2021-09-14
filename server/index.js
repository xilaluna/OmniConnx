const test = "test"
const path = require("path");
const express = require('express');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
//const exphbs  = require('express-handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//require('./data/ourdbname');
port = 3000

app.use(expressValidator());
app.use(cookieParser());
app.use(methodOverride('_method'));

/*
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'main'
}));
*/

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'handlebars');


//require('./controllers/auth.js')(app);
// Start Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
    
  
  module.exports = app;
  

/* PASSPORT LOCAL AUTHENTICATION */

passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

/* ROUTES */

//Landing Page
app.get('/',
  (req, res) => res.sendFile('html/index.html', {root: __dirname})
);

//Create user
app.post('/signup', (req, res) => {
  var user = new User(req.body);

  user.save()
    .then((user) => {
      res.redirect(`/profile/${user._id}`);
    })
    .catch((err) => {
      // Handle Errors
    }) ;
});

//Get all the posts
app.get('/all_post',
  (req, res) => res.sendFile('html/allPost.html', {root: __dirname})
);


/* AUTH REQUIRES LOGIN*/
const connectEnsureLogin = require('connect-ensure-login');

//Login page logic
app.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login?info=' + info);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/');
    });

  })(req, res, next);
});

//Login page
app.get('/login',
  (req, res) => res.sendFile('html/login.html',
  { root: __dirname })
);

//Display profile
app.get('/profile/:userId',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);

//Edit profile
app.get('/profile/:userId',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);

//Create post
app.get('/create_post',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);

//Edit post
app.get('/edit_post/:postId',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);

app.post('/edit_post/:postId',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);

//Delete post
app.delete('/delete_post',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);

