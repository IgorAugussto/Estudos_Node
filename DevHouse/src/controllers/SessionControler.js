//metodos dentro de um controller - index, show, update, store, destroy

//Tendo importado o User, agora podemos esditar, deletar, atualizar o usuario no bando de dados
const User = require('../models/User');

class SessionController {

    async store(req, res){
        //Pegando o email do body que foi mandado e criando o usuario
        const { email } = req.body;

        let user = await User.create({ email: email })

        return res.json(user);

        if (objeto && objeto.email) {
            // Acesso seguro à propriedade 'email' do objeto
            console.log(objeto.email);
          } else {
            // Lida com o caso em que a variável ou a propriedade 'email' é nula ou indefinida
            console.log("O objeto ou a propriedade 'email' não estão definidos corretamente.");
          }
          
    }

}

module.exports = new SessionController();