const database = require('../config/database')
const model = require('../config/LocationModel')

const distanceController = {

    //Calcular a distancia do usuario ate o local
    getLocationDistance : async (request, response) => {
        //pega o id do local
        const locationId = request.params.id

        //posicao do usuario
        const {
            userLatitude,
            userLongitude
        } = request.body

        await model.findById(locationId).then((locationPosition) => {
            response.status(200).json({locationPosition})
        }).catch((err) => {
            response.status(500).json({message: `Error:${err}`})
        })
    }
       
}
module.exports = distanceController