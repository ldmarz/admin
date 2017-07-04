export default class PizzaService {
  constructor($resource) {
    'ngInject';
    this.resource = $resource;
  }

  getGrafica(data) {
    return this.resource(API_URL + '/consultors/pizza').get(data).$promise;
  }
}
