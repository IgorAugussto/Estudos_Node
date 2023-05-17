//Fazer todas as configuração e configurar o express
//Para usar esse tipo de import é necessario baixar lib sucrase
const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const routes = require('./router');
const uri = "mongodb+srv://devhouse:devhouse@devhouse.n11mpss.mongodb.net/?retryWrites=true&w=majority";

//Essa classe segue a mesma ideia de orientação a objetos, assim como o construtor que está dentro
class App {

  constructor() {
    //This está referenciando o App, ou seja, o App está recebendo o express
    this.server = express();

    //Conexão o banco de dados mongo
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    //Necessario colocar os metodos no construtor para que ele carregue junto quando o App for chamado
    this.middlewares();
    this.routes();
  }

  

  //Metodos
  middlewares() {

  }

  routes() {
    //Chamando o arquivo routes para o App
    this.server.use(routes);
  }
}

//Exportando a classe
module.exports = new App().server;