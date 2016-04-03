var async = require('async');
module.exports = function(app) {
  // data sources
  var mongoUserDs = app.dataSources.mongoUserDs;
  var mongoDs = app.dataSources.mongoDs;
  var mongoProfileDs = app.dataSources.mongoProfileDs;

  // create all models
  async.parallel({
    reviewers: async.apply(createReviewers),
    podUser: async.apply(createPodUser),
    Profiles: async.apply(createProfile)
  }, function(err, results) {
    createReviews(results.reviewers, results.podUser, results.Profiles, function(err) {
      if(err) {
        console.error(err);
      }
      console.log('> Models created successfully');
    });
  });
  // Create reviewers
  function createReviewers(cb) {
    mongoUserDs.automigrate('Reviewer', function(err) {
      if (err)
        return cb(err);

      var Reviewer = app.models.Reviewer;

      Reviewer.create([
        { email: 'test@foo.com', password: 'foobar' },
        { email: 'john@doe.com', password: 'johndoe' },
        { email: 'jane@doe.com', password: 'janedoe' }
      ], cb);
    });
  }

  function createProfile(cb) {
    mongoProfileDs.automigrate('profile', function(err) {
      if (err)
        return console.log(cb, err);

      var profile = app.models.profile;
      profile.create([
        {
          name: "Matthew Rathbone",
          email: "matthewrathbone@hotmail.co.uk",
          imgURL: "/img/matt.jpeg",
          description: "This is the description of matthew rathbone",
          workHistory: {
            companyName: "SharpFutures",
            jobTitle: "Web/App development",
            timeWorked: "9 weeks"
          },
          rating: {
            podId: "podid1"
          },
          podHistory: {
            jobCounter: 3,
            hoursCounter: 400
          },
          preferences: {
            distanceWillingToTravel: "15 miles",
            preferredTimes: "40 hours a week",
            preferredDays: "All week"
          }
        },
        {
          name: 'Alex Curtis',
          email: 'alexcurtis1992@hotmail.com',
          imgURL: '/img/alex.jpeg',
          description: 'I have recently gained an enthusiasm in the programming field and am looking to further expand my skills.' +
          'I enjoy experimenting with new programming languages and am striving to gain more knowledge as I go along.',
          workHistory: {
            companyName: "Original factory shop",
            jobTitle: "Picker",
            timeWorked: "5 months"
          },
          rating: {
            podId: 'podid2'
          },
          podHistory: {
            jobCounter: 2,
            hoursCounter: 400
          },
          preferences: {
            distanceWillingToTravel: "20 miles",
            preferredTimes: "Any",
            preferredDays: "Monday to Friday"
          }
        },
        {
          name: 'Jordan Mason',
          email: 'jordanmason@live.co.uk',
          imgURL: 'img/jordan.jpeg',
          description: 'My names Jordan, I am 22 years old, and I am a full stack JavaScript entry-level developer',
          workHistory: {
            companyName: 'SharpFutures',
            jobTitle: 'Web/App developer',
            timeWorked: '9 weeks'
          },
          rating: {
            podId: 'podid3'
          },
          podHistory: {
            jobCounter: 5,
            hoursCounter: 400
          },
          preferences: {
            distanceWillingToTravel: '20 miles',
            preferredTimes: 'Any',
            preferredDays: 'Monday to Friday'

          }
        },
        {
          name: 'Itezaz',
          email: 'i.anwar2015@hotmail.com',
          imgURL: 'img/itezaz.jpeg',
          description: 'I am a versatile and professional computing graduate ' +
          'with wide ranging experience in a variety of computer related ' +
          'areas including: data analysis, mobile applications development and web design. ' +
          'I have been learning the fundamentals of these units; obtaining a 2.1 at Manchester Metropolitan University ' +
          'and would be interested in enhancing my skills within these areas. I enjoy learning about new HTML5 and CSS3 features ' +
          'In my spare time I enjoy learning about new web development technologies. My hobbies involve playing weekly football, badminton and computer games',
          workHistory: {
            companyName: 'SharpFutures',
            jobTitle: 'Web/App developer',
            timeWorked: '9 weeks'
          },
          rating: {
            podId: 'podid4'
          },
          podHistory: {
            jobCounter: 4,
            hoursCounter: 400
          },
          preferences: {
            distanceWillingToTravel: '20 miles',
            preferredTimes: 'Any',
            preferredDays: 'Monday to Friday'
          }
        }
      ]);
    });
  }
  // create pod users
  function createPodUser(cb) {
    mongoUserDs.automigrate('PodUser', function(err) {
      if (err)
        return cb(err);

      var PodUser = app.models.PodUser;
      PodUser.create([
        {
          firstName: 'Matthew',
          podId: 'podid1',
          lastName: 'Rathbone',
          email: 'matthewrathbone@hotmail.co.uk',
          password: 'password',
          age: '28',
          gender: 'male',
          isBanned: false,
          createdAt: Date.now,
          personal: {
            phoneNumber: '07654736453',
            address: {
              line1: '146 Demesne Drive',
              line2: 'Stalybridge',
              postcode: 'SK15 2PP',
              county: 'Cheshire',
              town: 'Manchester'
            }
          },
          info: {
            skills: [
              'JavaScript', 'Web Development', 'databases', 'nodejs', 'express'
            ],
            currentlyEmployed: true
          },
          qualifications: {
            name: 'computer build course',
            level: '1 & 2',
            dataObtained: Date.now,
            locationObtained: 'Manchester'
          },
          isBooked: false
        },
        {
          firstName: 'Alex',
          podId: 'podid2',
          lastName: 'Curtis',
          email: 'alexcurtis1992@hotmail.com',
          password: 'password1',
          age: '23',
          gender: 'male',
          isBanned: false,
          createdAt: Date.now,
          personal: {
            phoneNumber: '07864756453',
            address: {
              line1: '1 Inglehurst Road',
              line2: '',
              postcode: 'BB115DY',
              county: 'Lancashire',
              town: 'Burnley'
            }
          },
          info: {
            skills: [
              'JavaScript', 'HTML', 'databases', 'nodejs', 'express'
            ],
            currentlyEmployed: true
          },
          qualifications: {
            name: 'Bachelors Degree',
            level: '1',
            dataObtained: Date.now,
            locationObtained: 'Newcastle'
          },
          isBooked: false
        },
        {
          firstName: 'John',
          podId: 'podid3',
          lastName: 'Chorley',
          email: 'john.chorley@sharpfutures.org.uk',
          password: 'password3',
          age: '24',
          gender: 'male',
          isBanned: false,
          createdAt: Date.now,
          personal: {
            phoneNumber: '075083786858',
            address: {
              line1: '7 Harbury Cresent',
              line2: '',
              postcode: 'M22 8LX',
              county: 'Lancashire',
              town: 'Wythenshawe'
            }
          },
          info: {
            skills: [
              'HTML5', 'CSS', 'WordPress', 'JavaScript'
            ],
            currentlyEmployed: true
          },
          qualifications: {
            name: 'BTEC IT',
            level: '3',
            dateObtained: Date.now,
            locationObtained: 'Manchester'
          },
          isBooked: false
        },
        {
          firstName: 'Ihtezaz',
          podId: 'podid4',
          lastName: 'Anwar',
          email: 'i.anwar2015@hotmail.com',
          password: 'password4',
          age: '21',
          gender: 'male',
          isBanned: false,
          createdAt: Date.now,
          personal: {
            phoneNumber: '07712268684',
            address: {
              line1: '44 Markfield Avenue',
              line2: '',
              postcode: 'M13 9AE',
              county: 'Lancashire',
              town: 'Manchester'
            }
          },
          info: {
            skills: [
              'HTML', 'CSS', 'bootstrap', 'basic JavaScript', 'nodejs'
            ],
            currentlyEmployed: true
          },
          qualifications: {
            name: 'Degree in Computing',
            level: '2.1',
            dateObtained: Date.now,
            locationObtained: 'Manchester'
          },
          isBooked: false
        },
        {
          firstName: 'Jordan',
          podId: 'podid5',
          lastName: 'Mason',
          email: 'jordan.mason@live.co.uk',
          password: 'password5',
          age: '22',
          gender: 'male',
          isBanned: false,
          createdAt: Date.now,
          personal: {
            phoneNumber: '07402749334',
            address: {
              line1: '19 Parkleigh Drive',
              line2: 'New Moston',
              postcode: 'M40 3RZ',
              county: 'Lanchashire',
              town: 'Manchester'
            }
          },
          info: {
            skills: [
              'HTML', 'CSS', 'JavaScript', 'React', 'Nodejs'
            ],
            currentlyEmployed: true
          },
          qualifications: {
            name: 'BTEC inComputing',
            level: '1 & 2',
            dateObtained: Date.now,
            locationObtained: 'Manchester'
          },
          isBooked: false
        },
        {
          firstName: 'Beth',
          podId: 'podid6',
          lastName: 'Hermitt',
          email: 'bethany.hermitt@sharpfutures.org.uk',
          password: 'password6',
          age: '24',
          gender: 'female',
          isBanned: false,
          createdAt: Date.now,
          personal: {
            phoneNumber: '07931538738',
            address: {
              line1: 'Stretford',
              line2: '',
              postcode: 'M32 8NQ',
              county: 'Lancashire',
              town: 'Manchester'
            }
          },
          info: {
            skills: [
              'HTML', 'Design', 'CSS', 'JavaScript', 'Photoshop'
            ],
            currentlyEmployed: true
          },
          qualifications: {
            name: 'Degree',
            level: '5',
            dateObtained: Date.now,
            locationObtained: 'Manchester'
          },
          isBooked: false
        }
      ], cb);
    });


  }
  // create reviews
  function createReviews(reviewer, podUser, cb) {
    mongoDs.automigrate('Review', function(err) {
      if (err)
        return cb(err);

      var Review = app.models.Review;
      var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
      Review.create([
        {
          date: Date.now() - (DAY_IN_MILLISECONDS * 4),
          rating: 5,
          comments: 'A very good pod member.',
          publisherId: reviewer[0].id,
          podUserId: podUser[0].id,
        },
        {
          date: Date.now() - (DAY_IN_MILLISECONDS * 3),
          rating: 5,
          comments: 'Very good pod member.',
          publisherId: reviewer[1].id,
          podUserId: podUser[0].id,
        },
        {
          date: Date.now() - (DAY_IN_MILLISECONDS * 2),
          rating: 4,
          comments: 'Pod was ok.',
          publisherId: reviewer[1].id,
          podUserId: podUser[1].id,
        },
        {
          date: Date.now() - (DAY_IN_MILLISECONDS),
          rating: 4,
          comments: 'I would hire again.',
          publisherId: reviewer[2].id,
          podUserId: podUser[2].id,
        }
      ], cb);
    });
  }
};

