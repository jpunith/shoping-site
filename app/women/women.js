'use strict';

angular.module('myApp.women', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state( {
    name:'women',
    url:'/women',
    templateUrl: 'women/women.html',
    controller: 'WomenCtrl',
    controllerAs: 'WC'
    });
}])

.controller('WomenCtrl', [function() {
  var WC = this;
  WC.womenShirts = [
    {
      'id':'shirt1',
      'displayName':'Green magma',
      'price':'1000',
      'imageUrl':'../images/women1.jpg'
    },
    {
      'id':'shirt2',
      'displayName':'Red magma',
      'price':'1000',
      'imageUrl':'../images/women2.jpg'
    },
    {
      'id':'shirt3',
      'displayName':'Yellow magma',
      'price':'1000',
      'imageUrl':'../images/women3.jpg'
    },
    {
      'id':'shirt4',
      'displayName':'Pink magma',
      'price':'1000',
      'imageUrl':'../images/women4.jpg'
    },
  ]
}]);
