'use strict';
 
angular.module('myAduanas', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/index', {  templateUrl: 'index/index.html',    controller: 'indexCtrl'  });
}])
 
// Home controller
.controller('indexCtrl', [function() {
 alert("dskldskjldskjf");
}]);