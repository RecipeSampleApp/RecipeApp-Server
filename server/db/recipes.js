const Sequelize = require('sequelize');
const db = require('./database');

const Recipes = db.define('Recipe', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  cookTime: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 5
    }
  }
})
module.exports = Recipes