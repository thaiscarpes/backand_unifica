const mongoose = require('../config/database') //importando o banco de dados
const Models = require('../config/models') //importando models

const location = mongoose.model('Location', Models.locationModel)

locationController = { 

    serverHome : (request, response) => {
        response.json('message: Bem vindo ao Unifica!')
    },

    listAllLocations : ( request, response ) => {
        response.json(location)
    },

    listOneLocation : ( request, response ) => {
        response.json(location)
    },    

    createLocation : async ( request, response ) => {
        const {title, description, image, address, contact, workingHours} = request.body
        try {
            const newLocation = new location({title, description, image, address, contact, workingHours})
            await newLocation.save()
            response.status(201).json({message : 'Cadastro realizado com sucesso!'})
        } catch (err) {
            console.log(err)
            response.status(500).json({message : 'Não foi possível realizar o cadastro!'})   
        }
    }, //função assíncrona para cadastrar os dados no banco de dados. 

    deleteLocation : ( request, response ) => {
        response.json({
            message: 'Localização removida com sucesso!',
            id:123
        });
    },    
    
    updateLocation : ( request, response ) => {
        response.json({message: 'Localização alterada com sucesso!'});
    },
 }

module.exports = locationController