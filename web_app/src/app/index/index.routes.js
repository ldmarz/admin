'use strict';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('index', {
      url: '/',
      template: `<index></index>`
    });
}
