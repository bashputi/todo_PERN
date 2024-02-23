const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "123pailamatabiri",
    host: "localhost",
    port: 4000,
    database: "perntodo"
});

module.exports = pool;