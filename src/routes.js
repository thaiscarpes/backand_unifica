const express = require('express') //Importa o express
const locationController = require('./controllers/locationController') //Importa o controller de localização
const userController = require('./controllers/userController') //Importa o controller de usuarios
const distanceController = require('./controllers/distanceController') //Importa o controller da distancia
const router = express.Router() //Ativa o router para criar as rotas


//Rota para mostrar todas as localizações
router.get('/location', locationController.listAllLocations)

//Rota para mostrar uma localização específica
router.get('/location/:id', locationController.listLocation)

//Rota para cadastrar uma localização
router.post('/location', locationController.createLocation)

//Rota para Editar uma localização
router.put('/location/:id', locationController.updateLocation)

//Rota para remover uma localização
router.delete('/location/:id', locationController.deleteLocation)

//Rota para calcular a distância do local ate o usuário
router.get('/distance', distanceController.getLocationDistance)

//Rota para listar os usuários
router.get('/user', userController.listAllUsers)

//Rota para adicionar um usuário
router.post('/user/', userController.createUser)

//Rota para editar um usuário
router.put('/user/:id', userController.updateUser)

//Rota para remover um usuário
router.delete('/user/:id', userController.deleteUser)

module.exports = router