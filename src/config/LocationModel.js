const mongoose = require('mongoose') //Importa Mongoose
const pointerSchema = require('./utils/pointerSchema')

// Esquema do modelo
const locationSchema = new mongoose.Schema({
  title: String,
  descriprion: String,
  image: String,
  address: String,
  phone: Number,
  extension: Number,
  workours: Array,
  pointer: {
    type: pointerSchema,
    index: '2dsphere'
  }
})

// Modelo
const LocationModel = mongoose.model('my_model', locationSchema)

module.exports = LocationModel
