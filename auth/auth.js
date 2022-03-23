const jwt = require('jsonwebtoken');
const config = require('../config')

const authorizeUser = (req, res, next) => {
  jwt.verify(req.query.token, config.SECRET, (err, data) => {
    if (err) return res.send("not authorized")

    req.user = data
    next()
  })
}

module.exports = authorizeUser;