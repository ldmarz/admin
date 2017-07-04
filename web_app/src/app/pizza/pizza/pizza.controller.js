'use strict';
import moment from 'moment';
import _ from 'lodash';

export default class PizzaController {
  constructor($scope, PizzaService) {
    this.PizzaService = PizzaService;
    this.salarios = 0;
    this.pizzas = [];
    this.chartConfig = {
      'chart': {
        'height': 200,
        'width': 200,
        'type': 'pie'
      },
      'plotOptions': {
        'series': {
          'stacking': ''
        }
      },
      'xAxis': {
        categories: ['asdas']
      },
      'series': [
      ],
      'title': {
        'text': ''
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
    this.PizzaService.getGrafica({
      consultors: this.tabsCtrl.selected,
      date_beg: moment(this.tabsCtrl.date_beg).format('YYYY/MM/DD'),
      date_end: moment(this.tabsCtrl.date_end).format('YYYY/MM/DD')
    })
    .then((result) => {
      this.prepareData(result);
    });
  }

  prepareData(result) {
    this.series = [];
    this.total = 0;
    _.forEach(result.data, (value, key) => {
      this.total += value['total'] || 0;
    });

    _.forEach(result.data, (value, key) => {
      let temp = {};

      angular.copy(this.chartConfig, temp);

      temp.series = [{
        data: [{
          name: key,
          y: value['total'] || 0
        },
        {
          name: 'Ganancia neta',
          y: this.total
        } ]}];

      this.pizzas.push(temp);
    });
    this.render = true;
  }
}
