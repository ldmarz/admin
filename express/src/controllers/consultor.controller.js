// Modules
const compose = require('compose-middleware').compose;
const ConsultorModel = require('../models/consultor');

// Middlewares
const response = require('../middlewares/response.middleware');

// Public Methods
module.exports.getList = compose([getList, response]);

async function getList(req, res, next) {
  try {
    res.payload = await ConsultorModel.list();
    next();
  } catch (e) {
    next(e);
  }
}