/*module.exports = function(app) {
 var User = app.models.user;
 var Role = app.models.Role;
 var RoleMapping = app.models.RoleMapping;
 var PodMember = app.models.podMember;

 User.create([
 { username: 'admin', email: 'email@address.com', password: 'password' },
 { username: 'Admin', email: 'admin@address.com', password: 'adminpassword' }
 ], function(err, users) {
 if(err)
 throw err;

 console.log('Created users:', users);

 users[0].profiles.create({
 name: 'profile1',
 email: 'email'
 }, function(err, profile) {
 if(err)
 throw err;

 console.log('Created Profile:', profile);

 // Add PodMembers
 PodMember.create([
 { ownerId: profile.ownerId, memberId: users[0].id},
 { ownerId: profile.ownerId, memberId: users[1].id}
 ], function(err, podMember) {
 if(err)
 throw err;

 console.log('Created podMembers:', podMember);
 });
 });

 // Create profile 2
 users[1].profiles.create({
 name: 'Profile2',
 email: 'email'
 }, function(err, profile) {
 if(err)
 throw err;

 console.log('Created profile:', profile);

 // Add Pod Members
 PodMember.create({
 ownerId: profile.ownerId,
 memberId: users[1].id
 }, function(err, podMember) {
 if (err)
 throw err;

 console.log('Created PodMembers:', podMember);
 });
 });

 // create the admin role
 Role.create({
 name: 'admin'
 }, function(err, role) {
 if(err)
 throw err;

 console.log('Created role:', role);

 role.principals.create({
 principalType: RoleMapping.USER,
 principalId: users[0].id
 }, function(err, principal) {
 if(err)
 throw err;

 console.log('Created principal:', principal);
 });
 });
 });
 };*/
