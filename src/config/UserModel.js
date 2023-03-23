const mongoose = require('mongoose');//Importa Mongoose

// Esquema do modelo
const userSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  userPasswd: String
});

// Modelo
const UserModel = mongoose.model('user_model', userSchema);

module.exports = UserModel;
