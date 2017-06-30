'use strict';
import angular from 'angular';
import {root} from './root.component';

export default angular.module('root', [])
  .component('root', root)
  .name;
