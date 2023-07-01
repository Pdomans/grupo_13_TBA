const { INTEGER } = require("sequelize");

module.exports =function (sequelize,DataTypes){
    let alias="Producto";

    let cols = {
         
   id_product: {
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true 
   }, 

   name_product:{
    type :DataTypes.STRING 
    },

    description_product:{
        type:DataTypes.STRING
    }, 
    price:{
        type:DataTypes.INTEGER
    },
    disctount:{
        type:DataTypes.INTEGER
    },              
    stock:{
        type:DataTypes.INTEGER
    },

   id_type_product:{
    type:DataTypes.INTEGER
  
   }

    //image :{
    //type:datatypes.integer },



    };
    let config = {
        tableName: "products",
        timestamps: false
    }
    let Producto = sequelize.define(alias,cols,config);

     Producto.associate = function (models){

        Producto.belongsTo(models.Type_product,{
          as: "type_products",
          foreignKey: "id_type_product"
  
        })

      
          Producto.hasMany(models.DetalleFactura,{
            as: "detalle_facturas",
            foreignKey: "id_product"
    
          })
      
      
      
        } 

 return Producto


}

