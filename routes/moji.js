const express = require('express');
const router = express.Router();
const { getRecipes,getRecipe,getRecipebyID } = require('../controller/moji')

router.get('/findRecipe', getRecipes)
router.get('/getRecipe/:title', getRecipe)
router.get('/getRecipebyID',getRecipebyID)

module.exports = router;