var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Contact list' });
});

//route to about us page
// router.get('/about', function(req, res, next){
//     res.render('partials/about', { title: 'A MEAN (MongoDB, ExpressJS, AngularJS, and NodeJS) app' });
// });

module.exports = router;
