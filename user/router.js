const express = require('express')
const User = require('./model.js')
const Ticket = require('../ticket/model')
const router=express.Router()

router.post('/users/', function (req, res,next) {
    User.create(req.body)
    .then(user => res.status(201).json(user.username))
    .catch(next)
  })

router.get('/tickets', function (req, res, next) {
    Ticket.findAll({        
      where: {author:req.body.name}
    })
    .then(ticket => {res.json({ tickets: ticket })})
    .catch(next)
  })


  module.exports = router