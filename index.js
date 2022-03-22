const express = require('express');
const app = express();
const mongoose = require('mongoose');
const recepieRouter = require('./routes/moji')
const userRouter = require('./routes/user')
const config = require('./config')

app.use(express.json())

mongoose.connect(config.MONGOODB_URL, (err) => {
  if(err) return console.log(err)

  console.log('connected to db successfully')
})

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



app.use(recepieRouter)
app.use(userRouter)

app.listen(process.env.PORT || 3001, () => {
  console.log('serving running on 3001')
})