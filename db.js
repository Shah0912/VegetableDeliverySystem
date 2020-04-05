const Pool = require("pg").Pool;

const pool = new Pool({
    user: "dbadmin",
    password : "admin",
    host : "localhost",
    port : 5432,
    database : "deliverysystem"
});

module.exports = pool;