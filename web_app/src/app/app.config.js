'use strict';

export default function routes($urlRouterProvider, $httpProvider, $locationProvider) {
  'ngInject';
  $locationProvider.html5Mode({enabled: true, requireBase: false});


  $.material.init();
};
