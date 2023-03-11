//importando pacotes
const express = require('express') //criar rotas e manipular solicitações http
const routes = require( './routes.js') //importando roteador
const bodyParser = require('body-parser') //analisa os dados enviados no corpo de uma req. http(ex:json)
const cors = require('cors') //mecanismo de segurança do navegador (somente front pode fazer requisição)

const app = express()
const port = process.env.PORT || 3030

app.use(routes) //transforma o routes no middleware(pacote) com as rotas da aplicação
app.use(bodyParser.urlencoded({extend:false})) //analisa somente os dados simples do corpo da solicitação
app.use(bodyParser.json()) //adc no app p/ analisar o corpo da req. http como um obj json (transforma a req http em json)
app.use(cors()) //permissão de diferentes origens no servidor


//configurar servidor para escutar a porta configurada
app.listen( port, () =>{
    console.log(`Server listening on port ${port}`)
})