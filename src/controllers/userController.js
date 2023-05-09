// Creamos el objeto literal con los métodos a exportar
const { json } = require('express');
const path = require("path");
const fs= require ("fs");
const { Console } = require('console');

const userFilePath = path.join(__dirname, "../data/usuariosDataBase.json");

//paquete para hacer la encriptacion 
const bcrypt=require('bcryptjs');



// Creamos el objeto literal con los métodos a exportar
const userController = {


     usuario: (req, res) => {
        res.render("user/usuarios");
    },
     
    // Manejo del pedido get con ruta /usuarios/conectarse
    login: (req, res) => {
       res.render("user/login")
        /*  res.send(path.join(__dirname, "./views/login.html")) */
    },
    // procesamiento del formulario 
    loginProcess: (req, res) => {
        let userToLogin = user.findByField('email', req.body.email);
        
        if(userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                return res.send ('user/profile');
            }

        }

        return res.render('userLoginForm', {
            errors: {
                email: {
                    msg: 'las credenciales son invalidas'
                }
            }
        });
    },

    // Manejo del pedido get con ruta /usuarios/registrarse
    registro: (req, res) => {
        res.render("user/registro");
        /* res.send(path.join(__dirname, "./views/registro.html")) */
    },
    
  


    store: (req,res)=>{
        const usuarios = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
        console.log("body recibido",req.body)
        var pass =req.body.contrasena.toString;
        // PRUEBA 1 CON UNA FUNCION 
        /* function sal(pass){
            const salvueltas=10;
            const salt=bcrypt.genSaltSync(salvueltas);
            let passhas=bcrypt.hashSync(pass,salt);
            return passhas
        }
 */
        // PRUEBA 2  CONVERTIR LA PASS A STRING 
        


        let UsuarioNuevo = {
            
            id: usuarios[usuarios.length -1].id+1,
            email:req.body.email,
            usuario:req.body.usuario,
            password:bcrypt.hashSync (req.body.contrasena, 10), //password:bcrypt.hashSync(req.body.contraseña, 10),sal(req.body.contraseña)
            firstName:req.body.nombre,
            last_name: req.body.apellido,
            image:req.file.filename,
            
        };
        
       
        usuarios.push(UsuarioNuevo);
        let UsuariosJSON = JSON.stringify(usuarios,null, " ");
        fs.writeFileSync(userFilePath, UsuariosJSON);
        res.redirect("/")
        
    }
}


// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de usuarios
module.exports = userController;




