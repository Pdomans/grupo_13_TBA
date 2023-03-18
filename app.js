const express = require ("express");
const path = require("path");
const app = express();

const { inicio, carrito, productos, quiensomos, detalleProducto } = require("./src/controllers/mainController");


app.use(express.static('public'));


// Importamos los distintos enrutadores
const mainRouter = require("./routes/mainRouter.js")
const productsRouter = require("./routes/productsRouter.js")
const userRouter = require("./routes/userRouter.js")

// Usando los enrutadores importados
app.use("/", mainRouter);
app.use("/productos", productsRouter);
app.use("/usuario", userRouter);


app.listen(3500,() => {
    console.log ("Servidor corriendo en el puerto http://localhost:3500");
});