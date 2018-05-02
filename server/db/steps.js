const Sequelize = require('sequelize')
const db = require('./database')

const Steps = db.define('Step', {
  stepInstruction: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  stepMedia: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})
module.exports = Steps