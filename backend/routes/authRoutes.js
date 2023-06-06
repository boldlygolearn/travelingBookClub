const router = require("express").Router();
const authController = require('../controllers/authController');

router.get('/signup', authController.signup_get);
router.post('/register', authController.register_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);

module.exports = router;
