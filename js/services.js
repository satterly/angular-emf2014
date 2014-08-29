'use strict';

/* Services */

angular.module('emf2014.services', ['config', 'ngResource'])

.factory('Schedule', ['$resource', 'config',
  function($resource, config) {
    return $resource(config.endpoint+'/schedule.json', {}, {
      'query':   {method:'GET'}
    });
  }]);
