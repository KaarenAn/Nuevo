var express = require('express');
var router = express.Router();

/* GET agregar page. */
router.get('/', function(req, res, next) {
    res.render('agregar', { title: 'Agregar' });
});

module.exports = router;