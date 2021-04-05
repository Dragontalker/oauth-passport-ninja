const router = require('express').Router();

const authCheck = (req, res, next) => {
    if (!req.user) {
        // if user is not logged in
        res.redirect('/auth/login');
    } else {
        // if logged in
        next();
    }
};

router.get('/', (req, res) => {
    res.send('you are logged in, this is your profile -' + req.user.userName);
});

module.exports = router;