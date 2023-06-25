const fs = require("fs");
//paquete para hacer la encriptacion 
const bcrypt=require('bcryptjs');

const User = {
  filename: "./src/data/usuariosDataBase.json",

  getData: function () {
    return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
  },

  findAll: function () {
    return this.getData();
  },

  // busqueda por id
  findByPk: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser.id === id);
    return userFound;
  },

  // generación de ID
  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },

  // busqueda por cualquier campo, pero siempre va a traer el primero que encuentre unicamente. 
  findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
  },

  // creacion de usuario
  create: function (userData) {
    let allUsers = this.findAll();
    let password=bcrypt.hashSync (userData.contrasena, 10) //password:bcrypt.  |
/*     imagen: req.file.filename;
 */    delete userData.contrasena;
    let newUser = {
      id: this.generateId(),
      password:password,
      ...userData,
    };

    allUsers.push(newUser);
    fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, " "));
    return newUser;
  },

  // borrado de usuario por id
  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter((oneUser) => oneUser.id !== id);
    fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, " "));
    return true;
  },
  
  detalle: (req, res) => {
    let id = req.params.idUsurio
    const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
    const usersToSend = users.find(user => {
        return user.id == id
    })
        res.render("usuarios/listadoUsuario",{user:usersToSend});
     
    },

    

};

module.exports = User;
// solo lee el ultimo  usuario creado ,  revisar porque no lee todo el json.
//console.log(User.delete(1));

//console.log(User.create({nombre: "Javi", email: "javi@gmail.com"}))


/*  console.log(User.findAll());  */