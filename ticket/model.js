const Sequelize = require('sequelize')
const db = require('../db.js')
const Event = require('../event/model')
const Ticket = db.define(
    'ticket',
    {
      author: {
        type: Sequelize.STRING,
        field: 'ticket_author'
      },
      description: {
        type: Sequelize.STRING,
        field: 'ticket_description'
      },
      image_url: {
        type: Sequelize.STRING,
        field: 'ticket_image'
      },
      price: {
        type: Sequelize.INTEGER,
        field: 'ticket_price'
      }
    }
  )

Ticket.belongsTo(Event)
Event.hasMany(Ticket)

module.exports = Ticket
  