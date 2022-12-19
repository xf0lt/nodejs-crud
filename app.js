const http = require('http')
const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

// !routes mahasiwa
const router = require('./routes/mahasiswa')
app.use('/mahasiswa', router)
app.use((req, res, next) => {
   const error = new Error('Tidak ditemukan');
   error .status = 404;
   next(error);
})

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
      error: {
         message: error.message
      }
   })
})

//! connect database
const con = require('./config/database')

// //! server
app.listen(1000, () => console.log(`port berjalan pada localhost:1000`))



// const cors = require('cors')
// var Sequelize = require('sequelize');


// connect to base
// con.end(function(err){
//    if(err){
//       return console.log('error:' + err.message);
//    }
//    console.log('Close the database connection.');
// })


// //! post data
// const User = require('./model/user')
// app.post('/post', async (req, res) => {
//    try{
//       const {username, email, password} = req.body;

//       const newUser = new User({
//          username, email, password
//       })

//       await newUser.save();
//       res.json(newUser)
//    } catch (err) {
//       console.error(err.message);
//       res.status(500).send("server error")
//    }
// })


