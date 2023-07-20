// Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo.
const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path= require("path");
//const middlewares=require("../src/middlewares/global/middle.js")

// donde va a guardar y con que nombre  los archivos 
const storage =multer.diskStorage({
    // lugar donde vamos a guardar el archivo 
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../../public/img'))
        //cb(null,path.join(__dirname,'../../public/img'))
    },
  // el nombre que le vamos a dar al archivo 
    filename:(req,file,cb)=>{
        console.log(file);
        const NombreArchivo='imagen-'+ Date.now()+path.extname(file.originalname);
        cb(null,NombreArchivo);
    }
});
// ejecucion de multer 
const  upload  =multer({storage:storage})

// Importamos el controlador de productos
const productsController = require("../controllers/productsController.js")

// En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos


// Procesa el pedido get con ruta /productos/numeroProducto
// Ruta parametrizada!!

//--------------------------bd



router.get("/", productsController.mostrar);

router.get("/crearProducto",productsController.create2);
router.post("/crearProducto",upload.single('imagenProducto'), productsController.crearProducto);

router.get("/:id", productsController.detalleProductobd); 
router.get("/edicionProductobd/:id", productsController.editarId);
router.post("/edicionProductobd/:id", productsController.actualizarId);
router.post("/borrarProductobd/:id", productsController.borrarId);

router.get("/carrito", productsController.carrito);
 ///--------------------------bd




/*router.get("/detalleProducto", productsController.detalle);

router.get("/:idProducto", productsController.detalle);

router.delete('/delete/:id',productsController.borrar); */
 
//router.get("/vender",productsController.vender);

//crear producto
/* router.get("/crear", productsController.create); */
//router.post("/",upload.single('ImagenProducto'),productsController.store);


// Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;