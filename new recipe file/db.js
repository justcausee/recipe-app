const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'recipes',
  password: 'password',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};