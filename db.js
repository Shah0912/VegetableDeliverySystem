const Pool = require("pg").Pool;

const pool = new Pool({
    user: "dbadmin",
    password : "admin",
    host : "localhost",
    port : 5432,
    database : "deliverySystem"
});

module.exports = pool;