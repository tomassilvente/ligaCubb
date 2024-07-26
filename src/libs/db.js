import mysql from 'mysql2/promise'

const config ={
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: '',
    database: 'ligaCubb'
}
export const connection =  mysql.createConnection(config)