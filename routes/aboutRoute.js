var express = require('express');
var router = express.Router();
const aboutController = require('../controller/aboutController');

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('pages/about',{ title: 'About' ,fn: aboutController.method1 });
});

//router.get('/', controller.method1);
router.post('/', aboutController.method2);

module.exports = router;
