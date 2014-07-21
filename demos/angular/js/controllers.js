var pageControllers = angular.module('pageControllers', []);

pageControllers.controller('FavoriteMoviesCtrl', ['$scope', '$routeParams',
  function ($scope) {
  	$scope.movieList = ["Death Proof", "The Fifth Element", "PeeWee's Big Adventure", "Brazil", "Alice in Wonderland", "Hackers"];
}]);

pageControllers.controller('BucketListCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

pageControllers.controller('AboutCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);