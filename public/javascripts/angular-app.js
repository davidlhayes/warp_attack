// namespace and call Angular.js
var warpApp = angular.module('warpApp', ["firebase"]);
var FURL = "https://shining-heat-2898.firebaseio.com";
var ref = new Firebase("https://shining-heat-2898.firebaseio.com");
var RefMsg = new Firebase("https://shining-heat-2898.firebaseio.com/messages");
var RefFleet = new Firebase(FURL + '/alliance');

// the code below is said to be needed for handlebars to work
warpApp.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
}]);
// Message panel next to game board
// warpApp.controller('WarpCtrl', function($scope) {
// //
//
//   $scope.messages =
//     [
//       ''
//     ]
//     // $scope.plusLike = function(index) {
//     //   $scope.messages[index].likes += 1;
//     // };
//     // $scope.minusLike = function(index) {
//     //   $scope.messages[index].likes -= 1;
//     // };
//     console.log($scope.messages)
//   });



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
          RefPlayers = new Firebase(FURL + '/player');
          RefPlayers.once('value', function(snapshot) {
            console.log('yeah!');
            if (snapshot.child('alliance').exists) {
              Fleet = 'federation';
              console.log('we will be federation')
            } else {
              console.log('adding');
              RefPlayers.update({'player':'alliance'});
              Fleet = 'alliance';
            }
          });
          // this didn't work
            // if (RefFleet==null) {
            //   console.log('setting data')
            //
            //   RefFleet.push(authData.uid);
            //   Fleet = 'a';
            // } else {
            //   Fleet = 'f';
            //   console.log('hi')
            // }
            // RefAuth.set(authDat.uid);  // a datapath
          //   console.log(RefFleet.alliance);
          // console.log("Authenticated most successfully with payload:", authData);
          // console.log("How's my hair?");
          // hook this user up with a partner or let them choose a side
          var gameBoard = new Firebase(FURL + "/gameBoard");
          var playerId = authData.uid;
          // messageBox(playerId,'clear');
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
                      // newRef.update({"alliance": playerId});
                      // Fleets assigned, add pieces to tray
                        // var aPath = newRef.child('alliance').toString();
                        // var aRef = new Firebase(aPath);
                        // var pRef = new Firebase(aPath + '/pieces');
                        console.log(aPath);
              // logic moved to local machine
                        // pRef.update({"40":{"fleet":"a","rank":"1","revealed":false,"url":"/images/starship-a-1.png"},
                        // "41":{"fleet":"a","rank":"2","revealed":false,"url":"/images/starship-a-2.png"},
                        // "42":{"fleet":"a","rank":"3","revealed":false,"url":"/images/starship-a-3.png"},
                        // "43":{"fleet":"a","rank":"3","revealed":false,"url":"/images/starship-a-3.png"},
                        // "44":{"fleet":"a","rank":"4","revealed":false,"url":"/images/starship-a-4.png"},
                        // "45":{"fleet":"a","rank":"4","revealed":false,"url":"/images/starship-a-4.png"},
                        // "46":{"fleet":"a","rank":"4","revealed":false,"url":"/images/starship-a-4.png"},
                        // "47":{"fleet":"a","rank":"5","revealed":false,"url":"/images/starship-a-5.png"},
                        // "48":{"fleet":"a","rank":"5","revealed":false,"url":"/images/starship-a-5.png"},
                        // "49":{"fleet":"a","rank":"5","revealed":false,"url":"/images/starship-a-5.png"},
                        // "50":{"fleet":"a","rank":"5","revealed":false,"url":"/images/starship-a-5.png"},
                        // "51":{"fleet":"a","rank":"6","revealed":false,"url":"/images/starship-a-6.png"},
                        // "52":{"fleet":"a","rank":"6","revealed":false,"url":"/images/starship-a-6.png"},
                        // "53":{"fleet":"a","rank":"6","revealed":false,"url":"/images/starship-a-6.png"},
                        // "54":{"fleet":"a","rank":"6","revealed":false,"url":"/images/starship-a-6.png"},
                        // "55":{"fleet":"a","rank":"7","revealed":false,"url":"/images/starship-a-7.png"},
                        // "56":{"fleet":"a","rank":"7","revealed":false,"url":"/images/starship-a-7.png"},
                        // "57":{"fleet":"a","rank":"7","revealed":false,"url":"/images/starship-a-7.png"},
                        // "58":{"fleet":"a","rank":"7","revealed":false,"url":"/images/starship-a-7.png"},
                        // "59":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        // "60":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        // "61":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        // "62":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        // "63":{"fleet":"a","rank":"8","revealed":false,"url":"/images/starship-a-8.png"},
                        // "64":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        // "65":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        // "66":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        // "67":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        // "68":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        // "69":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        // "70":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        // "71":{"fleet":"a","rank":"9","revealed":false,"url":"/images/starship-a-9.png"},
                        // "72":{"fleet":"a","rank":"S","revealed":false,"url":"/images/starship-a-suicide.png"},
                        // "73":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        // "74":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        // "75":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        // "76":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        // "77":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        // "78":{"fleet":"a","rank":"M","revealed":false,"url":"/images/starship-a-mine.png"},
                        // "79":{"fleet":"a","rank":"F","revealed":false,"url":"/images/starship-a-flag.png"}});

                    }
                  } else {

  // this data is on the local machine now
  // only the board
                      // var gamePath = newRef.update({"federation": playerId});
                      // console.log('Team Path: ' + gamePath.toString());
                      // Fleets assigned, add pieces to tray
                      // newRef.update({"federation": playerId});
                      // Fleets assigned, add pieces to tray
                      //   var fPath = newRef.child('federation').toString();
                      //   var fRef = new Firebase(fPath);
                      //   var pRef = new Firebase(fPath + '/pieces');
                      // pRef.update({"0":{"fleet":"f","rank":"1","revealed":false,"url":"/images/starship-f-1.png"},
                      // "1":{"fleet":"f","rank":"2","revealed":false,"url":"/images/starship-f-2.png"},
                      // "2":{"fleet":"f","rank":"3","revealed":false,"url":"/images/starship-f-3.png"},
                      // "3":{"fleet":"f","rank":"3","revealed":false,"url":"/images/starship-f-3.png"},
                      // "4":{"fleet":"f","rank":"4","revealed":false,"url":"/images/starship-f-4.png"},
                      // "5":{"fleet":"f","rank":"4","revealed":false,"url":"/images/starship-f-4.png"},
                      // "6":{"fleet":"f","rank":"4","revealed":false,"url":"/images/starship-f-4.png"},
                      // "7":{"fleet":"f","rank":"5","revealed":false,"url":"/images/starship-f-5.png"},
                      // "8":{"fleet":"f","rank":"5","revealed":false,"url":"/images/starship-f-5.png"},
                      // "9":{"fleet":"f","rank":"5","revealed":false,"url":"/images/starship-f-5.png"},
                      // "10":{"fleet":"f","rank":"5","revealed":false,"url":"/images/starship-f-5.png"},
                      // "11":{"fleet":"f","rank":"6","revealed":false,"url":"/images/starship-f-6.png"},
                      // "12":{"fleet":"f","rank":"6","revealed":false,"url":"/images/starship-f-6.png"},
                      // "13":{"fleet":"f","rank":"6","revealed":false,"url":"/images/starship-f-6.png"},
                      // "14":{"fleet":"f","rank":"6","revealed":false,"url":"/images/starship-f-6.png"},
                      // "15":{"fleet":"f","rank":"7","revealed":false,"url":"/images/starship-f-7.png"},
                      // "16":{"fleet":"f","rank":"7","revealed":false,"url":"/images/starship-f-7.png"},
                      // "17":{"fleet":"f","rank":"7","revealed":false,"url":"/images/starship-f-7.png"},
                      // "18":{"fleet":"f","rank":"7","revealed":false,"url":"/images/starship-f-7.png"},
                      // "19":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      // "20":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      // "21":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      // "22":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      // "23":{"fleet":"f","rank":"8","revealed":false,"url":"/images/starship-f-8.png"},
                      // "24":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      // "25":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      // "26":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      // "27":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      // "28":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      // "29":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      // "30":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      // "31":{"fleet":"f","rank":"9","revealed":false,"url":"/images/starship-f-9.png"},
                      // "32":{"fleet":"f","rank":"S","revealed":false,"url":"/images/starship-f-suicide.png"},
                      // "33":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      // "34":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      // "35":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      // "36":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      // "37":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      // "38":{"fleet":"f","rank":"M","revealed":false,"url":"/images/starship-f-mine.png"},
                      // "39":{"fleet":"f","rank":"F","revealed":false,"url":"/images/starship-f-flag.png"}});
                  }

                });
              });

              // console.log(dataSnapshot);
              // console.log("Object:" + dataSnapshot.numChildren());
              // console.log(gameBoard.toString());
              } else {

              newRef = new Firebase(FURL + "/gameBoard");

              // var playerRef = newRef.push({"alliance":playerId});
              // var gamePath = playerRef.toString();

            }






          });
          // end game set portion
          newRef = new Firebase(FURL);
        }
      })}
    $scope.logOutUser = function() {
      RefFleet.remove();
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

// Talk to Firebase
var MyList;
var newObj;
var MyArray = [];

ref = new Firebase(FURL);
RefTurn = new Firebase(FURL + '\\turn');
// RefTurn.update({"turn":"a"})



MyList = new Firebase(FURL);

// Set Firebase Array equal to local Board

function BuildFirebaseArray() {
  var myObj = {};
  for (var i=0;i<10;i++) {
    for (var j=0;j<10;j++) {
      var objStr = '{ "r' + i + 'c' + j + '":' + Board[i][j] + '}';
      // console.log(objStr);
      myObj = JSON.parse(objStr);
      ref.update(JSON.parse(objStr));
    }
  }
}
// the following function listens for the turn attribute to change on Firebase
// On that signal, the local board is wiped and synced to Firebase
RefTurn.on('value', function(snapshot) {
  newObj = snapshot.val();
  console.log('Turn is now set')
  if (Turn != 's') Turn = newObj['turn'];
  console.log(Turn);
  for (var key in newObj) {
    if (key[0]=='r' && key[2]=='c') {      // parse data 'name' of format: r0c1
      Board[key[1]][key[3]] = newObj[key];
    }
  }
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);

});




