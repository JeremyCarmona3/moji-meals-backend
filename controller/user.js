const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config')

const signup = (req, res) => {
  const user = new User()

  user.email = req.body.email
  user.password = req.body.password

  user.save((err, done) => {
    if (err) return res.status(500).send("Signup failed")
    res.status(201).send("Signed up successfully")
  })
}

const login = (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err || !user) return res.status(404).send("User not found")
    if (user.comparePassword(req.body.password)) {
      const token = jwt.sign({ id: user._id }, config.SECRET);
      res.send(token)
    } else {
      res.send("Could not login")
    }
  })
}

module.exports = {
  signup,
  login
}