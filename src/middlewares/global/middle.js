function testmiddleware(req,res,next){

    console.log("middle prueba 27-may-2023"); 
    next();
}

module.exports= testmiddleware;