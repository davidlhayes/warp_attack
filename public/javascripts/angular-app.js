// namespace and call Angular.js
var warpApp = angular.module('warpApp', []);
var FURL = "https://shining-heat-2898.firebaseio.com";
var ref = new Firebase("https://shining-heat-2898.firebaseio.com")

// the code below is said to be needed for handlebars to work
warpApp.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
}]);

warpApp.controller('UserCtrl', function($scope) {
  $scope.addUser = function() {
    console.log('name = ' + $scope.enteredName);
    console.log('password = ' + $scope.enteredPassword);
    ref.createUser({
      email    : $scope.enteredName,
      password : $scope.enteredPassword
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    })}
    $scope.loginUser = function() {
      console.log('name = ' + $scope.enteredName);
      console.log('password = ' + $scope.enteredPassword);
      ref.authWithPassword({
        email    : $scope.enteredName,
        password : $scope.enteredPassword
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          // console.log("Authenticated most successfully with payload:", authData);
          // console.log("How's my hair?");
          // hook this user up with a partner or let them choose a side
          var gameBoard = new Firebase(FURL + "/gameBoard");
          var playerId = authData.uid;
          // gameBoard.remove();
          gameBoard.once('value', function(dataSnapshot) {
            if (dataSnapshot.exists()) {
              var obj = dataSnapshot;
                obj.forEach(function(childSnapshot) {
                var key = childSnapshot.key();
                var childData = childSnapshot.val();
                console.log('key: ' + key);
                var newRef = new Firebase(FURL + "/gameBoard/" + key);
                newRef.once("value", function(snapshot) {
                  console.log('**** BEGIN ****');
                  if (snapshot.child("federation").exists()) {
                    console.log('**** ONE ****');
                    if (snapshot.child("alliance").exists()) {
                      console.log('**** TWO *****');
                      alert('No room for more players');
                    } else {
                      console.log('***** THREE ******');
                      newRef.update({"alliance": playerId});
                    }
                  } else {
                      console.log('**** FOUR ****');
                      newRef.update({"federation": playerId});

                  }
                });
              });

              // console.log(dataSnapshot);
              // console.log("Object:" + dataSnapshot.numChildren());
              // console.log(gameBoard.toString());
              } else {
              console.log('um.....');

              newRef = new Firebase(FURL + "/gameBoard");


              var playerRef = newRef.push({"alliance":playerId});
              var gamePath = playerRef.toString();

            }

          });
          // end game set portion
        }
      })}
    $scope.logOutUser = function() {
      ref.unauth();
      console.log('You are logged out');
    }
});

warpApp.controller('PlayCtrl', function($scope) {
    $scope.authDataCallback = function() {
      console.log('you pressed play control');
      var authData = ref.getAuth();
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        console.log('The secret word is LOVE');
      } else {
        console.log('You may not see the secret word');
      }
    }
});

warpApp.controller('WarpCtrl', ['$scope', function($scope) {
  $scope.messages =
    [
      {
        user: 'Tom',
        date: new Date('2015', '09', '09'),
        image: 'http://www.cardinalsushi.com/images/soda.jpg',
        text: 'Backbone stinks!',
        likes: 0
      },
      {
        user: 'James',
        date: new Date('2015', '09', '09'),
        image: 'http://www.vetprofessionals.com/catprofessional/images/home-cat.jpg',
        text: 'Tom stinks! React+Backbone for life!',
        likes: 0
      },
      {
        user: 'Tristan',
        date: new Date('2015', '09', '09'),
        image: 'http://toytrucktoys.com/wp-content/uploads/2010/12/american-plastic-toy.jpg',
        text: 'Nah!',
        likes: 0
      }
    ],
    $scope.plusLike = function(index) {
      $scope.messages[index].likes += 1;
    };
    $scope.minusLike = function(index) {
      $scope.messages[index].likes -= 1;
    };
}]);

// Generate a Game ID from a shorter version of a psuedo-guid generator
function randId() {
return 'xxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
}
