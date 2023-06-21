module.exports =function (sequelize,DataTypes){
    let alias="Producto";

    let cols = {
        
   //id_type_product: {
    //type:datatypes.INTEGER,
    //primaryKey:true,
   //},

   name :{
    type :DataTypes.STRING
    },

    descripcion:{
        type:DataTypes.STRING
    }, 
    price :{
        type:DataTypes.INTEGER
    },
    discount:{
        type:DataTypes.INTEGER
    },              
    //stock:{
       // type:datatypes.integer },
    //id_type_product :{
        //type:datatypes.integer}
        
    //image :{
        //type:datatypes.integer },



    };
    let config = {
        tableName: "Producto",
        timestamps: false
    }
    let Producto = sequelize.define(alias,cols,config);

   /*  Producto.associate = function (models){

        Producto.BelongsTo(models.Type_product,{
          as: "tipoProducto",
          foreignKey: " id_type_product"
  
        })

        Producto.hasMany(models.Factura,{
            as: "factura",
            foreignKey: " id_factura"
    
          })
      } */

 return Producto

}