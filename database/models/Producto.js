module.exports =function (sequelize,datatypes){
    let alias="Producto";

    let cols = {
        
   id_type_product: {
    type:datatypes.INTEGER,
    primaryKey:true,

   },

   name_product :{
    
    type :datatypes.string
   
    },

    name_product :{
        type:datatypes.string
    },
    image :{
        type:datatypes.integer
    },
    description_product:{
        type:datatypes.string
    }, 
    price :{
        type:datatypes.integer
    },
    disctount:{
        type:datatypes.integer
    },              
    stock:{
        type:datatypes.integer
    },
    id_type_product :{
        type:datatypes.integer
    }


    }

    let Producto = sequelize.define(alias,cols,config);

    Producto.associate = function (models){
        Producto.hasMany(models.Type_product,{
          as: "tipoProducto",
          foreignKey: " id_type_product"
  
        })
      }

 return Producto

}