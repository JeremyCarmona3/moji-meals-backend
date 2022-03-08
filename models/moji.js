const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipesSchema = new Schema({
  title: { type: String },
  image: String,
  subtext1: String,
  subtext2: String,
  subtext3: String,
  subtext4: String,
  prep1: String,
  prep2: String,
  prep3: String,
  prep4: String,
  ingred1: String,
  ingred2: String,
  ingred3: String,
  ingred4: String,
  ingred5: String,
  ingred6: String
});


const recipes = mongoose.model('Food', RecipesSchema)

module.exports = recipes;