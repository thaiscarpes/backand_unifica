const express = require('express'); //criar rotas e manipular solicitações http
const router = express.Router(); //objeto de roteador do express

//Rotas
//requisições: get(listar), post(cadastrar), put(editar), delete(deletar)

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

//Server home
router.get('/', (request, response) => {
    response.json('message: Bem vindo ao Unifica!')
} )

//Listar todas as localizaçõeS
router.get( '/location' , ( request, response ) => {
    response.json(location);
});

//Listar uma localização
router.get( '/location/:id' , ( request, response ) => {
    response.json(location);
});

//Cadastrar uma localização
router.post( '/location/' , ( request, response ) => {
    response.json({
        message: 'Localização cadastrada com sucesso!',
        id:123
    });
});

//Remover uma localização
router.delete( '/location/:id' , ( request, response ) => {
    response.json({
        message: 'Localização removida com sucesso!',
        id:123
    });
});

//Editar uma localização
router.put( '/location/:id' , ( request, response ) => {
    response.json({message: 'Localização alterada com sucesso!'});
});

//exportar o objeto do roteador
module.exports = router;