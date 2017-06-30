export default class IndexService {
  constructor($resource) {
    'ngInject';
    this.resource = $resource;
  }

  getConsultors() {
    return this.resource(API_URL + '/consultors/list').get().$promise;
  }
}
