// Requerimos path para poder enviar los archivos HTML
const path = require("path");

// Creamos el objeto literal con los métodos a exportar
const mainController = {

    // Manejo del pedido get con ruta
    inicio: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/inicio.html"))
    }
    // Manejo del pedido get con ruta
    carrito: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/carrito.html"))
    }
        // Manejo del pedido get con ruta
    login: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/login.html"))
    }
    // Manejo del pedido get con ruta
    productos: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/productos.html"))
    }
    // Manejo del pedido get con ruta
    quiensomos: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/quiensomos.html"))
    }
        // Manejo del pedido get con ruta
    registro: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/registro.html"))
    }
        // Manejo del pedido get con ruta
    detalleProducto: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/detalleProducto.html"))
    }
}

// Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = mainController;
