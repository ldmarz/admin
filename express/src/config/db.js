const knex = require('knex');

const configDb = {
  client: 'mysql',
  connection: {
    host : process.env.MYSQL_URL,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
  }
};

const db = knex(configDb);

module.exports = db;
