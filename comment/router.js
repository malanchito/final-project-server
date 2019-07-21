const express = require('express')
const Ticket = require('../ticket/model.js')
const Comment = require('./model')
const router=express.Router()
const auth = require('../auth/middleware')

router.post('/tickets/:id', auth, (req, res, next) => {
  const ticketId = req.params.id
  const comment = {...req.body,
       ticketId: ticketId
  }
  if(comment.author!==req.user.username){
    res
      .status(403)
      .send({
        message: "The author of the comment can only be your own username"
      })
  }else{
    Comment.create(comment)
    .then(comment => res.status(201).json(comment))
    .catch(next)
  }
})

router.get('/tickets/:id', function (req, res, next) {
    const id = req.params.id
    Ticket.findByPk(id,{ include: [Comment] })
    .then(comments => {res.json({ ticket: comments })})
    .catch(next)
  })

  module.exports = router