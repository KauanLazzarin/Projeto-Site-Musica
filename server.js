const express = require('express')
const server = express()
const port = 3003

server.use(express.static("public"))
server.use(express.static("player-scripts"))


server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/src/views/index.html')
})

server.get('/player', (req, res) => {
    return res.sendFile(__dirname + '/player-scripts/player-page.html')
})

server.listen(port, () => {
    console.log(`Servidor rodando normalmente na porta ${port}`)
})