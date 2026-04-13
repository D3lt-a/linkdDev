const exp = require('express');
const pass = require('../utils/Passport.js');

const router = exp.Router();

router.get('/', pass.authenticate('github', { scope: ['user:email'] }));
router.get('/callback', 
    pass.authenticate('github',{ failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard')
    }
)

module.exports = router;