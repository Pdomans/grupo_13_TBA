function testmiddleware(req,res,next){

    console.log("middle prueba "); 
    next();
}

module.exports= testmiddleware;