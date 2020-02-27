'use strict'

const advapp = require('../src/advapp');
const http = require('http');
const debug = require('debug')('node.str:server');

// Variáveis disponíveis nas aplicações cloud (process.env.port)
const port = normalizePort(process.env.PORT || '3000');
advapp.set('port', port);

const server = http.createServer(advapp);

// Eventos do servidor
server.listen(port);
server.on('error', onError);
server.on('listening', onListening)

console.log('API Rodando na porta ' + port);

// Função p/ Normalização da porta
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// Função p/ Tratamento de Erro
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' Você necessita de maiores privilégios');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' o endereço de rede já está sendo utilizado');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Função p/ Debug
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}