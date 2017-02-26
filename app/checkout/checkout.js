'use strict';

angular.module('myApp.men', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state( {
    name:'checkout',
    url: '/checkout/:catagory/:item',
    templateUrl: 'checkout/checkout.html',
    controller: 'checkout',
    controllerAs: 'CC'
  });
}])
