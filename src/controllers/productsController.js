// Creamos el objeto literal con los métodos a exportar
const productsController = {

    // Manejo del pedido get con ruta /productos/venta
    venta: (req, res) => {
        res.send("Revisar. Hay que crear html y vincularlo")
    },

    // Procesa el pedido get con ruta /productos/numeroProducto
    // Ruta parametrizada!!
    detalle: (req, res) => {
        // En req.params tenemos el parametro que definimos en el enrutador (en este caso con la palabra num)
        let idProducto = req.params.idProducto;
        res.send(path.join(__dirname, "src/views/detalleProducto.html"));
    },
    carrito: (req, res) => {
        res.send(path.join(__dirname, "src/views/carrito.html"))
    },
    productos: (req, res) => {
        res.send(path.join(__dirname, "src/views/productos.html"))
    },
}

// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de productos
module.exports = productsController;