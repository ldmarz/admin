'use strict';

export default class IndexController {
  constructor(IndexService) {
    'ngInject';
    this.IndexService = IndexService;
    this.consultors = [];
    this.getConsultors();
  }

  getConsultors() {
    this.IndexService.getConsultors()
    .then((result) => {
      this.consultors = result.data;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
