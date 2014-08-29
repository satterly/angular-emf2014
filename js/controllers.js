'use strict';

/* Controllers */

angular.module('emf2014.controllers', [])

  .controller('ScheduleController', ['$scope', '$route', '$cookieStore', 'Schedule', function($scope, $route, $cookieStore, Schedule) {

    Schedule.query({}, function(response) {
      $scope.schedule = response.schedule;
    });

    $scope.star = function(id) {
      $cookieStore.put(id, true);
    };

    $scope.unstar = function(id) {
      $cookieStore.put(id, false);
    };

    $scope.isStarred = function(id) {
      return $cookieStore.get(id);
    };

  }])

   .controller('WatchController', ['$scope', '$route', '$cookieStore', '$timeout', 'Schedule', function($scope, $route, $cookieStore, $timeout, Schedule) {

    Schedule.query({}, function(response) {
      $scope.schedule = response.schedule;
    });

    $scope.star = function(id) {
      $cookieStore.put(id, true);
    };

    $scope.unstar = function(id) {
      $cookieStore.put(id, false);
    };

    $scope.isStarred = function(id) {
      return $cookieStore.get(id);
    };

  }]);