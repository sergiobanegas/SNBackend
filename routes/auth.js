var express = require('express');
var api = express.Router();
var authCtrl = require('../controllers/auth');
var router = express.Router();

router.post('/signup', authCtrl.emailSignup);
router.post('/login', authCtrl.emailLogin);

module.exports = router;