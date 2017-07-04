'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import {GraficaBars} from './grafica-bars/grafica-bars.component';
import GraficaService from './grafica.service';
import highchartsNg from 'highcharts-ng';

import routing from './grafica.routes';

export default angular.module('grafica', [uiRouter, ngResource, highchartsNg])
  .config(routing)
  .component('graficaBars', GraficaBars)
  .service('GraficaService', GraficaService)
  .name;
