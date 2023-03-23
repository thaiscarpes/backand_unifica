const mongoose = require('mongoose');//Importa Mongoose

// Esquema do modelo
const locationSchema = new mongoose.Schema({
  title: String,
  descriprion: String,
  image: String,
  address: String,
  phone: Number,
  extension: Number,
  workours: Array,
  position: Array
});

// Modelo
const LocationModel = mongoose.model('my_model', locationSchema);

module.exports = LocationModel;
