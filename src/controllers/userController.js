let db = require ("../../database/models/User");

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
        /* res.send(path.join(__dirname, "./views/registro.html")) */
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

  /*        let UsuarioNuevo = {
            
             id: usuarios[usuarios.length -1].id+1,
             email:req.body.email,
             usuario:req.body.usuario,
             password:bcrypt.hashSync (req.body.contrasena, 10), //password:bcrypt.hashSync(req.body.contraseña, 10),sal(req.body.contraseña)
             firstName:req.body.nombre,
             last_name: req.body.apellido,
             image:req.file.filename,
            
         }; */
        
       
        // usuarios.push(UsuarioNuevo);
        // let UsuariosJSON = JSON.stringify(usuarios,null, " ");
        // fs.writeFileSync(userFilePath, UsuariosJSON);

   


}


// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de usuarios
module.exports = userController;



