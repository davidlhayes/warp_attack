// namespace and call Angular.js
var warpApp = angular.module('warpApp', []);
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
          console.log("Authenticated successfully with payload:", authData);
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
