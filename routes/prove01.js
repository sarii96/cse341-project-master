const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove01', { 
        title: 'Prove 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});
router.post('/',(req, res, next) => {
    res.render('pages/prove01-b', { 
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        
    });
});

module.exports = router;

