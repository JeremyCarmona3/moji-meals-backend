const express = require('express');
const app = express();
const mongoose = require('mongoose');
const recepieRouter = require('./routes/moji');

const config = require('./config')

app.use(express.json())

mongoose.connect(config.MONGOODB_URL, (err) => {
  if(err) return console.log(err)

  console.log('connected to db successfully')
})

app.use(recepieRouter)
app.listen(process.env.PORT || 3000, () => {
console.log('server running')

})