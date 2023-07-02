let db = require ("../../database/models");

// Creamos el objeto literal con los métodos a exportar
const { json } = require('express');
const path = require("path");
const fs= require ("fs");
const { Console } = require('console');

const User=require("../models/User.js");

const userFilePath = path.join(__dirname, "../data/usuariosDataBase.json");

//paquete para hacer la encriptacion 
const bcryptjs=require('bcryptjs');



// Creamos el objeto literal con los métodos a exportar
const userController = {

// pagina usuarios  que vamos a utilizar para relizar el borrado 
     usuario: (req, res) => {
        res.render("user/listadoUsuarios");
    },
     
    // Manejo del pedido get con ruta /usuarios/conectarse
    login: (req, res) => {
       res.render("user/login")
        /*  res.send(path.join(__dirname, "./views/login.html")) */
    },

    processForm: (req, res) => {
/*         req.session.EMAIL = req.body.EMAIL;
        res.send(req.session);
        req.session.destroy();*/
        /* res.cookie("email", req.body.email, {maxAge: (100 * 60) * 10}); 
        res.send("cookie guardada") */
        let contrasenia = req.body.password;
        let contraseniaEncriptada = "$2a$10$pwDWpLe/69Zyp8vRu1wKuOSH1nR3TMdHl0VbMRlW0PCDYhUesWS72";
        console.log(contrasenia);
        let contraseniaHash = bcryptjs.hashSync(contrasenia,10);
        console.log(contraseniaHash);

        let resultado = bcryptjs.compareSync(contrasenia, contraseniaEncriptada);

    
        res.send("Contraseña encriptada" + resultado);
 
        
        
    },
    // Manejo del pedido get con ruta /usuarios/registrarse
    registro: (req, res) => {
        res.render("user/registro");
    },
    
    processRegister: (req,res) => {
        const resultValidation = validationResult(Req);
        if (resultValidation.errors.lenght > 0){
            return res.render("registro",{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
    },

    store: (req,res)=>{
        const usuarios = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
        var pass =req.body.contrasena.toString;
        let userData =req.body;
        User.create(userData);
        let userInDB = User.findByField("email", req.body.email);
        if(userInDB){
            return res.render("user/registro"),{
                errors: {
                    email: {
                        msg: "Este email ya está registrado"
                    }
                }
            }
        }
        res.redirect("/")
        
    },

 //------------------------------------------------- con bd 


/* 
 mostraruser:(req,res)=>{
    res.render("user/userbd")
    //res.render("productos/crearProducto");
 },
 */

 mostraruser: (req, res) => {    
    db.User.findAll()
      .then((usuario) => {
        console.log(usuario)
        res.render("user/userbd", {usuario});
      })
      .catch((error) => {
        console.log(error);
        res.send("Error al obtener los usuarios de la base de datos");
      });
  }


   //------------------------------------------------- con bd  


}


// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de usuarios
module.exports = userController;



