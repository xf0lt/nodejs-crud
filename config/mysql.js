// const { createConnection } = require('mongoose')
var mysql = require('mysql')

var con = mysql.createConnection({
   host: "127.0.0.1", 
   user: "trysked",
   password: "password",
   database: "my_university"
});

// con.end(function(err){
//    if(err){
//       return console.log('error:' + err.message);
//    }
//    console.log('connection');
// })

module.exports = con
// con.connect(function(err) {
//    if (err) throw err;
//    console.log("Connected!");
//  });

