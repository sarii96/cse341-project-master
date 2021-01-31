//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const { render } = require('pug');
const router = express.Router();

const userArray = ['Jack', 'Jill', 'Brian'];

router.post('/addUser', (req, res, next) => {
    const newUser = req.body.newUser;

    userArray.push(newUser);

    res.redirect('/ta02/');
});


router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: userArray,
    });
});

router.post('/removeUser', (req, res, next) => {
    const remUser = req.body.remUser;
     console.log(remUser, userArray)
    const index = userArray.indexOf(remUser);
    if (index !== -1 ) {
        userArray.splice(index, 1);
    }

    res.redirect('/ta02/');
});
module.exports = router;
