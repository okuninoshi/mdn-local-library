var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  next()
});


router.get('/profile', (req, res, next) => {
  return (
    res.send('this is your profile :)')
  )
});

module.exports = router;
