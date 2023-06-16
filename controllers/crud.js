 var conexion = require("../conexion/conexion");

exports.save = (req,res)=>{
   const nombre = req.body.nombre;
   const imagen  = req.body.imagen;
   const descripcion = req.body.descripcion;
   const precio = req.body.precio;
   conexion.query('INSERT INTO tbproductos (nombre, imagen, descripcion, precio) VALUES (?,?,?,?)',
   [nombre, imagen, descripcion, precio],
   (error, resultado)=>{
    if(error){
        console.log(error);
    }
    else{
        res.redirect('productos')
    }
});
   
}

exports.edit = (req,res)=>{
    const RID = req.body.ID;
    const Rnombre = req.body.nombre;
    const Rimagen  = req.body.imagen;
    const Rdescripcion = req.body.descripcion;
    const Rprecio = req.body.precio;
    
    conexion.query('UPDATE tbproductos SET ? WHERE ID = ?',
    [{nombre:Rnombre, imagen:Rimagen, descripcion:Rdescripcion, precio:Rprecio}, RID],
    (error, resultado)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('productos')
        }
    });
}

exports.auth = (req, res)=>{
    const correo = req.body.user;
    const contraseña = req.body.password;
    if(correo && contraseña){
        
        conexion.query('SELECT * FROM usuario WHERE correo = ?',[correo],
        function(error,resultado){
            if(resultado.length == 0 || (contraseña != resultado[0].contra))
            {
                console.log("Usuario Y/O contraseña INCORRECTOS!");
                res.redirect('/')
            }
            else
            {
                console.log("Inicio de Sesión Correcto!");
                res.redirect('productos')
            }
        });
    }
    else
    {
        console.log("Llena los campos faltantes!!");
        res.redirect('/')
    }
}
