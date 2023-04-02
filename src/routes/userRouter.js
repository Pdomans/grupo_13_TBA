// Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo.
const express = require("express");
const router = express.Router();

// Importamos el controlador de usuarios
const userController = require("../controllers/userController.js");

// En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos



// revisar antes de pushear
router.get("/",userController.registro)

// revisar antes de pushear

// Procesa el pedido get con ruta /usuarios/conectarse
router.get("/login", userController.login)



// Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;