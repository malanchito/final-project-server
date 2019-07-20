const express = require('express')
const Event = require('./model.js')
const Ticket = require('../ticket/model')
const router=express.Router()
const auth = require('../auth/middleware')

router.get('/events', function (req, res, next) {
  const limit = req.query.limit || 9
  const offset = req.query.offset || 0  
    Event
    .count()
    .then(total => 
      Event
      .findAll({ limit, offset })
      .then(events => res.send({ events, total }))
      )
    .catch(next)
  })
router.post('/events', auth, (req, res,next) => {
    Event.create(req.body)
    .then(event => res.status(201).json(event))
    .catch(next)
  })
router.get('/events/:id', function (req, res, next) {
    const id = req.params.id
    Event.findByPk(id,{ include: [Ticket] })
    .then(event => {res.json({ event: event })})
    .catch(next)
  })
router.put('/events/:id', auth, (req, res, next) => {
    const id = req.params.id
    Event.findByPk(id)
    .then(event=>event.update(req.body))
    .then(event => res.status(200).json(event))
    .catch(next)
  })  

  module.exports = router