const router = require('express').Router();
const Auth = require('../controllers/Auth');
const authController = new Auth();

router.post('/', authController.loginBuyer);

module.exports = router;