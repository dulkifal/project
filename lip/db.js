const mysql = require('mysql2');

 
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});
 
export default   db.query(
  'SELECT * FROM users ', (error, results,fields)=>{
    console.log(results)
  }
)