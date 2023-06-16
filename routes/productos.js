var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* GET productos page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Productos'});
});
// productos
router.get('/productos', function(req, res, next){  
  db.query("SELECT * FROM tbproductos", function(err,resultado){
    console.log(resultado);
    res.render('productos', { title: 'Productos disponibles', Libros:resultado});
 });
 /* GET nosottros page. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Quienes somos ...' });
});



    //res.render('productos', { title: 'Productos disponibles' });
  });



module.exports = router;

