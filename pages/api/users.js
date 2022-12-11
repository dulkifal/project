const mysql = require('mysql2');

export default function handler(req, res){
const db = mysql.createConnection({
   
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  
});
 
    db.query(
  'SELECT * FROM users', (error, results,fields)=>{
    console.log(process.env.MYSQL_HOST)
    console.log(error)
    console.log(fields)
    res.send(results)
  }
)
}