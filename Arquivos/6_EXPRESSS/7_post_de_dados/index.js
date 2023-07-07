const express = require('express')
const app = express()
const port = 3000 //variavel de ambinete
//"req" = recebe / "res" = envia como resposta para o usuario
const path = require('path')

//Ler o body
app.use(express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//Desse modo eu consigo acessar a pasta templates
const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    /*Toda requisição do body é transformada em um objeto javascript que a gente consegue ler usando 
    req.body*/
    console.log(req.body)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //Leitura da tabela users, resgatar o usuario do banco de dados
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/user.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})