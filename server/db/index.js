const db = require('./database');
const Recipes = require('./recipes');
const Ingredients = require('./ingredients');
const Steps = require('./Steps');

Ingredients.belongsTo(Recipes)
Recipes.hasMany(Ingredients)

Steps.belongsTo(Recipes)
Recipes.hasMany(Steps)

module.exports = {
  db,
  Recipes,
  Ingredients,
  Steps
}