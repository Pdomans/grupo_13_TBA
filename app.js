const express = require ("express");
const path = require("path");

const app = express();

app.use(express.static('public'));


app.get ("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/views/home.html"));
});

app.get("/loggin", (req, res) => {
    res.sendFile(path.join(__dirname, "src/views/loggin.html"));
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
    console.log ("Servidor corriendo en el puerto 3500");
});

