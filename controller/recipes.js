// add stuff here
const recipes = require('../models/moji')

const getRecipes = (req, res) => {
  recipes.find({},(err, data) => {
    if (err) return err
    res.json(data)
  })
}

const getRecipe=(req,res)=>{
  var recipe = req.params.title
  recipes.findOne({title:recipe},(err,data)=>{
      if(err) return res.json(err)
      res.json(data)
  })
}

const getRecipebyID=(req,res)=>{
  recipes.findById(req.params.id,(err,data)=>{
      if(err) return err
      res.json(data)
  })
}


module.exports = {
  getRecipes,
  getRecipe,
  getRecipebyID
}
