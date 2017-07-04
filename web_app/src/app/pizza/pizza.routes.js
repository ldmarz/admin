'use strict';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('index.pizza', {
      url: 'index/pizza',
      views: {
        'contentPage': {
          template: `<pizza></pizza>`
        }
      }
    });
}
