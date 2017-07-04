import controller from './pizza.controller';

export const Pizza = {
  controller,
  require: {
    tabsCtrl: '^index'
  },
  template: require('./pizza.html')

};
