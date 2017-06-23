const db = require('../config/db');

class ConsultorModel {
  list() {
    return db
      .from('cao_usuario')
      .innerJoin('permissao_sistema', 'cao_usuario.co_usuario', 'permissao_sistema.co_usuario')
      .where({
        co_sistema:1,
        in_ativo:'S'
      })
      .whereIn('co_tipo_usuario', [0, 1, 2]);
  }
};

module.exports = new ConsultorModel();
