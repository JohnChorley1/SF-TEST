var loopback = require('loopback');
var boot = require('loopback-boot');
var morgan = require('morgan');
// Require express sessions
var session = require('express-session');

var path = require('path');
var app = module.exports = loopback();
require('node-jsx').install({extension: '.jsx'});
var React = require('react');
//var ContactFormFactory = React.createFactory(require('../client/js/components/contact-form.jsx'));

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

// Create an instance of PassportConfigurator with the app instance
var loopbackPassport = require('loopback-component-passport');
var PassportConfigurator = require('loopback-component-passport').PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

// passport.use(new Strategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: 'http://localhost:3000/login/facebook/return'
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     return cb(null, profile);
//   }));

var bodyParser = require('body-parser');

// Flash messages for passport.
var flash = require('express-flash');

var config = {};
try {
  config = require('./providers.json');
} catch(err) {
  console.trace(err);
  process.exit(1); //Fatal..
}

app.use(loopback.token({ model: app.models.accessToken }));
app.set('supersecret', config.secret);

app.set('view engine', 'jade'); // loopback comes with EJS out-of-the-box
app.set('views', __dirname + '/../client/views');
app.set('json spaces', 2); // format json responses for easier viewing

boot(app, __dirname);

app.middleware('parse', bodyParser.json());
app.use(morgan('dev'));

app.middleware('parse', bodyParser.urlencoded({ extended: true }));

app.middleware('auth', loopback.token({
  model: app.models.accessToken
}));

app.middleware('session:before', loopback.cookieParser(app.get('cookieSecret')));
app.middleware('session', loopback.session({
  secret: 'kitty',
  saveUninitialized: true,
  resave: true
}));

// Initialize passport
passportConfigurator.init();

app.use(flash());

// Set up related models
passportConfigurator.setupModels({
  userModel: app.model.user,
  userIdentityModel: app.models.userIdentity,
  userCredentialModel: app.models.userCredential
});

// Configure passport strategies for third party auth providers
for (var s in config) {
  var c = config[s];
  c.session = c.session !== false;
  passportConfigurator.configureProvider(s, c);
}
//var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

// Declaring the User relation because it isn't tracked by source control.
//var User = app.models.User;
//User.hasMany(app.models.Time, { as: 'Times', foreignKey: 'userId' });

/*app.get('/', function(req, res) {
  var ContactForm = React.renderToString(ContactFormFactory());
  res.render('index', { Content: ContactForm });
});*/

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
