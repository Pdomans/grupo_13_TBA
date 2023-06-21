// Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo.
const express = require("express");
// Router con R mayuscula
const router = express.Router();

// Importamos el controlador de las rutas por defecto
const mainController = require("../controllers/mainController.js");
const productsController = require("../controllers/productsController.js");
const userController = require("../controllers/userController.js");

// En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos

// Procesa el pedido get con ruta /

router.get("/", mainController.inicio);

router.get("/admin", mainController.admin);
router.get("/quienSomos", mainController.quiensomos);

router.get("/login", userController.login);
router.post("/login", userController.login);

router.get("/crearProducto", productsController.create);


// Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;