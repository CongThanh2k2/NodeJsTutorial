const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.REACT_APP_DB_HOST,
    user: process.env.REACT_APP_DB_USER,
    password: process.env.REACT_APP_DB_PASSWORD,
    database: process.env.REACT_APP_DB_DBNAME

    // host: 'localhost',
    // user: 'root',
    // password: '123456',
    // database: 'accounts'
  });

module.exports = connection.promise()