const express = require('express')
const Ticket = require('./model.js')
const router=express.Router()
router.post('/events/:id', function (req, res,next) {
    const eventId = req.params.id
    const ticket = {...req.body,
         eventId: eventId
    }
    Ticket.create(ticket)
    .then(ticket => res.status(201).json(ticket))
    .catch(next)
  })
router.get('/events/:id', function (req, res, next) {
    const id = req.params.id
    Event.findByPk(id)
    .then(event => {res.json({ event: event })})
    .catch(next)
  })
router.put('/events/:id', function (req, res, next) {
    const id = req.params.id
    Event.findByPk(id)
    .then(event=>event.update(req.body))
    .then(event => res.status(200).json(event))
    .catch(next)
  })  
  module.exports = router