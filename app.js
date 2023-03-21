const express = require ("express");
const app = express();
const path=require("path");

// Importamos los distintos enrutadores
const mainRouter = require("./src/routes/mainRouter.js")
const productsRouter = require("./src/routes/productsRouter.js")
const userRouter = require("./src/routes/userRouter.js")


//configuramos el motor de plantillas con ejs 
app.set("view engine", "ejs");

app.use(express.static('public'));

//indicamamos donde se encuentran las vistas ( en views)
app.set('views', path.resolve(__dirname,"src/views"));

// Usando los enrutadores importados
app.use("/",mainRouter);
app.use("/productos", productsRouter);
/* app.use("/carrito", productsRouter); */
app.use("/usuario", userRouter);


//esucchando en el puerto 3000
app.listen(3500,() => {
    console.log ("Servidor corriendo en el puerto http://localhost:3500");
});