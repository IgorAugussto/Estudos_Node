const express = require('express');

const server = express();

//Usado para que o server entenda que estamos enviado uma informação json
server.use(express.json());

//CRUD = Creat, Read, Update, Delete

const cursos = ['Node Js', 'JavaScript', 'React Native'];

/*Middleware Globa, vai acontecer em todas as rotas. Usando o next é possivel ir para a proxima
chamada, caso não possuir o next a requisição fica travada nesse middleware*/
server.use((req, res, next) => {
    console.log('REQUISIÇÃO CHAMADA');

    return next();
});

//Checando com middleware se um nome foi mesmo inserido(tem que usar function)
function checkCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({ error: "Nome do curso é obrigatório" });
    }

    return next();
}

function checkIndexCurso (req, res, next){
    const cursos = cursos[index.params.index];
    if(!curso){
        return res.status(400).json({ error: "Usuário não existe" });
    };

    return next();
}

//Listagem de todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//Listagem de apenas um item o curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

//Atualizar a lista colocando mais um nome na lista. Middleware é usado logo após a rota
server.post('/cursos', checkCurso, (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//Atualizando um curso. Necessário ter o index para saber curso exatamente está sendo editado
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos [ index ] = name;

    return res.json(cursos);
});

//Excluindo algum curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    //Deletar o index na primeira posição dele
    cursos.splice(index, 1)

    return res.json(cursos);
});

//Necessário utilizar isso para que o server saiba em qual porta ele deve se conectar
server.listen(3000);