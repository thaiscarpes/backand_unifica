const location = {
    id: 123, 
    title: 'Mercovia',
    description: 'Concessionaria do CUF',
    image: 'locationofimage',
    address: 'BR 127',
    contact: {
        email:'email@mercovia.com',
        phone:'55123456789',
        extension: '2039'
    },
    hours:{
        first: ['08:00', '12:00'],
        second: ['14:00', '18:00']
    }
}

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

    createLocation : ( request, response ) => {
        response.json({
            message: 'Localização cadastrada com sucesso!',
            id:123
        })
    },    

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

module.exports = locationController;