const { INTEGER } = require("sequelize");

module.exports =function (sequelize,DataTypes){
    let alias="DetalleFactura";

    let cols = {
         
   id: {
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true 
   }, 

    id_factura:{
        type:DataTypes.INTEGER
    },              
    id_product:{
        type:DataTypes.INTEGER
    }

   

    



    };
    let config = {
        tableName: "detalle_facturas",
        timestamps: false
    }
    let DetalleFactura = sequelize.define(alias,cols,config);

     DetalleFactura.associate = function (models){

        DetalleFactura.belongsTo(models.Factura,{
         //esta en  singunlar porque lo cree en singular en el mysql :(
            as: "factura",
          foreignKey: "id_factura"
  
        })

        DetalleFactura.belongsTo(models.Producto,{
            as: "Product",
            foreignKey: " id_product"
    
          })
      } 

 return DetalleFactura


}

