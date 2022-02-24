const express = require('express');
const router = express.Router();




router.get('/test-me2', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;




