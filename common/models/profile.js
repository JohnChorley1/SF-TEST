module.exports = function(Profile) {
    // List profiles
    Profile.listProfiles = function(cb) {
        Profile.find({
            fields: {
                username: true
            }
        }, cb);
    };
    Profile.remoteMethod('listProfiles', {
        returns: { arg: 'profile', type: 'array' },
        http: { path: '/list-profiles', verb: 'get' }
    });
};
