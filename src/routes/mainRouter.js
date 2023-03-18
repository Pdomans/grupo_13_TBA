// Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo.
const express = require("express");
// Router con R mayuscula
const router = express.Router();

// Importamos el controlador de las rutas por defecto
const mainController = require("../controllers/mainController.js")

// En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos

// Procesa el pedido get con ruta /
router.get("/", mainController.inicio);
router.get("/carrito", mainController.carrito);
router.get("/login", mainController.login);
router.get("/productos", mainController.productos);
router.get("/quiensomos", mainController.quiensomos);
router.get("/registro", mainController.registro);

// Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;