const mysql = require('mysql2/promise');

const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    max: process.env.DB_MAX || 10,
    idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT || 30000,
    connectionTimeoutMillis: process.env.DB_CONNECTION_TIMEOUT || 2000,
});

db.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err.stack);
      return;
    }
    console.log("Connected to database.");
  });
  
  module.exports = db;