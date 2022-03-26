const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipesSchema = new Schema({
  image: { type: String },
  title: { type: String },
  ingred: { type: [String], default: []},
  prep: { type: [String], default: []},
  step: { type: [String], default: []},
});


const recipes = mongoose.model('Recipe', RecipesSchema)

module.exports = recipes;
