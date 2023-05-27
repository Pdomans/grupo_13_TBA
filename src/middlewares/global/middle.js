function testmiddleware(req,res,next){

    console.log("middle prueba abc 1"); 
    next();
}

module.exports= testmiddleware;