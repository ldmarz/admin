import controller from './relacion-table.controller';

export const RelacionTable = {
  controller,
  require: {
    tabsCtrl: '^index'
  },
  template: require('./relacion-table.html')

};
