const express = require('express')
const server = express()
const port = 3003
const nunJucks = require('nunjucks')

server.use(express.static("public"))
server.use(express.static("player-scripts"))

nunJucks.configure("src/views", {
    express: server,
    noCache: true
})


server.get('/', (req, res) => {
    return res.render('index.html')
})

server.get('/player', (req, res) => {
    return res.sendFile('C:/Users/Kauan/Desktop/KAUAN/projeto_site/player-scripts/player-page.html')
})

server.listen(port, () => {
    console.log(`Servidor rodando normalmente na porta ${port}`)
})