const mongoose = require('./database')

//criado um obj models (modelo da minha base de dados, com o modelo(tamplate) de cada tabela)

const models = {
    locationModel : new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        address: {
            type: String
        },
        contact: {
            type: Object,
        },
        workingHours: {
            type: Object,
            required: true
        }
    })
}

module.exports = models