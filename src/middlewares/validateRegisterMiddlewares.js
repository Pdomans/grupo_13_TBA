const { ExpressValidator } = require("express-validator");
const path = require ("path");
const {body} = require ("ExpressValidator");

module.exports= [
    body("name").notEmpty().withMessage("Tienes que escribir tu nombre"),
    body("email").notEmpty().withMessage("Tienes que escribir tu email").bail().isEmail().withMessage("Tienes que escribir un formato de email valido"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    body("usuario").notEmpty().withMessage("Tienes que escribir tu usuario"),
    body("apellido").notEmpty().withMessage("Tienes que escribir tu apellido")

]
return true;