const chalk = require('chalk')

const nota = 4

if (nota >= 7) {
    console.log(chalk.green('Parabens! Você está aprovado!'))
} else {
    console.log(chalk.bgRed.black('Que pena, não foi dessa vez. Está reprovado.'))
}