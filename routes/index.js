var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/valley', function(req, res){
	res.render('valley');
});

router.get('/cupertino', function(req, res){
	res.render('cupertino');
});


module.exports = router;
