const express = require ("express");
const path = require("path");
const app = express();

const { inicio, carrito, productos, quiensomos, detalleProducto } = require("./src/controllers/mainController");


app.use(express.static('public'));


app.get ("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/views/inicio.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "src/views/login.html"));
});

app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "src/views/registro.html"))
});

app.get("/productos", (req, res) => {
    res.sendFile(path.join(__dirname, "src/views/productos.html"));
});

app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname, "src/views/carrito.html"));
});

app.get("/quienes-somos", (req, res) => {
    res.sendFile(path.join(__dirname, "src/views/quiensomos.html"));
});


app.listen(3500,() => {
    console.log ("Servidor corriendo en el puerto http://localhost:3500");
});



// Importamos los distintos enrutadores
const mainRouter = require("./routes/mainRouter.js")
const productsRouter = require("./routes/productsRouter.js")
const userRouter = require("./routes/userRouter.js")

// Usando los enrutadores importados
app.use("/", mainRouter);
app.use("/productos", productsRouter);
app.use("/usuario", userRouter);


