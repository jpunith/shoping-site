'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.men',
  'myApp.women',
  'myApp.version',
  'myApp.voiceInput'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
  //$stateProvider.otherwise({redirectTo: '/view1'});
  $urlRouterProvider.otherwise('men');
}]).
run( ['$rootScope', '$state', '$stateParams',
                      function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);
