const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

// rotas - endpoints
app.post('/createproduct', (req, res) => {
    //separando os parametros
    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    res.json({message: `O prdouto ${name} do valro ${price} foi adicionado com sucesso!`})
})

app.get('/', (req, res) => {
    res.json({message: 'Primeira rota criada com sucesso!'})
})

app.listen(3000)