const { request } = require('express');
const express = require('express');
const router = express.Router();
const books= []

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Prove 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/addbook',(req,res, next) => {
    books.push({bookname: req.body.newbook, summary: req.body.summary})
    res.render('pages/prove02-b', { 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        title:'Prove 02',
        books: books,
    })

})


module.exports = router;
