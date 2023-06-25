// Requerimos path para poder enviar los archivos HTML
const path = require("path");
const fs = require ("fs");


// Creamos el objeto literal con los métodos a exportar
const mainController = {
    /* crearProducto: (req, res) => {
        res.render("productos/crearProducto");
    }, */
    // Manejo del pedido get con ruta
    inicio: (req, res) => {
    // comunicarse con el modelo, conseguir información
        res.render("inicio");     
    },
    admin: (req, res) => {
        res.render("admin");
        /* res.sendFile(path.resolve(__dirname, "../views/admin.html")) */
    },
    quiensomos: (req, res) => {
        res.render("quiensomos");
       
    },
    

    adminpost: (req,res)=>{
        
    }
    
}

// Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = mainController;
