const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://thaisc:App2023@unifica.dve53jm.mongodb.net/?retryWrites=true&w=majority`), {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.connection.on( 'connected', () => {
    console.log('Conectado ao Mongo com sucesso!')
})

mongoose.connection.on( 'error', (err) => {
    console.log(`Ocorreu um erro ao conectar na base de dados!: ${err}`)
})

module.exports = mongoose