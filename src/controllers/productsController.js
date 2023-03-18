// Creamos el objeto literal con los métodos a exportar
const productsController = {

    // Manejo del pedido get con ruta /productos/compra
    compra: (req, res) => {
        res.send("Compra exitosa")
    },

    // Manejo del pedido get con ruta /productos/venta
    venta: (req, res) => {
        res.send("Venta exitosa")
    },

    // Procesa el pedido get con ruta /productos/numeroProducto
    // Ruta parametrizada!!
    detalle: (req, res) => {
        // En req.params tenemos el parametro que definimos en el enrutador (en este caso con la palabra num)
        let productoId = req.params.numeroProducto;
        res.send("Detalle del producto " + productoId);
    }
}

// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de productos
module.exports = productsController;