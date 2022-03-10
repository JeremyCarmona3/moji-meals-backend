const express = require('express');
const router = express.Router();

const { getRecipes } = require('../controller/moji')

router.get('/findRecipe', getRecipes)

module.exports = router;