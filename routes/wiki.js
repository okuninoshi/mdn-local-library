const express = require('express')
const router = express.Router();


// Home page route 

router.get('/', (req, res) => {
    res.send('wiki home page')
})

router.get('/about', (req, res) => {
    res.send('wiki about page')
})


module.exports = router;