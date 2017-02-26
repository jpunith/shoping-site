'use strict';

angular.module('myApp.men', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state( {
    name:'men',
    url: '/men',
    templateUrl: 'men/men.html',
    controller: 'MenCtrl',
    controllerAs: 'MC'
  });
}])

.controller('MenCtrl', [function() {
  var MC = this;
  MC.menShirts = [
    {
      'id':'shirt1',
      'displayName':'Green magma',
      'price':'1000',
      'imageUrl':'http://images.asos-media.com/inv/media/4/6/7/7/7527764/dove/image1xl.jpg?$XL$'
    },
    {
      'id':'shirt2',
      'displayName':'Red magma',
      'price':'1000',
      'imageUrl':'http://images.asos-media.com/inv/media/6/8/1/8/7408186/pink/image1xl.jpg?$XL$'
    },
    {
      'id':'shirt3',
      'displayName':'Yellow magma',
      'price':'1000',
      'imageUrl':'http://images.asos-media.com/inv/media/3/7/1/4/7444173/blue/image1xl.jpg?$XL$'
    },
    {
      'id':'shirt4',
      'displayName':'Pink magma',
      'price':'1000',
      'imageUrl':'http://images.asos-media.com/inv/media/0/8/7/7/7527780/lightblue/image1xl.jpg?$XL$'
    },
  ]
}]);
