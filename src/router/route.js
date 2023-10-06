const express = require('express');
const { listarContas, criarContas, atualizarContas, deletarConta, depositoNaConta, sacarValorConta, transferenciasEntreContas, consultarSaldoConta, consultarExtratoConta } = require('../controllers/controllers');
const {validaSenha, senhaUsuario1, senha } = require('../middlewares/validacoes');

const route = express();


route.get('/contas',validaSenha, listarContas);
route.post('/contas', criarContas);
route.put('/contas/:numeroConta/usuario', atualizarContas );
route.delete('/contas/:numeroConta', deletarConta );
route.post('/transacoes/depositar', depositoNaConta);
route.post('/transacoes/sacar', senhaUsuario1, sacarValorConta);
route.post('/transacoes/transferir', senhaUsuario1, transferenciasEntreContas);
route.get('/contas/saldo', senha, consultarSaldoConta);
route.get('/contas/extrato', senha, consultarExtratoConta);


module.exports = route;