// Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo.
const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path= require("path");
const { check, validationResult } = require('express-validator');

/* const {body}=require('express-validator');
 */



//validaciones express validator

/* const  validatecrerateform=[
    body("email").isEmail().withMessage('debes completar el campo de email'),
    body("usuario").notEmpty().withMessage('debes completar el campo usuario'),
    body("contrasena").notEmpty().withMessage('debes completar el campo contraseña'),
    body("nombre").notEmpty().withMessage('debes completar el campo nombre'),
    body("apellido").notEmpty().withMessage('debes completar el campo apellido'),
]; */

const storage =multer.diskStorage({
    // lugar donde vamos a guardar el archivo  cb es un una funcion callb
    destination:(req,file,cb)=>{
        cb(null,'public/img/imagenUsuario')
        
    },
  // el nombre que le vamos a dar al archivo 
    filename:(req,file,cb)=>{
        console.log(req.body);
        const NombreArchivo='imagen-'+ Date.now()+path.extname(file.originalname);
       
        cb(null,NombreArchivo);
    }
});
// ejecucion de multer 
const  upload  =multer({storage})


// Importamos el controlador de usuarios

const userController = require("../controllers/userController.js");
const { procesoLogin } = require("../controllers/userController.js");

// En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos
//router.post("/",upload.single("ImagenUsuario"),userController.store)
// ruta de usuarios para poder realizar el borrado
/* router.get("/listadoUsuarios",userController.usuario) */
// Procesa el pedido get con ruta /usuarios/conectarse

//---------------------------------------con bd -----------------------------------------


router.get("/userbd",userController.mostraruser)
router.get("/login", userController.login);

router.post("/login",procesoLogin)
/* router.post("/login",[check("email").isEmail().withMessage("Email invalido"),check("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 carateres")
], userController.procesoLogin);
 */
router.get("/check", function (req,res){
    if(req.session.usuarioLogueado == undefined){
        res.send("no estás logueado");
    }else{
        res.send("El usuario logueado es:" + req.session.usuarioLogueado.email)
    }
})

router.get("/",userController.registro)
router.post("/",userController.crearuser)


router.get("/:id", userController.detalleUsuariobd); 
router.get("/edicionUsuariobd/:id", userController.editarUsuarioId);
router.post("/edicionUsuariobd/:id", userController.actualizarUsuarioId);
router.post("/borrarUsuariobd/:id", userController.borrarUsuarioId);


/* router.post("/login", userController.processForm); */

// Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;

