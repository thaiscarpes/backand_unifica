const database = require('../config/database')
const model = require('../config/LocationModel')

const locationController = {

    //Listar todas as localizações
    listAllLocations : async (request, response) => {

        await model.find({}).then((locations) => {
            
            response.status(200).json({ locations })
            
        }).catch((err) => {
            
            
            response.status(500).json({ message: `Error: ${err}` })

        })
    },

    //Listar uma localização específica
    listLocation : async (request, response) => {

        const locationId = request.params.id

        await model.findById(locationId).then((location) => {

            response.status(200).json({ location })
            
        }).catch((err) => {
            
            
            response.status(500).json({ message: `Error: ${err}` })

        })

    },

    //Cadastrar uma localização
    createLocation : async (request, response) => {

        const { 
            title,
            description,
            image,
            address,
            phone,
            extension,
            workours,
            latitude,
            longitude
        } = request.body

        const pointer = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const location = new model({
            title,
            description,
            image,
            address,
            phone,
            extension,
            workours,
            pointer
          })
          
        await location.save().then(() => {
            
            response.status(200).json({ message: 'Location Added!' })
            
        }).catch((err) => {
            
            
            response.status(500).json({ message: `Error: ${err}` })

        })
    },

    //Editar uma localização
    updateLocation : async (request, response) => {
        
        const id = request.params.id
          
        await model.updateOne({_id: id}, request.body).then(() => {
            
            response.status(200).json({ message: 'Location Updated!' })
            
        }).catch((err) => {
            
            
            response.status(500).json({ message: `Error: ${err}` })

        })

    },

    //Remover uma localização
    deleteLocation : async (request, response) => {

        const id = request.params.id

        await model.deleteOne({_id: id}).then(() => {
            
            response.status(200).json({ message: 'Location Removed!' })
            
        }).catch((err) => {
            
            response.status(500).json({ message: `Error: ${err}` })

        })
    }
}

module.exports = locationController