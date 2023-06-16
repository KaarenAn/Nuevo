var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'venta'
})

connection.connect(
    (err)=>{
    if(!err){
        console.log('Conexion Establecida');
    }else{
        console.log('Conexion fallida');
    }
}
);

module.exports = connection;
// connection.query("SELECT * FROM tbproductos", function(err,resultado){
//     console.log(resultado);
// });

// connection.end();

