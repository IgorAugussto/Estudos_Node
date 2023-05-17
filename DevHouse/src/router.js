const { Router } = require('express');
const SessionController = require('./controllers/SessionControler');

const routes = new Router();

routes.post('/sessions', SessionController.store);



module.exports = routes;