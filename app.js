const express = require ("express");
const app = express();

// Importamos los distintos enrutadores
const mainRouter = require("./src/routes/mainRouter.js")
const productsRouter = require("./src/routes/productsRouter.js")
const userRouter = require("./src/routes/userRouter.js")


app.use(express.static('public'));

// Usando los enrutadores importados
app.use("/", mainRouter);
app.use("/productos", productsRouter);
app.use("/usuario", userRouter);


app.listen(3500,() => {
    console.log ("Servidor corriendo en el puerto http://localhost:3500");
});