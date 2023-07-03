//configurações para receber dados e enviar dados para o usuario
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual o sua liguagem favorita?", (language) => {

    console.log(`A minha liguagem favorita é : ${language}`)
    readline.close()
})
