const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/register', function(req, res) {
    res.render('register');
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/welcome', function(req, res) {
    res.render('welcome')
})

module.exports = router;
