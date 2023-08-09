const User = require('../models/User')
const bcrypt = require('bcrypt')
const supabase = require('../db/conn')



module.exports = class UserContoller {

    static async register(req, res) {
        const { name, email, phone, password, confirmpassword } = req.body

        //Validations
        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório!' })
        }

        if (!email) {
            res.status(422).json({ message: 'O email é obrigatório!' })
        }

        if (!phone) {
            res.status(422).json({ message: 'O telefone é obrigatório!' })
        }

        if (!password) {
            res.status(422).json({ message: 'A senha é obrigatório!' })
        }

        if (!confirmpassword) {
            res.status(422).json({ message: 'A confirmação de senha é obrigatório!' })
        }

        if (password !== confirmpassword) {
            res.status(422).json({ message: "As senhas precisam ser iguais, favor digitar novamente" })
        }

        //check if user exists
        /*const userExist = await supabase
        .from('Users')
        .select('*')
        .eq('email', email)
        .single();

        if (userExist) {
            res.status(422).json({ message: 'Email já existe, favor cadastrar outro email'})
        }
        return*/

        //Create password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = bcrypt.hash(password, salt)

        //Create user (novo objeto)

        const newUser = {
            name: name,
            email: email,
            phone: phone,
            password: passwordHash
        }

        User.createUser(newUser)

    }

}