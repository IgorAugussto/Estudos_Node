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

    if (!name) {
        res.status(422).json({message: 'O campo nome é obrigatótio'})
        //Sempre dar o return para não parar a execução
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({message: `O prdouto ${name} do valro ${price} foi adicionado com sucesso!`})
})

app.get('/', (req, res) => {
    res.status(200).json({message: 'Primeira rota criada com sucesso!'})
})

app.listen(3000)