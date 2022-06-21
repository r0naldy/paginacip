var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* GET home page. */

router.get('/nav.ejs', function(req, res, next) {
  res.render('nav', { title: 'paginaCip' });
});

/* GET home page. */

router.get('/form.ejs', function(req, res, next) {
  res.render('form', { title: 'PaginaCip' });
});

/* GET home page. */

router.get('/form2.ejs', function(req, res, next) {
  res.render('form2', { title: 'PaginaCip' });
});

/* GET home page. */

router.get('/index.ejs', function(req, res, next) {
  res.render('index', { title: 'PaginaCip' });
});



module.exports = router;
