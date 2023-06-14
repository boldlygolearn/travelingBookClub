const router = require("express").Router();
const authController = require('../authentication/controllers/authController');

router.post('/register', authController.register_post);
router.post('/login', authController.login_post);

module.exports = router;
