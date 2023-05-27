const fs = require ('fs'); 

const user ={

    filename :"../data/usuariosDataBase.json",

    getData : function (){
        return  JSON.parse(fs.readFileSync(this.filename,'utf-8'));
    },


    findAll: function (){
    return  JSON.parse(fs.readFileSync(this.filename,'utf-8'));
},



// busqueda por id 
FINDbYpK: function (id){
    let allUsers=this.findAll();
    let userFound=allUsers.find(oneUser=>oneUser.id===id);
    return userFound;

    
},

findByField: function (field, text){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => [field] === text);
    return userFound;
},


create :function(userData){
}

}
// solo lee el ultimo  usuario creado ,  revisar porque no lee todo el json. 
//console.log(user.findAll());

console.log(user.findByField());