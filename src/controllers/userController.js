const db = require ("../../database/models");
// Creamos el objeto literal con los métodos a exportar
/* const { json } = require('express'); */
const path = require("path");
const fs= require ("fs");
const { brotliDecompress } = require("zlib");
const multer = require('multer');
/* const User=require("../models/User.js"); */
const bcrypt=require('bcryptjs');
const { validationResult } = require('express-validator');
/* const userFilePath = path.join(__dirname, "../data/usuariosDataBase.json");
 */
//paquete para hacer la encriptacion 
/* const bcryptjs=require('bcryptjs');
 */


// Creamos el objeto literal con los métodos a exportar


// pagina usuarios  que vamos a utilizar para relizar el borrado 
/*      usuario: (req, res) => {
        res.render("user/listadoUsuarios");
    },
      */
    const userController = {

    processForm: (req, res) => {
        req.session.EMAIL = req.body.EMAIL;
        res.send(req.session);
        req.session.destroy();
         res.cookie("email", req.body.email, {maxAge: (100 * 60) * 10}); 
        res.send("cookie guardada") 

        let contrasenia = req.body.password;
        let contraseniaHash = bcryptjs.hashSync(contrasenia,10);

        let resultado = bcryptjs.compareSync(contrasenia, contraseniaHash);

    
        res.send("Contraseña encriptada " + resultado);
 
        
        
    },
    // Manejo del pedido get con ruta /usuarios/registrarse

    
 /*    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
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
        res.redirect("/") */
        
   // },

 //------------------------------------------------- con bd 

 registro: (req, res) => {
    res.render("user/registro");
},

// Manejo del pedido get con ruta /usuarios/conectarse
login: (req, res) => {
    res.render("user/login")
     
 },

 procesoLogin: (req, res) => {
  let errors = validationResult(req);

  if (errors.isEmpty()) {
    db.User.findAll().then((usuario) => {
        let usuarioALoguearse = 0;
      for (let i = 0; i < usuario.length; i++) {
        if (usuario[i].mail == req.body.EMAIL) {
            let check = (bcrypt.compareSync(req.body.password, usuario[i].password))
          if (check) {
             usuarioALoguearse = usuario[i];
            break;
          }
        }
      }

      if (usuarioALoguearse == undefined) {
        return res.render("user/userbd", {
          errors: [{ msg: "Credenciales inválidas" }],
        });
      }

      req.session.usuarioLogueado = usuarioALoguearse;
      res.render("user/userbd")
    });
  } else {
    return res.render("user/userbd", { errors: errors.errors });
  }
},

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
  },


  crearuser :(req,res)=>{
    let password=bcrypt.hashSync (req.body.password, 10)
    db.User.create({
        
        'firstname': req.body.firstname,                
        'lastname': req.body.lastname,
        'mail' : req.body.mail,
        'password':password,
       
        
        //'image':req.body.stock
        })

        .then (User => {
            res.redirect('/');
         })

   
},

 
 detalleUsuariobd:(req,res)=>{
    db.User.findByPk(req.params.id)
    .then(function(usuario){
        res.render("user/detalleUsuariobd", {usuario});
    
    })
},
 
    editarUsuarioId:(req,res)=>{
        db.User.findByPk(req.params.id)
        .then(function(usuario){
        res.render("user/edicionUsuariobd", {usuario});

    })
},

actualizarUsuarioId: (req,res)=>{
    db.User.update({
        'firstname': req.body.firstname,           
        'lastname': req.body.lastname,
        'mail' : req.body.mail,
        'password': req.body.password,
    },{
        where:{
            id_user: req.params.id
        }
}),
res.redirect("/user/" + req.params.id)
},

borrarUsuarioId:(req,res)=>{
    db.User.destroy({
        where:{
            id_user: req.params.id
        }
    })
res.redirect("/user/userbd")

}

}

//------------------------------------------------- con bd  


// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de usuarios
module.exports = userController;



