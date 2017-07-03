'use strict';

export default class IndexController {
  constructor(IndexService) {
    'ngInject';
    this.IndexService = IndexService;
    this.consultors = [];
    this.getConsultors();
    this.selected = [];

    var date = new Date();
    this.date_beg = new Date(date.getFullYear(), date.getMonth(), 1);
    this.date_end = date;
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
