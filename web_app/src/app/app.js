'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import angularLoadingBar from 'angular-loading-bar';
import ngSanitize from 'angular-sanitize';

import uiSelect from 'ui-select';
import 'bootstrap';
import 'bootstrap-material-design/dist/js/material.min';
import 'bootstrap-material-design/dist/js/ripples';

import routing from './app.config';
import run from './app.run';
// Stylesheets
import '../public/style/app.scss';

// Importing app modules
import root from './root';
import index from './index';

angular
  .module(MODULE_NAME, [uirouter, index, root, ngAnimate, angularLoadingBar, uiSelect, ngSanitize])
  .config(routing)
  .run(run);

angular.element(document.body).append('<root></root>');
angular.bootstrap(document, [MODULE_NAME]);

export default MODULE_NAME;
