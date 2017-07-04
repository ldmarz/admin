export default class GraficaService {
  constructor($resource) {
    'ngInject';
    this.resource = $resource;
  }

  getGrafica(data) {
    return this.resource(API_URL + '/consultors/grafica').get(data).$promise;
  }
}
