var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contacts', function (req, res, next) {
  var db = res.db;
  db.collection('contacts').find().toArray(function (err, items){
  	res.json(items);
  });
});

module.exports = router;
