var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  const name = req.params.name;
  res.send(`NAME ${name}`);
});

module.exports = router;
