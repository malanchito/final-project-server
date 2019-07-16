const Sequelize = require('sequelize')
const db = require('../db.js')
const Event = db.define(
    'event',
    {
      name: {
        type: Sequelize.STRING,
        field: 'event_name'
      },
      description: {
        type: Sequelize.STRING,
        field: 'event_description'
      },
      image_url: {
        type: Sequelize.STRING,
        field: 'event_image'
      },
      start: {
        type: Sequelize.DATE,
        field: 'event_start'
      },
      end: {
        type: Sequelize.DATE,
        field: 'event_end'
      }
    },
    {
        timestamps: false,
    }
  )

module.exports = Event
  