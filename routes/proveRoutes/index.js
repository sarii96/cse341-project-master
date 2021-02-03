//prove activities
const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

const errorController = require('./prove04/controllers/error');
const User = require('./prove04/models/user');

const prove01Routes = require('./prove01');
const prove02Routes = require('./prove02');
const prove03RoutesStore = require('./prove03/routes/store');
const prove03RoutesAdmin = require('./prove03/routes/admin');
const prove04RoutesStore = require('./prove04/routes/store');
const prove04RoutesAdmin = require('./prove04/routes/admin');

 
router
.use('/prove01', prove01Routes)
.use('/prove02', prove02Routes)
.use('/prove03-store', prove03RoutesStore)
.use('/prove03-admin', prove03RoutesAdmin)
.use('/prove04-store', prove04RoutesStore)
.use('/prove04-admin', prove04RoutesAdmin)
.use(errorController.get404);


module.exports = router;