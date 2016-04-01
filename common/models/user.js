var config = require('../../server/config.json');
var path = require('path');


/*module.exports = function(user) {
    // Send verification email after registration
    user.afterRemote('create', function(context, User, next) {
        console.log('> user.afterRemote triggered');

        var options = {
            type: 'email',
            to: user.email,
            from: 'noreply@booking.com',
            subject: 'Thanks for registering.',
            template: path.resolve(__dirname, '../../server/views/verify.ejs'),
            redirect: '/verified',
            user: user
        };

        User.verify(options, function(err, response, next) {
            if (err)
                return next(err);

            console.log('> Verification email sent:', response);

            context.res.render('response', {
                title: 'Signed up successfully',
                content: 'Please check your email and click on the verification link' +
                    'before logging in.',
                redirectTo: '/',
                redirectToLinkText: 'Log in'
            });
        });
    });
    // Send password reset link when requested
    user.on('resetPasswordRequest', function(info) {
      var url = 'http://' + config.host + ':' + config.port + '/reset-password';
      var html = 'Click <a href="' + url + '?access_token=' + info.acessToken.id + '">here</a> to reset your password';

      User.app.models.Email.send({
        to: info.email,
        from: info.email,
        subject: 'Password reset',
        html: html
      }, function(err) {
        if (err)
          return console.log('>error sending password reset email');

        console.log('> Sending password reset email to:', info.email);
      });
    });
};

/*module.exports = function(user) {
  user.validatesPresenceOf('username', 'email')
  user.validatesLengthOf('password', { min: 5, message: { min: 'Password is too short'}});
  user.validatesInclusionOf('gender', {in: ['male', 'female']});
  user.validatesExclusionOf('domain', {in: ['www', 'billing', 'admin']});
  user.validatesNumericalityOf('age', {int: true});
  user.validatesUniquenessOf('email', {message: 'email is not unique'});
};*/
