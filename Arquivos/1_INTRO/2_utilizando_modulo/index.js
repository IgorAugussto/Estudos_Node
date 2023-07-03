const fs = require("fs"); //File System

/*Lendo o arquivo.txt. Utf8 para ler acentos, e em seguida tem uma arrow function (função resumida)
que vai receber ou um erro ou os dados do nosso arquivo*/
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    /*Função If para ver se caso o programa receba um erro, vai devolver o erro, caso contrario
    vai imprimir os dados do arquivo.txt*/
    if(err){
        console.log(err)
    }

    console.log(data);
})