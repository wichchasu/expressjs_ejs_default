var express = require('express');
var router = express.Router();
const showdateController = require('../controller/showdateController');


router.get('/', showdateController.index);


module.exports = router;
