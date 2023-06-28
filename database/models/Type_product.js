module.exports =function (sequelize,DataTypes){
  
    let alias="Type_product";
  
    let cols = {
  
        id_type_product: {
            type:DataTypes.INTEGER,
            primaryKey:true,
         autoIncrement :true
        },
        
        name_product :{
        type :DataTypes.STRING
        }
      }
  
        let config = {
          tableName: "type_products",
          timestamps: false
        
    }
  
      let Type_product = sequelize.define(alias,cols,config);
  
       Type_product.associate = function (models){
        Type_product.hasMany(models.Producto,{
          as: "products",
          foreignKey: "id_type_product"
  
        })
      } 
  
      return Type_product;
  
  }