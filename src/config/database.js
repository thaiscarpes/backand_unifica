const mongoose = require('mongoose'); //Importa o mongoose
const dotenv = require('dotenv'); //Importa o env

//Ativa o env
dotenv.config();

const uri = process.env.MONGODB_URI

// Conexão com o banco de dados
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Mongo is UP!');
  }).catch((err) => {
    console.error('Error to connect with MongoDB:', err);
});
