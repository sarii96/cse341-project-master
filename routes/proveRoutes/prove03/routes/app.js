
const express = require ('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.search('views','views');

const adminRoutes = require('./admin');
const storeRoutes = require('./store');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(storeRoutes);

app.use(errorController.get404);

app.listen(3000);
