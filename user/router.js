const express = require('express')
const User = require('./model.js')
const Ticket = require('../ticket/model')
const bcrypt = require('bcrypt');
const router=express.Router()

router.post('/users/', function (req, res,next) {
    const user = {
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10)
    }
    User.create(user)
    .then(user => res.status(201).json({
                            message: "A NEW USER WAS ADDED",
                              "new user": user.username
    }))
    .catch(next)
  })

router.get('/ticket/:author', function (req, res, next) {
    Ticket.findAll({        
      where: {author:req.params.author}
    })
    .then(ticket => {res.json({ tickets: ticket })})
    .catch(next)
  })


  module.exports = router