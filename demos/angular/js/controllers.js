var myStuffControllers = angular.module('myStuffControllers', []);

myStuffControllers.controller('FavoriteMoviesCtrl', ['$scope', '$routeParams',
  function ($scope) {
  	$scope.movieList = ["Death Proof", "The Fifth Element", "PeeWee's Big Adventure", "Brazil", "Alice in Wonderland", "Hackers"];
}]);

myStuffControllers.controller('BucketListCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

myStuffControllers.controller('AboutCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

myStuff.controller('myStuffController', ['$scope', '$location',
	function($scope, $location){
		$scope.getClass = function(path) {
	    if ($location.path().substr(0, path.length) == path) {
	      return "active"
	    } else {
	      return ""
	    }
		}
}]);