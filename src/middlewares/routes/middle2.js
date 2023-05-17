function testmiddleware(req,res,next){
  // evaluar  aca si el usuario es administrador o no dentro del if 
  admin = true ; 
  if (admin) {
    next();
  }else{ res.send("no tenes permisos de de admin ")
    res.send
  }
    console.log("middle prueba "); 
    next();
}

module.exports= testmiddleware;