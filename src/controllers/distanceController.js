const database = require('../config/database')
const model = require('../config/LocationModel');
const calculateDistance = require('../config/utils/calculateDistance');

const distanceController = {

    //Calcular a distancia do usuario ate o local
    getLocationDistance : async (request, response) => {
        //pega o id do local e a localização do usuário
        const { 
            latitude,
            longitude,
            locationId
         } = request.query;

        const userCoords = {latitude, longitude}

        await model.findOne({_id: locationId }).then((locationPosition) => {

            const locationCoords = {
                latitude: locationPosition.pointer.coordinates[1],
                longitude: locationPosition.pointer.coordinates[0]
            };

            const distance = calculateDistance(userCoords, locationCoords)
            const distanceInMeters = distance * 1000;

            response.status(200).json({distanceInMeters})
        }).catch((err) => {
            response.status(500).json({message: `Error:${err}`})
        })
    }
       
}
module.exports = distanceController