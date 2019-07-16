const express = require('express')
const Event = require('./model.js')
const Ticket = require('../ticket/model')
const router=express.Router()

router.get('/events', function (req, res, next) {
    Event.findAll()
    .then(event => {res.json({ events: event })})
    .catch(next)
  })
router.post('/events', function (req, res,next) {
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
router.put('/events/:id', function (req, res, next) {
    const id = req.params.id
    Event.findByPk(id)
    .then(event=>event.update(req.body))
    .then(event => res.status(200).json(event))
    .catch(next)
  })  
  module.exports = router