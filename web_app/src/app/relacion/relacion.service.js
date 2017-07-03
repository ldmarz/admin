export default class RelacionService {
  constructor($resource) {
    'ngInject';
    this.resource = $resource;
  }

  getRelacion(data) {
    return this.resource(API_URL + '/consultors/relacion').get(data).$promise;
  }
}
