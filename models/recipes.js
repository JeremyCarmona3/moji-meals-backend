const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipesSchema = new Schema({
  title: { type: String },
  ingred1: String,
  ingred2: String,
  ingred3: String,
  ingred4: String,
  image: String,
  prep1: String,
  prep2: String,
  prep3: String,
  prep4: String,
  step1: String,
  step2: String,
  step3: String,
  step4: String,
  ingred: { type: [String], default: ["Ingredients"]},
  prep: { type: [String], default: ["Notes"]},
  step: { type: [String], default: ["Recipe Steps"]},
});


const recipes = mongoose.model('Recipe', RecipesSchema)

module.exports = recipes;
