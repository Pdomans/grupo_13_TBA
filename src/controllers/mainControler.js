// Requerimos path para poder enviar los archivos HTML
const path = require("path");

// Creamos el objeto literal con los métodos a exportar
const mainController = {

    // Manejo del pedido get con ruta
    inicio: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/inicio.html"))
    }
}

// Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = mainController;