'use strict';

var myStuff = angular.module('my-stuff', ['ngRoute', 'ui.sortable', 'myStuffControllers', 'sortableListDirective']);

myStuff.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/favorite-movies', {
        templateUrl: 'partials/page-favorite-movies.html',
        controller: 'FavoriteMoviesCtrl'
      }).
      when('/bucket-list', {
        templateUrl: 'partials/page-bucket-list.html',
        controller: 'BucketListCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/page-about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
      	templateUrl: 'partials/page-home.html',
        redirectTo: '/'
      });
  }]);