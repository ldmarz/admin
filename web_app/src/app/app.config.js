'use strict';

export default function routes($urlRouterProvider, $httpProvider, $locationProvider,
  cfpLoadingBarProvider) {
  'ngInject';
  $locationProvider.html5Mode({enabled: true, requireBase: false});

  cfpLoadingBarProvider.includeSpinner = false;

  $.material.init();
};
