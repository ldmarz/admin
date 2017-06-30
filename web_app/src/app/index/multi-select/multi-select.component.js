import controller from './multi-select.controller';

export const MultiSelect = {
  bindings: {
    consultors: '<'
  },
  controller,
  template: require('./multi-select.html')

};
