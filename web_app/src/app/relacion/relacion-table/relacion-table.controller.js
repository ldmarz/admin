'use strict';
import moment from 'moment';

export default class RelacionTableController {
  constructor($scope, RelacionService) {
    'ngInject';
    this.RelacionService = RelacionService;
    this.relacion = [];
    this.acumReceita = {};
    this.acumSalario = {};
    this.acumComissao = {};
    this.acumLucro = {};
  }

  $onInit() {
    if (this.tabsCtrl.selected.length > 0) {
      this.getRelations();
    } else {
      sweetAlert('Oops...', 'Debe seleccionar al menos un consultor', 'error');
    }
  };

  getRelations() {
    this.RelacionService.getRelacion({
      consultors: this.tabsCtrl.selected,
      date_beg: moment(this.tabsCtrl.date_beg).format('YYYY/MM/DD'),
      date_end: moment(this.tabsCtrl.date_end).format('YYYY/MM/DD')
    })
    .then((result) => {
      if (Object.keys(result.data).length > 0) {
        this.relacion = result.data;
      } else {
        sweetAlert('Oops...', 'No se ha encontrado resultados con los filtros especificados, Pruebe con el año 2007', 'error');
      };
    })
    .catch((e) => {
      console.error(e);
    });
  }

  reset() {
    this.acumReceita = 0;
  }

  sumValues(field, key, value) {
    if (!this[field][key]) {
      this[field][key] = 0;
    }

    this[field][key] += value;
  }
}
