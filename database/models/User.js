module.exports =function (sequelize,datatypes){
  
  let alias="User";

  let cols = {

      id_user: {
      type:datatypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      },

      firstname:{
      type :datatypes.STRING,
      },

      lastname:{
      type :datatypes.STRING,   
      },

      mail:{
      type :datatypes.STRING,
      },

      password:{
      type :datatypes.STRING,
      },

      image :{
      type :datatypes.STRING,
      },
    
      id_category:{
      type :datatypes.STRING,
      },
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