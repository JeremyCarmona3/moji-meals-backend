const express = require('express');
const router = express.Router();

const { getRecipes } = require('../controller/moji')

router.get('https://emoji-meal-backend.herokuapp.com/findRecipe', getRecipes)

module.exports = router;