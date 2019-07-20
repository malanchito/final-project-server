const express = require('express')
const Ticket = require('./model.js')
const router=express.Router()
const auth = require('../auth/middleware')

router.post('/events/:id', auth, (req, res,next) => {
    const eventId = req.params.id
    const ticket = {...req.body,
         eventId: eventId
    }
    Ticket.create(ticket)
    .then(ticket => res.status(201).json(ticket))
    .catch(next)
  })
router.put('/tickets/:id', auth, (req, res, next) => {
    const id = req.params.id
    Ticket.findByPk(id)
    .then(ticket=>ticket.update(req.body))
    .then(ticket => res.status(200).json(ticket))
    .catch(next)
  })  

  module.exports = router