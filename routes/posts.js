var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response))


router.get('/', function (req, res) {
  res.send('this is posts page')
})

router.get('/1', function (req, res) {
  res.send('this is the 1 page yayaya')
})

router.get('/new', function (req, res) {
  res.send('this is the new page yayaffa')
})

module.exports = router