// function GetBoard() {
//
//
//    for (var key in newObj) {
//      Board.push(newObj[key]);
//    }
//    console.log(Board);
//
// }



   // remove an item
  //  list.$remove(2).then(...);

   // make the list available in the DOM
  //  $scope.list = Mylist;


     // To make the data available in the DOM, assign it to $scope
    //  $scope.data = obj;

     // For three-way data bindings, bind it to the scope instead
    //  obj.$bindTo($scope, "data");
  // }
// ]);



// Generate all the pieces needed.
// 9-12 Using the hard-coded results of this object. Inserting it into the
// Firebase update command as a variable throws an error and I need to move on.

// Not used now

function tokens(playerId) {
  // define piece rank and number of pieces per rank
  var rank = ['1','2','3','4','5','6','7','8','9','suicide','mine','flag'];
  var dist = [ 1 , 1 , 2 , 3 , 4 , 4 , 4 , 5 , 8 ,    1    ,   6  ,   1  ];

  var pStrObj = '{';
  var url_prefix = '/assets/images/starship-';
  var f = '';
  var pId = 0;
  switch (MyFleet) {
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

// The following was an attempt to retrieve data with Firebase commands.
// 9/13/2015- resorting to Ajax.
// var dataURL = 'https://shining-heat-2898.firebaseio.com/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/federation/33';
//
// var rank = function(pId) {
//   // var dataURL = "";
//   if (pId > 39) {
//     dataURL = aURL + '/' + pId;
//   } else {
//     dataURL = fURL + '/' + pId;
//   }
//   var ref = new Firebase(dataURL);
//   console.log(dataURL);
//   ref.once('value', function(dataSnapshot) {
//     console.log("data " + dataSnapshot.key());
//   }, function(err) {
//     console.log('I cannot');
//   });
//   var query = ref.limitToFirst(5);
//   var refToSameLocation = query.ref();
//   console.log(refToSameLocation);
// }

// function messageBox(sender,message) {
//   // figure out fleet and set color
//   if (message == 'clear') {
//     RefMsg.remove();
//   } else {
//     if (MyFleet=='a') {
//       html = "<p class='alliance'>" + message + "</p>";
//     } else if (MyFleet='f') {
//       html = "<p class='alliance'>" + message + "</p>";
//     } else if (MyFleet='s') {
//       html = "<p class='system'>" + message + "</p>";
//     } else if (MyFleet='o') {
//       html = "<p class='utility'>" + message + "</p>";
//     }
//     RefMsg.push(html);
//   }
// }

function setTrayA() {
  // the initial home and final resting place for Alliance tokens
  var TrayA = [
        [ 0 ,  1,  2,  3 ],
        [ 4 ,  5,  6,  7 ],
        [ 8 ,  9, 10, 11 ],
        [12 , 13, 14, 15 ],
        [16 , 17, 18, 19 ],
        [20 , 21, 22, 23 ],
        [24 , 25, 26 ,27 ],
        [28 , 29, 30, 31 ],
        [32 , 33, 34 ,35 ],
        [36 , 37, 38 ,39 ]]
  // the initial home and final resting place for Federation tokens

}

function setTrayF() {
  var TrayF = [
        [ 40, 41, 42, 43 ],
        [ 44, 45, 46, 47 ],
        [ 48, 49, 50, 51 ],
        [ 52, 53, 54, 55 ],
        [ 56, 57, 58, 59 ],
        [ 60, 61, 62, 63 ],
        [ 64, 65, 66, 67 ],
        [ 68, 69, 70, 71 ],
        [ 72, 73, 74, 75 ],
        [ 76, 77, 78, 79 ]]
}
