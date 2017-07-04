// Modules
const _ = require('lodash');
const compose = require('compose-middleware').compose;
const ConsultorModel = require('../models/consultor');
const RelacionModel = require('../models/relacion');

// Middlewares
const response = require('../middlewares/response.middleware');

// Public Methods
module.exports.getList = compose([getList, response]);
module.exports.getRelacion = compose([getRelacion, combineDataByDate(calculateRelacion), prepareSalario, response]);
module.exports.getGrafica = compose([getRelacion, combineDataByDate(prepareGrafica), prepareSalario, response]);
module.exports.getPizza = compose([getRelacion, combineDataByDate(preparePizza), response]);

async function getList(req, res, next) {
  try {
    res.payload = await ConsultorModel.list();
    next();
  } catch (e) {
    next(e);
  }
}

async function getRelacion(req, res, next) {
  try {
    res.consultors = req.query.consultors;
    let consultors = await RelacionModel.getRelacion(res.consultors, req.query.date_beg, req.query.date_end);
    res.payload = _.groupBy(consultors, 'co_usuario');
    res.relacion = true;

    next();
  } catch (e) {
    next(e);
  }
}

/* =============================================
   =           get getRelacion Block              =
   ============================================= */

function newObject(res) {
  let result = {};
  if (Array.isArray(res.consultors)) {
    res.consultors.forEach((value) => {
      result[value] = {relacion: {}};
    });
  } else {
    result[res.consultors] = {relacion: {}};
  }

  return result;
}

function combineDataByDate(callback) {
  return (req, res, next) => {
    try {
      let result = Object.assign({}, newObject(res));
      for (let consultor in res.payload) {
        res.payload[consultor].forEach((value, key) => {
          let date = new Date(value.data_emissao);
          let keyName = RelacionModel.getNameMonth(date.getMonth()) + ' de ' + date.getFullYear();

          result = callback(result, consultor, keyName, value);
        });
      }

      res.payload = result;
      next();
    } catch (e) {
      next(e);
    }
  };
}

function calculateRelacion(result, consultor, keyName, value) {
  if (!result[consultor]['relacion'][keyName]) {
    result[consultor]['relacion'][keyName] = {
      receitaLiquida : 0,
      Comissao : 0
    };
  }

  result[consultor]['relacion'][keyName]['receitaLiquida'] += calculateReceitaLiquida(value);
  result[consultor]['relacion'][keyName]['Comissao'] += calculateComissao(value);
  return result;
}

function calculateReceitaLiquida(value) {
  return value.valor - ((value.valor * value.total_imp_inc) / 100);
}

function calculateComissao(value) {
  return ((value.valor - ((value.valor * value.total_imp_inc) / 100)) * value.comissao_cn) / 100;
}

async function prepareSalario(req, res, next) {
  try {
    let salarios = await ConsultorModel.getSalarios(res.consultors);
    salarios.forEach((value, key) => {
      if (_.has(res.payload, value.co_usuario)) {
        res.payload[value.co_usuario]['brut_salario'] = value.brut_salario;
      }
    });
    next();
  } catch (e) {
    next(e);
  }
}

/* =====  End getRelacion block  ====== */

function calculateGanancias(value) {
  return value.valor - ((value.valor * value.total_imp_inc) / 100);
}

function initializeGanancia(result, keyName) {
  _.forEach(result, (value, key) => {
    result[key][keyName] = 0;
  });
  return result;
}

function prepareGrafica(result, consultor, keyName, value) {
  if (typeof result[consultor][keyName] === 'undefined') {
    result = initializeGanancia(result, keyName);
  }

  result[consultor][keyName] += calculateGanancias(value);
  return result;
}

function preparePizza(result, consultor, keyName, value) {
  if (typeof result[consultor]['total'] === 'undefined') {
    result[consultor]['total'] = 0;
  }

  result[consultor]['total'] += calculateGanancias(value);
  return result;
}
