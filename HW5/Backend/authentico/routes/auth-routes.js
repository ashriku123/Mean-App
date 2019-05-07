const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.status(200).json({
        message: 'successfully logged out!'
    })
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:4200');
});

router.get('/user', (req, res) => {
    res.status(200).json({
        message: "Users fetched successfully!",
        user: req.user || null
    });
});

module.exports = router;
