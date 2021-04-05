const router = require('express').Router();

const authCheck = (req, res, next) => {

};

router.get('/', (req, res) => {
    res.send('you are logged in, this is your profile -' + req.user.userName);
});

module.exports = router;