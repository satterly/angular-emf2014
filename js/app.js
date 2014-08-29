'use strict';

angular.module('emf2014', [
  'config',
  'ngRoute',
  'ngCookies',
  'emf2014.filters',
  'emf2014.services',
  'emf2014.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {templateUrl: 'partials/schedule.html', controller: 'ScheduleController'});
  $routeProvider.when('/watch', {templateUrl: 'partials/watch.html', controller: 'WatchController'});
  $routeProvider.otherwise({redirectTo: '/schedule'});
}]);