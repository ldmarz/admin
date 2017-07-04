'use strict';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('index.grafica', {
      url: 'index/grafica',
      views: {
        'contentPage': {
          template: `<grafica-bars></grafica-bars>`
        }
      }
    });
}
