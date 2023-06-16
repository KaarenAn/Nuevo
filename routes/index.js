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
    res.render('productos', { title: 'Productos a vender', Libros:resultado});
 });
 /* GET nosottros page. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Quienes somos ...' });
});

//Editar
router.get('/modificar/:ID', function(req, res, next) {
  const ID = req.params.ID;
  db.query("SELECT * FROM tbproductos WHERE ID = ?",[ID],(error,resultado)=>{
    console.log(resultado);
    res.render('modificar', { title: 'Editar', Libros:resultado[0] });
  })
});

    //res.render('productos', { title: 'Productos disponibles' });
  });

var crud = require('../controllers/crud');
  router.post('/save', crud.save);
  router.post('/edit', crud.edit);
  router.post('/auth', crud.auth);
  router.get('/borrar/:ID', (req, res)=>{
    const ID = req.params.ID;
    db.query('DELETE FROM tbproductos WHERE ID = ?', [ID],
    function(error,resultado){
      if(error){
        console.log(error);
      }
      else{
          res.redirect('/productos');
      }
    });
  });

module.exports = router;

