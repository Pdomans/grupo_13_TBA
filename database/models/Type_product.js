module.exports =function (sequelize,datatypes){
  
    let alias="tipoProducto";
  
    let cols = {
  
        id_type_product: {
            type:datatypes.INTEGER,
            primaryKey:true,
        
        },
        
        name_product :{
        type :datatypes.STRING
        }
      }
  
        let config = {
          tableName: "tipoProducto",
          timestamps: false
        
    }
  
      let Type_product = sequelize.define(alias,cols,config);
  
     /*  Type_product.associate = function (models){
        Type_product.hasMany(models.Producto,{
          as: "producto",
          foreignKey: " id_type_product"
  
        })
      } */
  
      return Type_product;
  
  }