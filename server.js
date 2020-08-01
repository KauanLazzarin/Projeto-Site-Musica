const express = require('express')
const server = express()
const port = 3003

server.use('/public', express.static('public'))
server.use('/player',express.static('player-scripts'))


server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/src/views/index.html')
})

server.get('/player', (req, res) => {
    return res.sendFile(__dirname + '/player-scripts/player-page.html')
})

server.get('/userplaylists', (req, res) => {
    return res.sendFile (__dirname + '/src/views/userPlaylists.html')
})

server.listen(port, () => {
    console.log(`Servidor rodando normalmente na porta ${port}`)
})