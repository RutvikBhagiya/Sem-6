import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "Rutvik&106",
    database : "awt_db"
})

export default pool;
