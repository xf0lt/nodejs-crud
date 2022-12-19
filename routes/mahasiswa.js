const express = require('express');
const router = express.Router();
const db = require('../config/mysql')

// ! method get
router.get('/', (req, res) => {
   var sql = "SELECT * FROM `mahasiswa`";
   db.query(sql, (err, result) => {
      if(err){
         console.log(err);
      } else {
         res.status(200).json({
            message: 'Get method mahasiswa',
            data: result
         })
      }
   
   })
  
})

// ! method post
router.post('/', (req, res, next) => {
   res.status(200).json({
      message: 'Post method mahasiswa'
   })
})

// ! berdasarkan NIM
router.get('/:nim', (req, res, next) => {
   const nim = req.params.nim;
   var sql = "SELECT * FROM `mahasiswa` WHERE `nim`="+nim;
   db.query(sql, (err, result) => {
      if(err){
         console.log(err);
      }else{
         res.status(200).json({
            message: 'Mahasiswa ditemukan',
            data: result
         })
      }
   })
})

// ! router put
router.put('/', (req, res, next) => {
   res.status(200).json({
      message: 'Put Method Mahasiswa'
   })
})

// ! router deleted
router.delete('/', (req, res, next) => {
   res.status(200).json({
      message: 'Deleted Method Mahasiswa'
   })
})

module.exports = router