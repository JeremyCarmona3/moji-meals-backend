const express = require('express');
const router = express.Router();
const { getRecipes,getRecipe,getRecipebyID } = require('../controller/moji')
const authorizeUser = require('../auth/auth') 

router.get('/findRecipe', authorizeUser, getRecipes)
router.get('/getRecipe/:title', getRecipe)
router.get('/getRecipebyID',getRecipebyID)

module.exports = router;
