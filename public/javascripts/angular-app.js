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
          // get the path to the specific game
                var newRef = new Firebase(FURL + "/gameBoard/" + key);
          // determine which fleet (which color/side of board) is already
          // taken and assign the other one.
                newRef.once("value", function(snapshot) {
                  if (snapshot.child("federation").exists()) {
                    if (snapshot.child("alliance").exists()) {
                      alert('No room for more players');
                    } else {
                        console.log('HEY HEY')
                      newRef.update({"alliance": playerId});
                      // Fleets assigned, add pieces to tray
                        var aPath = newRef.child('alliance').toString();
                        var aRef = new Firebase(aPath);
                        var pRef = new Firebase(aPath + '/pieces');
                        console.log(aPath);

                        pRef.update({"40":{"fleet":"a","rank":"1","revealed":false,"url":"/images/starship-a-1.png"},
                        "41":{"fleet":"a","rank":"2","revealed":false,"url":"/images/starship-a-2.png"},
                        "42":{"fleet":"a","rank":"3","revealed":false,"url":"/images/starship-a-3.png"},
                        "43":{"fleet":"a","rank":"3","revealed":false,"url":"/images/starship-a-3.png"},
                        "44":{"fleet":"a","rank":"4","revealed":false,"url":"/images/starship-a-4.png"},
                        "45":{"fleet":"a","rank":"4","revealed":false,"url":"/images/starship-a-4.png"},
                        "46":{"fleet":"a","rank":"4","revealed":false,"url":"/images/starship-a-4.png"},
                        "47":{"fleet":"a","rank":"5","revealed":false,"url":"/images/starship-a-5.png"},
                        "48":{"fleet":"a","rank":"5","revealed":false,"url":"/images/starship-a-5.png"},
                        "49":{"fleet":"a","rank":"5","revealed":false,"url":"/images/starship-a-5.png"},
                        "50":{"fleet":"a","rank":"5","revealed":false,"url":"/images/starship-a-5.png"},
                        "51":{"fleet":"a","rank":"6","revealed":false,"url":"/images/starship-a-6.png"},
                        "52":{"fleet":"a","rank":"6","revealed":false,"url":"/images/starship-a-6.png"},
                        "53":{"fleet":"a","rank":"6","revealed":false,"url":"/images/starship-a-6.png"},
                        "54":{"fleet":"a","rank":"6","revealed":false,"url":"/images/starship-a-6.png"},
                        "55":{"fleet":"a","rank":"7","revealed":false,"url":"/images/starship-a-7.png"},
                        "56":{"fleet":"a","rank":"7","revealed":false,"url":"/images/starship-a-7.png"},
                        "57":{"fleet":"a","rank":"7","revealed":false,"url":"/images/starship-a-7.png"},
                        "58":{"fleet":"a","rank":"7","revealed":false,"url":"/images/starship-a-7.png"},
                        "59":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        "60":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        "61":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        "62":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        "63":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        "64":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        "65":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        "66":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        "67":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        "68":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        "69":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        "70":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        "71":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        "72":{"fleet":"a","rank":"S","revealed":false,"url":"/images/starship-a-suicide.png"},
                        "73":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        "74":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        "75":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        "76":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        "77":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        "78":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        "79":{"fleet":"a","rank":"F","revealed":false,"url":"/images/starship-a-flag.png"}});

                    }
                  } else {
                      var gamePath = newRef.update({"federation": playerId});
                      // console.log('Team Path: ' + gamePath.toString());
                      // Fleets assigned, add pieces to tray
                      newRef.update({"federation": playerId});
                      // Fleets assigned, add pieces to tray
                        var fPath = newRef.child('federation').toString();
                        var fRef = new Firebase(fPath);
                        var pRef = new Firebase(fPath + '/pieces');
                      pRef.update({"0":{"fleet":"f","rank":"1","revealed":false,"url":"/images/starship-f-1.png"},
                      "1":{"fleet":"f","rank":"2","revealed":false,"url":"/images/starship-f-2.png"},
                      "2":{"fleet":"f","rank":"3","revealed":false,"url":"/images/starship-f-3.png"},
                      "3":{"fleet":"f","rank":"3","revealed":false,"url":"/images/starship-f-3.png"},
                      "4":{"fleet":"f","rank":"4","revealed":false,"url":"/images/starship-f-4.png"},
                      "5":{"fleet":"f","rank":"4","revealed":false,"url":"/images/starship-f-4.png"},
                      "6":{"fleet":"f","rank":"4","revealed":false,"url":"/images/starship-f-4.png"},
                      "7":{"fleet":"f","rank":"5","revealed":false,"url":"/images/starship-f-5.png"},
                      "8":{"fleet":"f","rank":"5","revealed":false,"url":"/images/starship-f-5.png"},
                      "9":{"fleet":"f","rank":"5","revealed":false,"url":"/images/starship-f-5.png"},
                      "10":{"fleet":"f","rank":"5","revealed":false,"url":"/images/starship-f-5.png"},
                      "11":{"fleet":"f","rank":"6","revealed":false,"url":"/images/starship-f-6.png"},
                      "12":{"fleet":"f","rank":"6","revealed":false,"url":"/images/starship-f-6.png"},
                      "13":{"fleet":"f","rank":"6","revealed":false,"url":"/images/starship-f-6.png"},
                      "14":{"fleet":"f","rank":"6","revealed":false,"url":"/images/starship-f-6.png"},
                      "15":{"fleet":"f","rank":"7","revealed":false,"url":"/images/starship-f-7.png"},
                      "16":{"fleet":"f","rank":"7","revealed":false,"url":"/images/starship-f-7.png"},
                      "17":{"fleet":"f","rank":"7","revealed":false,"url":"/images/starship-f-7.png"},
                      "18":{"fleet":"f","rank":"7","revealed":false,"url":"/images/starship-f-7.png"},
                      "19":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      "20":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      "21":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      "22":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      "23":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      "24":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      "25":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      "26":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      "27":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      "28":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      "29":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      "30":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      "31":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      "32":{"fleet":"f","rank":"S","revealed":false,"url":"/images/starship-f-suicide.png"},
                      "33":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      "34":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      "35":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      "36":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      "37":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      "38":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      "39":{"fleet":"f","rank":"F","revealed":false,"url":"/images/starship-f-flag.png"}});
                  }

                });
              });

              // console.log(dataSnapshot);
              // console.log("Object:" + dataSnapshot.numChildren());
              // console.log(gameBoard.toString());
              } else {

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
}]
);

