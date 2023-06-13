module.exports =function (sequelize,datatypes){
  
    let alias="Category_user";
  
    let cols = {
  
        id_category: {
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        },
  
        name_category:{
        type :datatypes.string,
        },

      }
      
        let config = {
          tableName: "users",
          timestamps: false
        
    }
  
      let Category_user = sequelize.define(alias,cols,config);
  
      return Category_user;
  
  }