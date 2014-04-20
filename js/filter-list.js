angular.module('a11yApp', [])
  .controller('a11yController', function($scope, $rootScope, $location, $window) {
    $scope.dataModel = [{
      "name" : "Marcy",
      "bio" : "Developer at Substantial, Girl Develop It Seattle Co-Chair"
    },{
      "name" : "Erik",
      "bio" : "Man of leisure, formerly at Amazon. Looking for something great."
    },{
      "name" : "Wally",
      "bio" : "Chaser of squirrels, tree-climber extraordinaire"
    },{
      "name" : "Terd Ferguson",
      "bio" : "Best nickname ever"
    }];
  })
  .directive('userInput', [function(){
    return {
      restrict: 'E',
      link: function($scope, $element, $attrs) {
        
      }
    }
  }]);