// Generate all the pieces needed.
// 9-12 Using the hard-coded results of this object. Inserting it into the
// Firebase update command as a variable throws an error and I need to move on.

function pieces(playerId,fleet) {
  // define piece rank and number of pieces per rank
  var rank = ['1','2','3','4','5','6','7','8','9','suicide','mine','flag'];
  var dist = [ 1 , 1 , 2 , 3 , 4 , 4 , 4 , 5 , 8 ,    1    ,   6  ,   1  ];

  var pStrObj = '{';
  var url_prefix = '/images/starship-';
  var f = '';
  var pId = 0;
  switch (fleet) {
    case 'federation':
      f = 'f';
      pId = 0;
    case 'alliance':
      f = 'a';
      pId = 40;
    default:
      f = 'f';
  }
  for (var r in rank) {
    for (var i=0;i< dist[r];i++) {
       pStrObj =
       pStrObj +'"' + pId + '":' +
                '{"fleet":"' + f + '",' +
                '"rank":"' + rank[r] + '",' +
                '"revealed":' + false + ',' +
                '"url":"' + url_prefix + f + '-' + rank[r] + '.png"}';
       if (r < rank.length-1) { pStrObj = pStrObj + ','}
       pId = pId + 1;
    }
  }
  pStrObj = pStrObj + '}';
  pObj = pStrObj
  return pObj;
}
