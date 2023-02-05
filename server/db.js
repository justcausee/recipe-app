const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Lolipop821",
  host: "localhost",
  port: 5432,
  database: "recipes",
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
