const { Schema, model } = require("mongoose");

//Const para dizer o que vai ser usado para fazer o login
const UserSchema = new Schema({
    email: String
});

module.exports = model('User', UserSchema);