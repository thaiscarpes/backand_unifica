const express = require('express'); //criar rotas e manipular solicitações http
const router = express.Router(); //objeto de roteador do express
const locationController = require('./controllers/locationController'); //import. o arq que contém as rotas da localização

//Rotas
//requisições: get(listar), post(cadastrar), put(editar), delete(deletar)

//Server home
router.get('/', locationController.serverHome );

//Listar todas as localizaçõeS
router.get( '/location' , locationController.listAllLocations);

//Listar uma localização
router.get( '/location/:id' , locationController.listOneLocation);

//Cadastrar uma localização
router.post( '/location/' , locationController.createLocation);

//Remover uma localização
router.delete( '/location/:id' , locationController.deleteLocation);

//Editar uma localização
router.put( '/location/:id' , locationController.updateLocation);

//exportar o objeto do roteador
module.exports = router;