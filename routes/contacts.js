var express = require('express'),
	basicRouter = express.Router();

/* GET contacts. */
basicRouter.get('/list', function (req, res, next) {
  var db = res.db;
  db.collection('contacts').find().toArray(function (err, items){
  	res.json(items);
  });
});

//get contact details
basicRouter.get('/name/:contact', function (req, res){  
    var db = res.db;
    db.collection('contacts').find({ 
    	'contacts.firstName': req.params.contact }, { 
    		'contacts.$': 1 
    	}).toArray(function (err, result){
    	res.json(result);
    });
});

module.exports = basicRouter;
