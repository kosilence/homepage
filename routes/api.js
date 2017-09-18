var express = require('express');
var router = express.Router();
var cardController = require('../controllers/card.controller');

// Middleware
var upload = require('../middleware/upload.middleware.js');

// Routers
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// Cards controller
router.get('/cards', cardController.index);
router.post('/cards', cardController.store);

router.post('/cards/photos', upload.single('photo'), cardController.upload);
router.get('/cards/photos/token', cardController.token);

module.exports = router;
