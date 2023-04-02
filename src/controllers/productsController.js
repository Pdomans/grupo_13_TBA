// Creamos el objeto literal con los métodos a exportar
const path = require("path");
const fs= require ("fs");

const productsFilePath = path.join(__dirname, "../data/productosDataBase.json");

const productsController = {

    productos: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("productos", {products});
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
        res.render("carrito");
        /*   res.send(path.join(__dirname, "../views/carrito.ejs")) */
    },
    vender: (req, res) => {
        res.render("vender");
    },

    
    
    
   detalle: (req, res) => {
    let id = req.params.idProducto
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const productToSend = products.find(product => {
        return product.id == id
    })
        res.render("detalleProducto",{product: productToSend});
     /*    res.send(path.join(__dirname, "./src/views/detalleProducto.html")) */
    },

    create: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        res.render("/productos")
    },

    store: (req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        console.log(req.body);
        let productoNuevo = {
            id: 17,
            name: "vulputate nonummy maecenas tincidunt",
            other_name: "Barleria cristata L.",
            mage: "4.jpg",
            description: "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea",
            features: "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
            price: 6972.8,
            discount: "10%",
            categoria: "Mas vendido"
        };
        
        products.push(productoNuevo);
        let productsJSON = JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, productsJSON);
        res.redirect("/productos")
        },

    


}



// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de productos
module.exports = productsController;