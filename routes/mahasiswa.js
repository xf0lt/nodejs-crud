const express = require('express');
const router = express.Router();

// ! method get
router.get('/', (req, res, next) => {
   res.status(200).json({
      message: 'Get method mahasiswa'
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
   if(nim === '12345') {
      res.status(200).json({
         message: 'NIM 12335'
      })
   } else {
      res.status(404).json({
         message: 'NIM not found'
      })
   }
   res.status(200).json({
      message: 'NIM di temukan!'
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