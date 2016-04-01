module.exports = function(PodUser) {
    PodUser.status = function(cb) {
        var currentDate = new Date();
        var currentHour = currentDate.getHours();
        var currentMinute = currentDate.getMinutes();
        var currentSecond = currentDate.getSeconds();
        var OPEN_HOUR = 9;
        var CLOSE_HOUR = 17;
        console.log('Current time is ' + currentHour + ':' + currentMinute + ':' + currentSecond);
        var response;
        if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
            response = 'We are open!';
        } else {
            response = 'Sorry, we are closed!';
        }
        cb(null, response);
    };
    PodUser.remoteMethod(
        'status',
        {
            http: { path: '/status', verb: 'get' },
            returns: { arg: 'status', type: 'string' }
        }
    );
    PodUser.getfirstName = function(podId, cb) {
        PodUser.findById(podId, function(err, instance) {
            response = "Name of pod is " + instance.name;
            cb(null, response);
            console.log(response);
            }
        );
    };

    PodUser.remoteMethod(
        'getfirstName',
        {
            http: { path: '/getfirstname', verb: 'get' },
            accepts: { arg: 'id', type: 'number', http: { source: 'query' } },
            returns: { arg: 'firstName', type: 'string' }
        }
    );

    PodUser.populateSearch = function (req, res) {

         res.send({message: 'dddd'});
};
};

/*module.exports = function(app) {
    var User = app.models.user;
    User.create({
        email: 'matt@domain.com', password: 'password'
    }, function(err, user) {
        console.log(user);
    });
};*/
