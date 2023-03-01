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

app.listen(3500,() => {
    console.log ("Servidor andando en el puerto 3500");
});

