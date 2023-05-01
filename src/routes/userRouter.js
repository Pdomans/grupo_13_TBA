// Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo.
const express = require("express");
const router = express.Router();
const multer = require ("multer");


const storage =multer.diskStorage({
    // lugar donde vamos a guardar el archivo  cb es un una funcion callb
    destination:(req,file,cb)=>{
        cb(null,'public/img/imagenUsuario')
        
    },
  // el nombre que le vamos a dar al archivo 
    filename:(req,file,cb)=>{
        console.log(file);
        const NombreArchivo='imagen-'+ Date.now()+path.extname(file.originalname);
        cb(null,NombreArchivo);
    }
});
// ejecucion de multer 
const  upload  =multer({storage})




// Importamos el controlador de usuarios

const userController = require("../controllers/userController.js");

// En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos




// revisar antes de pushear
router.get("/",userController.registro)
router.post("/",upload.single('ImagenUsuario'),userController.store)

// revisar antes de pushear

// Procesa el pedido get con ruta /usuarios/conectarse
router.get("/login", userController.login)



// Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;