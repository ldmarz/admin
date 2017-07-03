const {Router} = require('express');
const router = Router();
const controller = require('../../controllers/consultor.controller.js');

router
  .get('/list', controller.getList)
  .get('/relacion', controller.getRelacion);

module.exports = router;
