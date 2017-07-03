'use strict';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('index.relacion', {
      url: 'index/relacion',
      views: {
        'contentPage': {
          template: `<relacion-table></relacion-table>`
        }
      }
    });
}
