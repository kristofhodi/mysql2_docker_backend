import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "teszt_db",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
