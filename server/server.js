var loopback = require('loopback');
var boot = require('loopback-boot');
var morgan = require('morgan');
var session = require('express-session');
var path = require('path');
require('node-jsx').install({extension: '.jsx'});
var React = require('react')

var app = module.exports = loopback();

var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

// Create an instance of passportconfigurator with the app instance
var loopbackPassport = require('loopback-component-passport');
var PassportConfigurator = require('loopback-component-passport').PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

passport.use(new Strategy({
  clientID: process.env.CLIENT_ID || '1694886577449622',
  clientSecret: process.env.CLIENT_SECRET || 'a2f225c1ea1989c32e7c99899ca42f50',
  callbackURL: 'http://localhost:5000/login/facebook/return'
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

var bodyParser = require('body-parser');
// Flash messages for passport
var flash = require('express-flash');

var config = {};

try {
  config = require('./providers.json');
} catch(err) {
  console.trace(err);
  process.exit(1); // Fatal
}

app.use(loopback.token({model: app.models.accessToken}));
app.set('supersecret', config.secret);

app.set('view engine', 'js');
app.set('views', __dirname + '/../client/views');
app.set('json spaces', 2);

boot(app, __dirname);

app.middleware('parse', bodyParser.json());
app.use(morgan('dev'));

app.middleware('parse', bodyParser.urlencoded({extended: true}));

app.middleware('auth', loopback.token({
  model: app.models.accessToken
}));

app.middleware('session:before', loopback.cookieParser(app.get('cookieSecret')));
app.middleware('session', loopback.session({
  secret: 'kitty',
  saveUninitialized: true,
  resave: true
}));

// Initialze passport
passportConfigurator.init();

app.use(flash());

// Set up related models for passport
passportConfigurator.setupModels({
  userModel: app.models.user,
  userIdentity: app.models.userIdentity,
  userCredential: app.models.userCredential
});

// Configure passport strategies for third party auth providers
for (var s in config) {
  var c = config[s];
  c.session = c.session !== false;
  passportConfigurator.configureProviders(s, c);
}

// Processes the form submission.
app.post('/send', function(req, res) {
  // Here is an example of how we could send the form data by email.
  //var Email = require('emailjs/email');
  //var server = Email.server.connect({
  //  host: 'localhost'
  //});
  //Server.send({
  //  'text': body,
  //  'from': req.body.email,
  //  //'to': someone@example.com,
  //  'reply-to': req.body.email,
  //  'subject': 'Tell us about your company: ' + req.body.company
  //}, function(error) {
  //  if (error) {
  //    return res.send({ status: 'KO' });
  //  } else {
  //    return res.send({ status: 'OK' });
  //  }
  //});

  // For now we can log the form data and return ok
  console.log(req.body);
  // This is a dummy loop to simulate a slow connection
  for (var i = 0; i < 999999999; i++ ) { }
  // Return a successful response.
  return res.send({ status: 'OK' });
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  };
