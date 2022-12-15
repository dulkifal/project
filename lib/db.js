const mysql = require('mysql2');


// const db = mysql.createConnection({

//   host: process.env.MYSQL_HOST,
//   port: process.env.MYSQL_PORT,
//   database: process.env.MYSQL_DATABASE,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD

// });

const db = mysql.createConnection(process.env.DATABASE_URL)

module.exports = db;