const path = require('path')
const express = require('express')

const PORT = process.env.HTTP_PORT || 8080
const app = express()

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/', (req, res) => {
    res.send('lets fuckin send it brah')
})

app.get('/flower', (req, res) => {
    res.json({
        name: 'This is still the landing page im just testing things.',
        color: 'Working title, I have no fucking idea what to call this still.'
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}.`)
})


const http = require('http')
const socketIo = require('socket.io')

const ioPort = 4001

const ioApp = express()
const index = require('./routes/index')
ioApp.use(index)
const server = http.createServer(ioApp)
const io = socketIo(server)

let interval;
io.on('connection', (socket) => {
    console.log('New client connected')
    if(interval){
        clearInterval(interval)
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000)
    socket.on('disconnect', () => {
        console.log('Client disconnected')
        clearInterval(interval);
    })
})

const getApiAndEmit = socket => {
    const responce = new Date()
    socket.emit("FromAPI", responce)
}

server.listen(ioPort, () => {
    console.log(`IO Server is listening at port ${ioPort}.`)
})