

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

    // Manejo del pedido get con ruta /usuarios/registrarse
    registro: (req, res) => {
        res.render("user/registro");
        /* res.send(path.join(__dirname, "./views/registro.html")) */
    }   
}

// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de usuarios
module.exports = userController;




