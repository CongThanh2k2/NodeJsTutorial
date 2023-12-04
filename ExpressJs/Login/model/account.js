var mysql = require('mysql');
var bcrypt = require("bcryptjs");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'express_js'
});


//test connect
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!!!")
// });
// connection.connect();


//get accounts
// connection.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM express_js.accounts;";
//   connection.query(sql, function(err, results) {
//     if (err) throw err;
//     console.log(results);
//   })
// });


var Accounts = {

}
//INSERT INTO `express_js`.`accounts` (`username`, `password`) VALUES ('test', '123456');

Accounts.createAccount = function createAccount(newAccount) {
  connection.connect(function (err) {
    if (err) throw err;
    var username = newAccount.username
    var password = newAccount.password
    var sql = "INSERT INTO `express_js`.`accounts` (`username`, `password`) VALUES ('"+username+"', '"+password+"');";
    connection.query(sql, function (err, results) {
      if (err) throw err;
      console.log(results);
    })
  })
}

Accounts.findUsername = function findUsername(username){
  connection.connect(function(err){
    if(err) throw err;
    var sql = "SELECT * FROM express_js.accounts where username = '"+username+"';"
    connection.query(sql, function (err, results) {
      if (err) throw err;
      console.log(results);
    })
  })
}

module.exports = Accounts;