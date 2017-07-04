import controller from './grafica-bars.controller';

export const GraficaBars = {
  controller,
  require: {
    tabsCtrl: '^index'
  },
  template: require('./grafica-bars.html')

};
