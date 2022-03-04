// add stuff here
const recipes = require('../models/moji')


const getRecipes = (req, res) => {
  recipes.find((err, data) => {
    if (err) return err
    res.json(data)
  })
}

module.exports = {
  getRecipes
}