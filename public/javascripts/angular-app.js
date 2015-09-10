// namespace and call Angular.js
var waapp = angular.module('waapp', []);

// the code below is said to be needed for handlebars to work
waapp.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
}]);

waapp.controller('waCtrl', ['$scope', function($scope) {
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
