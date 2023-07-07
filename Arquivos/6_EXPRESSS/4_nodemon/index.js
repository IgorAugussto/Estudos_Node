const express = require('express')
const app = express()
const port = 3000 //variavel de ambinete
//"req" = recebe / "res" = envia como resposta para o usuario
const path = require('path')
//Desse modo eu consigo acessar a pasta templates
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    //Resposta que está sendo enviado para o cliente como resposta
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})