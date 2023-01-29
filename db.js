const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Chargers12!",
    host: "localhost",
    port: 5432,
    database: "recipe app"
});

module.exports = pool;

