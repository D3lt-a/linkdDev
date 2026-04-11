const { CreateUser, VerifyUser } = require('../controllers/user.cont.js');
const router = require('express').Router();

router.post('/create', CreateUser);
router.post('/verify', VerifyUser);

module.exports = router;