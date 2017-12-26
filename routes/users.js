const express = require('express')
const router = express.Router()
const knex = require('../knex')

// L
router.get('/', (req, res, next) => {
  // code goes here
})

// R
router.get('/:id', (req, res, next) => {
  const id = +req.params.id
  // code goes here
})

// C
router.post('/', (req, res, next) => {
  const { username, password } = req.body
  console.log('username: ', username)
  console.log('password: ', password)
  // res.send({ message: req.body.username })
  })

// U
router.patch('/:id', (req, res, next) => {
  const id = +req.params.id
  const { item } = req.body
  // code goes here
})

// D
router.delete('/:id', (req, res, next) => {
  const id = +req.params.id
  // code goes here
})


module.exports = router
