const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Chargers12!",
    host: "localhost",
    port: 5432,
    database: "postgres"
});


module.exports = {
    query: (text, params, callback) => pool.query(text, params, callback),
  };

