//prove activities
const express = require('express');
const router = express.Router();

const prove01Routes = require('./prove01');
const prove02Routes = require('./prove02');
const prove03RoutesStore = require('./prove03/routes/store');
const prove03RoutesAdmin = require('./prove03/routes/admin');

 
router
.use('/prove01', prove01Routes)
.use('/prove02', prove02Routes)
.use('/prove03-store', prove03RoutesStore)
.use('/prove03-admin', prove03RoutesAdmin)


module.exports = router;