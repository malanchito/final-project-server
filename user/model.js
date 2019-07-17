const Sequelize = require('sequelize')
const db = require('../db.js')

const User = db.define(
  'user', 
  {
    username: {
      type: Sequelize.STRING,
      field: 'user_username',
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      field: 'user_password',
      allowNull: false
    },
  }, 
  {
    timestamps: false,
  }
)

module.exports = User