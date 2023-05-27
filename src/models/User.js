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

// generación de ID
generateId: function (){
    let allUsers = this.findAll();
    let lastUser = allUSers.pop();
    return lastUser.id + 1;
},

// busqueda por cualquier campo 
findByField: function (field, text){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => [field] === text);
    return userFound;
},




create : function (userData){
    let allUsers=this.findAll(); 
    allUsers.push(userData); 
    fs.writeFileSync(this.filename,JSON.stringify(allUsers,null, ' '));
    return true; 
},



create :function(userData){
}

}
// solo lee el ultimo  usuario creado ,  revisar porque no lee todo el json. 
//console.log(user.generateId());

