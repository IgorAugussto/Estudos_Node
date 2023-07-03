//modulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';

//modulos internos
import fs from 'fs'

/*Essa função tem que ser inicializada com o sistema para que o usuario já tenha uma interação assim
que o sistema começar a rodar*/
operation()

function operation() {

    inquirer
        .prompt([{
            type: 'list',
            name: 'action',
            message: 'O que você quer fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ],
        },
        ])
        .then((answer) => {
            const action = answer['action']

            if (action === 'Criar Conta') {
                createAccount()
            } else if (action === 'Consultar Saldo') {
                getAccountBalance()
            } else if (action === 'Depositar') {
                deposit()
            } else if (action === 'Sacar') {
                withdraw()
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
                process.exit()
            }
        })
        .catch((err) => console.log(err))
}

//creat account
function createAccount() {
    console.log(chalk.bgGreen.black('Obrigado por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    buildAccont()
    return
}

function buildAccont() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para a sua conta'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']
            console.info(accountName)
            //Criando um banco de dados
            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }
            //Validação se a conta existe ou não
            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome'))
                buildAccont()
            }
            fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}',
                function (err) {
                    console.log(err)
                })

            console.log(chalk.green('Parabéns, sua conta foi criada!'))

            operation()
        })
        .catch((err) => console.log(err))
}

//add an amount to user account
function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            //verify if the account exist
            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto você deseja depositar'
                }
            ])
                .then((answer) => {
                    const amount = answer['amount']

                    //add an amount
                    addAmount(accountName, amount)
                    operation()
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome'))
        return false
    }
    return true
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`))
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'//essa flag vai apenas ler o arquivo
    })
    return JSON.parse(accountJSON)
}

//Show account balance
function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'AccountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then((answer) => {
        const accountName = answer['AccountName']

        //verify if the accounts exists
        if(!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)
        console.log(chalk.bgBlue.black(`Seu saldo atual é de R$${accountData.balance}`))

        operation()
    })
    .catch(err => console.log(err))
}

//Withdraw an amount from user account
function withdraw() {
    inquirer.prompt([
        {
            name:'accountName',
            message:'Qual o nome da sua conta ?'
        }
    ])
    .then((answer) => {
        const accountName = answer['accountName']

        //verify if the account exists
        if(!checkAccount(accountName)) {
            return withdraw()
        }

        inquirer.prompt([
            {
                name:'amount',
                message: 'Quanto você deseja sacar?'
            }
        ])
        .then((answer) => {
            const amount = answer['amount']

            removeAmount(accountName, amount)
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
        return withdraw()
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)
    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData),
    function(err) {
        console.log(err)
    })

    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta.
    Valor restante na conta é de R$${accountData.balance}`))
    operation()
}