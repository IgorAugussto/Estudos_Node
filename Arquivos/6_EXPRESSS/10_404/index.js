const express = require('express')
const app = express()
const port = 3000 //variavel de ambinete
//"req" = recebe / "res" = envia como resposta para o usuario
const path = require('path')
const users = require('./routers/user')

//Ler o body
app.use(express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//Arquivos estáticos
app.use(express.static('public'))

//Desse modo eu consigo acessar a pasta templates
const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})