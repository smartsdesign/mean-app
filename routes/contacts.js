var express = require('express');
var basicRouter = express.Router();

/* GET contacts. */
basicRouter.get('/list', function (req, res, next) {
  var db = res.db;
  db.collection('contacts').find().toArray(function (err, items){
  	res.json(items);
  });
});

//get contact details
basicRouter.get('/name/:contact', function (req, res){
    // res.send('This is ' + req.params.contact + '\'s details');
});

module.exports = basicRouter;
