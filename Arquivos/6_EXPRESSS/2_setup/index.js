const express = require('express')
const app = express()
const port = 3000 //variavel de ambinete
//"req" = recebe / "res" = envia como resposta para o usuario

app.get('/', (req, res) => {
    //Resposta que está sendo enviado para o cliente como resposta
    res.send('Olá mundo !')
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})