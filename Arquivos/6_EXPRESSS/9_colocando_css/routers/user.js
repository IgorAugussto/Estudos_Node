const express = require('express')
const router = express.Router()
const path = require('path')
//Desse modo eu consigo acessar a pasta templates
const basePath = path.join(__dirname, '../templates')

/*Como o "app" lá no index está sendo criado com "/users", vai ser necessário tirar o /users dessas
 rotas para que na URL não fique "/users/users/add"*/
router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
    /*Toda requisição do body é transformada em um objeto javascript que a gente consegue ler usando 
    req.body*/
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    //Leitura da tabela users, resgatar o usuario do banco de dados
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/user.html`)
})

module.exports = router