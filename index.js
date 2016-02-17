require('dotenv').load();
var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');

passport.use(new Strategy(
    function (username, password, cb) {
        db.login_user.findByName(username, function (err, user) {
            if (err) {
                console.log(err);
                return cb(err);
            }
            if (!user) {
                console.log(err);
                return cb(null, false);
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return cb(null, false);
            }
            return cb(null, user);
        });
    }));

function isAllowedRole(role) {
    return function (req, res, next) {
        if (role !== req.user.role) {
            console.log(req);
            res.redirect('/');
            next(new Error('You cannot go there!'));
        } else {
            next();
        }
    }
}

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    db.login_user.findById(id, function (err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});


// Create a new Express application.
app = express();

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({secret: 'keyboard cat', resave: false, saveUninitialized: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

var login_user_service = require('./routes/login_user_service')(express, passport, db);
var company_service = require('./routes/company_service')(express, isAllowedRole, db);
var jobpost_service = require('./routes/jobpost_service')(express, isAllowedRole, db);
var jobseeker_service = require('./routes/jobseeker_service')(express, isAllowedRole, db);
app.use('/company', company_service);
app.use('/jobpost', jobpost_service);
app.use('/jobseeker', jobseeker_service);


app.use('/', login_user_service);

app.get('/',
    function (req, res) {
        res.render('index.html');
    });


app.get('/index',
    function (req, res) {
        res.render('index.html');
    });

app.get('/company_page',
    require('connect-ensure-login').ensureLoggedIn(),
    isAllowedRole('company'),
    function (req, res) {
        res.render('company_page.html');
    });

app.get('/jobseeker_page',
    require('connect-ensure-login').ensureLoggedIn(),
    isAllowedRole('jobseeker'),
    function (req, res) {
        res.render('jobseeker_page.html');
    });

app.get('/user',
    function (req, res) {
        res.json(req.user);
    });

app.listen(process.env.PORT || 5000, ()=>console.log('Server started!', process.env.PORT || 5000));

module.exports=app;
