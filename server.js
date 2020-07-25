const express = require('express.js')
const server = express()
const port = 3003

server.get('/home', (req, res) => {
    res.render('src/index.html')
})


server.listen(port, () => {
    console.log(`Servidor rodando normalmente na porta: ${port}`)
})