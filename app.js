const express = require ("express");
const app = express();
const path=require("path");
const middlewares=require("./src/middlewares/global/middle.js");
const session = require ("express-session");


// Importamos los distintos enrutadores
const mainRouter = require("./src/routes/mainRouter.js")
const productsRouter = require("./src/routes/productsRouter.js")
const userRouter = require("./src/routes/userRouter.js")

// para el put y delete 
const methodOverride=require('method-override');
app.use(methodOverride('_method'));

//configuramos el motor de plantillas con ejs 
app.set("view engine", "ejs");

//para  poder procesar los formularios 
app.use(express.urlencoded({extended:true}));
app.use(express.json());//recibe  el body  de los formularios
app.use(session({secret:"nuestro mensaje secreto"}))
app.use(express.static('public'));



//indicamamos donde se encuentran las vistas ( en views)
app.set('views', path.resolve(__dirname,"./src/views"));

// Usando los enrutadores importados
app.use("/",mainRouter);
app.use("/productos", productsRouter);
/* app.use("/carrito", productsRouter); */
app.use("/usuario", userRouter);


// ejecucion middleware global 
app.use(middlewares);



//esucchando en el puerto 3000
app.listen(3500,() => {
    console.log ("Servidor corriendo en el puerto http://localhost:3500");
});