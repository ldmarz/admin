'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import routing from './index.routes';
import {MultiSelect} from './multi-select/multi-select.component';
import propsFilter from './multi-select/multi-select.filter';
import {Index} from './index.component';
import IndexService from './index.service';
import {NavBar} from './nav-bar/nav-bar.component';

export default angular.module('index', [uiRouter, ngResource])
  .filter('props', propsFilter)
  .component('multiSelect', MultiSelect)
  .component('index', Index)
  .component('navBar', NavBar)
  .service('IndexService', IndexService)
  .config(routing)
  .name;
