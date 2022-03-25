import express from 'express'

const server = express()
const PORT = 8080

server.get('/', (req, res) => {
    res.send('Express Server')
})

server.listen(PORT, () => {
    console.log(`serving at http://localhost${PORT}`)
})