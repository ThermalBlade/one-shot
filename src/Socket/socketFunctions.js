import io from 'socket.io-client'

let socket
const ENDPOINT = process.env.REACT_APP_SERVER_PATH

export const initiateSocket = (roomCode, userName, password) => {
    socket = io(ENDPOINT)
    console.log('Connecting to socket...')
    if(socket) socket.emit('join', roomCode)
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket....')
}

export const subscribeToChat = (cb) => {
    if(!socket) return(true)

    socket.on('chat', msg => {
        console.log('Websocket event recieved!', msg)
        return cb(null, msg)
    })
}

export const sendMessage = (room, message) => {
    if(socket) socket.emit('chat', {message, room})
}