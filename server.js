const express = require('express')

const PORT = process.env.HTTP_PORT || 4001
const app = express()

app.get('/', (req, res) => {
    res.send('lets fuckin send it brah')
})

app.get('/flower', (req, res) => {
    res.json({
        name: 'Dandelion',
        color: 'kinda blue'
    })
})

app.listen(PORT, () => {
    console.log('Server is listening at port ${PORT}.')
})