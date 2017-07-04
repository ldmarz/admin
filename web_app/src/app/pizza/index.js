'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import {Pizza} from './pizza/pizza.component';
import PizzaService from './pizza.service';
import highchartsNg from 'highcharts-ng';

import routing from './pizza.routes';

export default angular.module('pizza', [uiRouter, ngResource, highchartsNg])
  .config(routing)
  .component('pizza', Pizza)
  .service('PizzaService', PizzaService)
  .name;
