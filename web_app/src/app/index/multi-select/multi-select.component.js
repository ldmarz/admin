import controller from './multi-select.controller';

export const MultiSelect = {
  bindings: {
    consultors: '<',
    selected: '='
  },
  controller,
  template: require('./multi-select.html')

};
