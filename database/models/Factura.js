module.exports =function (sequelize,datatypes){
  
    let alias="Factura";
  
    let cols = {
  
      id_factura: {
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        },

        id_user: {
          type:datatypes.INTEGER,
        },

        id_product: {
          type:datatypes.INTEGER,
        },
  
        fecha:{
        type :datatypes.DATE,
        },
  
        cant:{
        type :datatypes.INTEGER,   
        },
  
        precio:{
        type :datatypes.INTEGER,
        }
  
       
      }
  
        let config = {
          tableName: "factura",
          timestamps: false
        
    }
  
      let Factura = sequelize.define(alias,cols,config);
  
      Factura.associate = function (models){

        Factura.belongsToMany(models.Producto,{
          as: "categoria_usuario",
          foreignKey: "id_product"  
        })

          Factura.belongsTo(models.User,{
            as: "user",
            foreignKey: "id_user"
      })

    }
      return Factura;
  
}