const Sequelize = require('sequelize')
const db = require('../db.js')
const Ticket = require('../ticket/model')
const Comment = db.define(
    'comment',
    {
      author: {
        type: Sequelize.STRING,
        field: 'comment_author'
      },
      text: {
        type: Sequelize.STRING,
        field: 'comment_text'
      }
    },
    {
        timestamps: false,
    }
  )

Comment.belongsTo(Ticket)
Ticket.hasMany(Comment)

module.exports = Comment
  