const socketio = require('socket.io')

exports.setuptWebSocket = (server) => {
    const io = socketio(server)

    io.on('connection', socket => {
        console.log(socket.id)
    })
}