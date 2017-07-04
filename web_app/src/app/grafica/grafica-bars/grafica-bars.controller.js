'use strict';
import moment from 'moment';
import _ from 'lodash';

export default class GraficaBarsController {
  constructor($scope, GraficaService) {
    this.GraficaService = GraficaService;
    this.salarios = 0;
    this.chartConfig = {
      'chart': {
        'height': 500,
        'width': 500,
        'type': 'line'
      },
      'plotOptions': {
        'series': {
          'stacking': ''
        }
      },
      'xAxis': {
        categories: []
      },
      'series': [
      ],
      'title': {
        'text': 'Grafico'
      }
    };
  }

  $onInit() {
    if (this.tabsCtrl.selected.length > 0) {
      this.getGrafica();
    } else {
      sweetAlert('Oops...', 'Debe seleccionar al menos un consultor', 'error');
    }
  };

  getGrafica() {
    this.GraficaService.getGrafica({
      consultors: this.tabsCtrl.selected,
      date_beg: moment(this.tabsCtrl.date_beg).format('YYYY/MM/DD'),
      date_end: moment(this.tabsCtrl.date_end).format('YYYY/MM/DD')
    })
    .then((result) => {
      this.prepareData(result);
    });
  }

  getAverageSalary() {

  }

  prepareData(result) {
    this.series = [];
    _.forEach(result.data, (value, key) => {
      this.salarios += value.brut_salario || 0;
      delete value.relacion;
      delete value.brut_salario;

      if (this.chartConfig.xAxis.categories.length === 0) {
        this.chartConfig.xAxis.categories = Object.keys(value);
      }

      let temp = {
        data: [],
        type: 'column',
        name: key
      };

      _.forEach(value, (total) => {
        temp.data.push(total);
      });
      this.series.push(temp);
    });

    this.average = this.salarios / Object.keys(result.data).length;
    this.series.push({
      name: 'Promedio',
      data: _.fill(Array(this.chartConfig.xAxis.categories.length), this.average)});

    this.chartConfig.series = this.series;
    this.render = true;
  }
}
