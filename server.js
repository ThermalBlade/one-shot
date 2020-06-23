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
    console.log('Server is listening at port ${PORT}.')
})