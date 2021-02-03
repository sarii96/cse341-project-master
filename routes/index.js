const team = require('./teamRoutes');
const assignments = require('./proveRoutes');
const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const PORT = process.env.PORT || 5000
router
.use('/assignments', assignments)
.use('/team', team)
.get('/', (req, res, next) => {
    // This is the primary index, always handled last. 
    res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
   })
  .use((req, res, next) => {
    // 404 page
    res.render('pages/proveAssignments/prove03/pages/404', {title: '404 - Page Not Found', path: req.url})
  });

  
module.exports = router;

// const cors = require('cors') // Place this with other requires (like 'path' and 'express')

// const corsOptions = {
//     origin: "https://<your_app_name>.herokuapp.com/",
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     family: 4
// };

// const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://sarii96:Paramore96@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";

// mongoose
//   .connect(
//     MONGODB_URL, options
//   )
//   .then(result => {
//   // This should be your user handling code implement following the course videos
//     app.listen(PORT);
//   })
//   .catch(err => {
//     console.log(err);
//   });