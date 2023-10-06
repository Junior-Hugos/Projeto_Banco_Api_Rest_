const express = require('express');
const route  = require('./router/route');
const server = express();

server.use(express.json());
server.use(route);

server.listen(3000, () => console.log('O servidor está rodando na porta 3000!'));