const consultor = require('./main/consultor.js');

module.exports = function(app) {
  app.use('/consultors', consultor);
};
