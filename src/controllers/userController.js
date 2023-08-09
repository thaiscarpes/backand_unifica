const database = require('../config/database')
const model = require('../config/UserModel')

const userController = {

    //Listar todos os usuarios
    listAllUsers : async (request, response) => {

        await model.find({}).then((Users) => {
            
            response.status(200).json({ Users })

        }).catch((err) => {

            response.status(500).json({message: `Error: ${err}`})

        })
    },

    //Cadastrar usuario
    createUser : async (request, response) => {

        const {
            userName,
            userEmail,
            userPasswd
        } = request.body

        const encodedPassword = Buffer.from(userPasswd).toString('base64'); //criptografando a senha

        const user = new model({
            userName,
            userEmail,
            userPasswd: encodedPassword
        })

        await user.save().then(() => {

            response.status(200).json({message: 'User Added!'})

        }).catch((err) => {

            response.status(500).json({ message: `Error: ${err}` })

        })

    },

    //Editar usuario
    updateUser : async (request, response) => {

        const id = request.params.id

        const {
            userName,
            userEmail,
            userPasswd
        } = request.body
        
        const encodedPassword = Buffer.from(userPasswd).toString('base64');

        const newUserData = {
            userName,
            userEmail,
            userPasswd: encodedPassword
        }

        await model.updateOne({_id: id}, newUserData).then(() => {

            response.status(200).json({ message: 'User Updated!' })

        }).catch((err) => {
            
            response.status(500).json({ message: `Error: ${err}` })

        })

    },

    //Remover usuario
    deleteUser : async (request, response) => {

        const id = request.params.id

        await model.deleteOne({_id: id}).then(() => {
            
            response.status(200).json({ message: 'User Removed!' })
            
        }).catch((err) => {
            
            response.status(500).json({ message: `Error: ${err}` })

        })
    }

}

module.exports = userController