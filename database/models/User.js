const { INTEGER } = require("sequelize");
module.exports =function (sequelize,DataTypes){
  let alias="User";

  let cols = {

       id_user: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      }, 

      firstname:{
      type:DataTypes.STRING,
      },

      lastname:{
      type :DataTypes.STRING,   
      },

      mail:{
      type :DataTypes.STRING,
      },

      password:{
      type :DataTypes.STRING,
      },

/*       image :{
      type :datatypes.STRING,
      }, */
    
/*       id_category:{
      type :datatypes.STRING,
      }, */
    }

      let config = {
        tableName: "users",
        timestamps: false
      
  }

    let User = sequelize.define(alias,cols,config);

     User.associate = function (models){

      User.belongsTo(models.Category_user,{
        as: "categoria_usuario",
        foreignKey: "id_category"

      })
    
      User.hasMany(models.Factura,{
        as: "factura",
        foreignKey: "id_user"
  
        })
    } 
  
    return User;

}