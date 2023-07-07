const express = require('express')
const app = express()
const port = 3000 //variavel de ambinete
//"req" = recebe / "res" = envia como resposta para o usuario
const path = require('path')
//Desse modo eu consigo acessar a pasta templates
const basePath = path.join(__dirname, 'templates')

const chackAuth = function(req, res, next) {
    req.authStatus = false

    if (req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    } else {
        console.log('Não está logado, faca o login para continuar')
        next()
    }
}

app.use(chackAuth)

app.get('/', (req, res) => {
    //Resposta que está sendo enviado para o cliente como resposta
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})