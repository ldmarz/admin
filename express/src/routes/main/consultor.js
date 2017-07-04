const {Router} = require('express');
const router = Router();
const controller = require('../../controllers/consultor.controller.js');

router
  .get('/list', controller.getList)
  .get('/relacion', controller.getRelacion)
  .get('/grafica', controller.getGrafica)
  .get('/pizza', controller.getPizza);

module.exports = router;
