'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import {RelacionTable} from './relacion-table/relacion-table.component';
import RelacionService from './relacion.service';

import routing from './relacion.routes';

export default angular.module('relacion', [uiRouter, ngResource])
  .config(routing)
  .component('relacionTable', RelacionTable)
  .service('RelacionService', RelacionService)
  .name;
