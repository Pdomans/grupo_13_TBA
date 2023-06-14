module.exports =function (sequelize,datatypes){
  
  let alias="User";

  let cols = {

      id_user: {
      type:datatypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      },

      firstname:{
      type :datatypes.string,
      },

      lastname:{
      type :datatypes.string,   
      },

      mail:{
      type :datatypes.string,
      },

      password:{
      type :datatypes.string,
      },

      image :{
      type :datatypes.string,
      },
    
      id_category:{
      type :datatypes.string,
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