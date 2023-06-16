var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Productos'});
});

module.exports = router;