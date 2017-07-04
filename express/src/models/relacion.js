const db = require('../config/db');
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

class RelacionModel {
  getRelacion(consultors, dateBeg, dateEnd) {
    return db
      .from('cao_os')
      .rightJoin('cao_fatura', function() {
        this.on('cao_os.co_os', '=', 'cao_fatura.co_os')
          .andOn('cao_fatura.data_emissao', '>=', db.raw('?', [dateBeg]))
          .andOn('cao_fatura.data_emissao', '<=', db.raw('?', [dateEnd]));
      }, [dateBeg, dateEnd])
      .whereIn('co_usuario', consultors)
      .orderBy('data_emissao');
  }

  getNameMonth(number) {
    return monthNames[number];
  }
};

module.exports = new RelacionModel();
