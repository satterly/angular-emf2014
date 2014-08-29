'use strict';

/* Filters */

var emf2014Filters = angular.module('emf2014.filters', []);

emf2014Filters.filter('capitalize', function() {
  return function(text) {
    return String(text).replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
  };
});

// https://github.com/wildlyinaccurate/angular-relative-date
emf2014Filters.filter('relative', function() {
      return function(date) {
        var now = new Date();
        var calculateDelta, day, delta, hour, minute, month, week, year;
        if (!(date instanceof Date)) {
          date = new Date(date);
        }
        delta = null;
        minute = 60;
        hour = minute * 60;
        day = hour * 24;
        week = day * 7;
        month = day * 30;
        year = day * 365;
        calculateDelta = function() {
          return delta = Math.round((now - date) / 1000);
        };
        calculateDelta();
        if (delta > day && delta < week) {
          date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
          calculateDelta();
        }
        switch (false) {
          case !(delta < hour):
            return "" + (Math.floor(delta / minute)) + "m";
          case !(delta < day):
            return "" + (Math.floor(delta / hour)) + "h";
          case !(delta < month):
            return "" + (Math.floor(delta / day)) + "d";
          case !(delta < year):
            return "" + (Math.floor(delta / week)) + "w";
          default:
            return "" + (Math.floor(delta / year)) + "y";
        }
      };
    });