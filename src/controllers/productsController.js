// Creamos el objeto literal con los métodos a exportar
const { json } = require('express');
const path = require("path");
const fs= require ("fs");

const productsFilePath = path.join(__dirname, "../data/productosDataBase.json");

const productsController = {

    productos: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("productos/productos", {products});
       /*  res.send(path.join(__dirname, "./src/views/productos.html")) */
    },

    // Procesa el pedido get con ruta /productos/numeroProducto
    // Ruta parametrizada!!
    /* detalle1: (req, res) => {
        // En req.params tenemos el parametro que definimos en el enrutador (en este caso con la palabra num)
        let idProducto = req.params.idProducto; */
       
        /* res.send(path.join(__dirname, "./src/views/detalleProducto.html")); */
    /* }, */
    carrito: (req, res) => {
        res.render("productos/carrito");
        /*   res.send(path.join(__dirname, "../views/carrito.ejs")) */
    },
    vender: (req, res) => {
        res.render("productos/cargar");
    },

    
    
    
   detalle: (req, res) => {
    let id = req.params.idProducto
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const productToSend = products.find(product => {
        return product.id == id
    })
        res.render("productos/detalleProducto",{product: productToSend});
     /*    res.send(path.join(__dirname, "./src/views/detalleProducto.html")) */
    },

    create: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        res.render("/productos")
    },

    store: (req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        //console.log(products);
        console.log(req.body);

        let productoNuevo = {
            id: products[products.length -1].id+1,
            name:req.body.name,
            other_name: req.body.other_name,
            image:req.file.filename,
            description:req.body.description,
            features:req.body.features,
            price:req.body.price,
            discount:req.body.discount,
            categoria:req.body.categoria,
        };
        
        products.push(productoNuevo);
        let productsJSON = JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, productsJSON);
        res.redirect("/productos")
        },

    //  borrar un producto de la bd 
	borrar : (req, res) => {
		let id = req.params.id;
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        
        let finalProducts=products.filter(product =>{
            return product.id != id;
        })

        let productsJSON = JSON.stringify(finalProducts, null, " ");
        fs.writeFileSync(productsFilePath, productsJSON);
        //res.redirect("/productos");

        res.send(200) //ok de http
	}
    


}



// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de productos
module.exports = productsController;