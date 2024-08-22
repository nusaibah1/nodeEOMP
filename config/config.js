import { createPool } from "mysql2"; //mysql2 is 
import 'dotenv/config'

let connection = createPool({
  host: process.env.hostDB,
  user: process.env.userDB,
  password: process.env.DBpwd,
  database: process.env.DBName,
  multipleStatements: true, 
  connectionLimit: 30 
})

connection.on('connection', (pool) => { 
    if(!pool) throw new Error('Couldn\'t connect to the database. Please try again later')
}) 

export {
    connection
}

 


