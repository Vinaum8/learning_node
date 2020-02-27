'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const advapp = express();
const router = express.Router();

//Conexão com o banco de dados
// .connection(config.connectionString)

// Carrega os models da aplicação


// Carrega as rotas da aplicação
const indexRoutes = require('./routes/index-routes');
const peoplesRoutes = require('./routes/peoples-routes');
const businessRoutes = require('./routes/business-routes');
const juridicalProcessRoutes = require('./routes/juridical-process-routes');

advapp.use(bodyParser.json({
    limit: '5mb'
}));

advapp.use(bodyParser.urlencoded({ 
    extended: false 
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

advapp.use('/', indexRoutes);
advapp.use('/peoples', peoplesRoutes);
advapp.use('/business', businessRoutes);
advapp.use('/juridical-process', juridicalProcessRoutes);

module.exports = advapp;