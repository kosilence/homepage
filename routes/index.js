var path = require('path');
var config = require('../config');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(process.env.NODE_ENV === 'development') {
        var devUrl = 'http://localhost:' + config.dev.port;
        res.redirect(devUrl);
    }else {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    }
});

module.exports = router;
