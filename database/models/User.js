module.exports =function (sequelize,datatypes){
  
    let alias="User";

    let cols = {

    id_user: {
      type:datatypes.INTEGER,
      primaryKey:true,
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
    }


  }

  let User = sequelize.define(alias,cols,config);

  return User;
  
}