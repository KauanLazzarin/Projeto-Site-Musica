const express = require('express')
const server = express()
const port = 3003

server.get('/', (req, res) => {
    return res.sendFile("C:/Users/Kauan/Desktop/KAUAN/projeto_site/src/index.html")
})

server.listen(port, () => {
    console.log(`Servidor rodando normalmente na porta ${port}`)
})