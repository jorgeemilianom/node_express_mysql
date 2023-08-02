import mysql from "mysql2/promise";

const DB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "faltaencasa",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default DB;
