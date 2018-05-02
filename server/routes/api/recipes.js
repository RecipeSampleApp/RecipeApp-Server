const router = require('express').Router();
const { Recipes, Ingredients, Steps } = require('../../db');

router.post('/', async (req, res, next) => {
  Recipes.create(req.body[0])
    .then(recipe => {
      const RecipeId = recipe.id
      req.body[1].forEach(item => item['RecipeId'] = RecipeId)
      req.body[2].forEach(item => item['RecipeId'] = RecipeId)
      console.log(req.body[2])
      Ingredients.bulkCreate(req.body[1]).then(() => {
        Steps.bulkCreate(req.body[2]).then(() => {
          console.log('OMG IT OWRK SOIDJF:LISDJFOISDJF:ISDJF:OSDIJF')
          res.json('yessssss')
        })
      })

    })
    .catch(next);
});

module.exports = router;