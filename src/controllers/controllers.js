const { contas, depositos, saques, transferencias}  = require('../dados/bancodedados');
const {format} = require('date-fns');

let novoNumero = 1;

const listarContas = (req, res) => {
    return res.json(contas);
}

const criarContas = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (contas.some((conta) => conta.usuario.cpf === cpf) || contas.some((conta) => conta.usuario.email === email)) {
        return res.status(400).json({ mensagem: 'O CPF ou Email já existe em outra conta!' });
    }

    if (!nome || nome === " "){
        return res.status(400).json({mensagem: 'Informe o nome, Não pode ser vazio, O nome é obrigatório!' });
    } 
    if(!cpf || cpf === " "){
        return res.status(400).json({mensagem: 'Informe o sobrenome, Não pode ser vazio, O cpf é obrigatório!' });
    }
 
    if(!data_nascimento || data_nascimento === " "){
        return res.status(400).json({mensagem: 'informe o curso, Não pode ser vazio, O data de nascimento é obrigatório!' });
    }

    if(!telefone || telefone === " "){
        return res.status(400).json({mensagem: 'informe o curso, Não pode ser vazio, O telefone é obrigatório!' });
    }
    
    if(!email || email === " "){
        return res.status(400).json({mensagem: 'informe o curso, Não pode ser vazio, O email é obrigatório!' });
    }
    
    if(!senha || senha === " "){
        return res.status(400).json({mensagem: 'informe o curso, Não pode ser vazio, O senha é obrigatório!' });
    }
    

    const novaConta = {
        numero: (novoNumero++).toString(),
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    };
   
    contas.push(novaConta);

    return res.status(201).json();
}

const atualizarContas = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    const numeroConta = req.params.numeroConta;
        const contaExistente = contas.find((conta) => conta.numero === numeroConta);
    
        if (!contaExistente) {
            return res.status(404).json({ mensagem: 'Não existe usuário a ser atualizado para o número de conta informado.' });
        }
        
        if (contas.some((conta) => conta.usuario.cpf === cpf)) {
            return res.status(400).json({ mensagem: 'O CPF informado já existe cadastrado!' });
        }


        if (nome) {
            contaExistente.usuario.nome = nome;
        }
    
        if (cpf) {
            contaExistente.usuario.cpf = cpf;
        }
    
        if (data_nascimento) {
            contaExistente.usuario.data_nascimento = data_nascimento;
        }
    
        if (telefone) {
            contaExistente.usuario.telefone = telefone;
        }
    
        if (email) {
            contaExistente.usuario.email = email;
        }
    
        if (senha) {
            contaExistente.usuario.senha = senha;
        }  
     
        return res.status(201).json(contaExistente);
}
const deletarConta = (req, res) => {
    const { numeroConta } = req.params;
    
    const contaExistente = contas.find((conta) => conta.numero === numeroConta);

    if (!contaExistente) {
        return res.status(404).json({ mensagem: "Conta não encontrada." });
    }

    if (contaExistente.saldo !== 0) {
        return res.status(400).json({ mensagem: "A conta só pode ser removida se o saldo for zero!" });
    }

    const contaIndex = contas.indexOf(contaExistente);
    contas.splice(contaIndex, 1);

    return res.status(204).json();
}

const depositoNaConta = (req, res) => {
    const { numeroConta, valor } = req.body;  

    if (!numeroConta || numeroConta === " "){
        return res.status(400).json({mensagem: 'Informe o número da conta, O número da conta é obrigatório!' });
    } 

    const contaExistente = contas.find((conta) => conta.numero === numeroConta);

    if (!contaExistente) {
        return res.status(404).json({ mensagem: "Conta não encontrada." });
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: "Depósito não efetuado! Valor inválido." });
    }

    contaExistente.saldo += valor;
    const deposito = {
        data: format(new Date(), 'dd-MM-yyyy HH:mm:ss'),
        numeroConta,
        valor
    }
    
 depositos.push(deposito);

 return res.json(deposito);

}

const sacarValorConta = (req, res) => {
    const { numeroConta, valor } = req.body;

    if (!numeroConta || numeroConta === " ") {
        return res.status(400).json({ mensagem: 'Informe o número da conta, O número da conta é obrigatório!' });
    }

    if (!valor || valor <= 0) {
        return res.status(400).json({ mensagem: 'Informe um valor válido para saque!' });
    }

    const contaExistente = contas.find((conta) => conta.numero === numeroConta);

    if (!contaExistente) {
        return res.status(404).json({ mensagem: "Conta não encontrada." });
    }

    if (valor > contaExistente.saldo) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente para o saque!' });
    }

    contaExistente.saldo -= valor;

    const saque = {
        data: format(new Date(), 'dd-MM-yyyy HH:mm:ss'),
        numeroConta,
        valor
    };

    saques.push(saque);  

    return res.json(saque);
}

const transferenciasEntreContas = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor } = req.body;

    if (!numero_conta_origem || numero_conta_origem === " ") {
        return res.status(400).json({ mensagem: 'Informe o número da conta origem, O número da conta origem é obrigatório!' });
    }

    if (!numero_conta_destino || numero_conta_destino === " ") {
        return res.status(400).json({ mensagem: 'Informe o número da conta destino, O número da conta destino é obrigatório!' });
    }

    if (!valor || valor <= 0) {
        return res.status(400).json({ mensagem: 'Informe um valor válido para transferência!' });
    }

  
    const contaDeOrigem = contas.find((conta) => conta.numero === numero_conta_origem);

    if (!contaDeOrigem) {
        return res.status(404).json({ mensagem: "Conta de origem não encontrada." });
    }

   
    const contaDeDestino = contas.find((conta) => conta.numero === numero_conta_destino);

    if (!contaDeDestino) {
        return res.status(404).json({ mensagem: "Conta de destino não encontrada." });
    }

    if (valor > contaDeOrigem.saldo) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente para transferência!' });
    }

    contaDeOrigem.saldo -= valor;   
    contaDeDestino.saldo += valor;

    const transferencia = {
        data: format(new Date(), 'dd-MM-yyyy HH:mm:ss'),
        numero_conta_origem,
        numero_conta_destino,
        valor
    };

transferencias.push(transferencia);

    return res.json(transferencia);
}

const consultarSaldoConta = (req, res) => {
    const { numeroConta, senha } = req.query;
    
    if (!numeroConta || !senha) {
        return res.status(400).json({ mensagem: "Número da conta e senha são obrigatórios." });
    }

    const contaExistente = contas.find((conta) => conta.numero === numeroConta);

    if (!contaExistente) {
        return res.status(404).json({ mensagem: "Conta bancária não encontrada." });
    }

    const saldo = contaExistente.saldo;
    
    return res.json({saldo});
}

const consultarExtratoConta = (req, res) => {
    const { numeroConta, senha } = req.query;
    
    if (!numeroConta || !senha) {
        return res.status(400).json({ mensagem: "Número da conta e senha são obrigatórios." });
    }

    const contaExistente = contas.find((conta) => conta.numero === numeroConta);
    
    if (!contaExistente) {
        return res.status(404).json({ mensagem: "Conta bancária não encontrada." });
    }

    const extrato = {
        depositos: depositos.filter((deposito) => deposito.numeroConta === numeroConta),
        saques: saques.filter((sacar) => sacar.numeroConta === numeroConta),
        transferenciasEnviadas: transferencias.filter((transferencia) => transferencia.numero_conta_origem  === numeroConta ),
        transferenciasRecebidas: transferencias.filter((transferencia) => transferencia.numero_conta_destino === numeroConta)
    };       
  
    return res.json(extrato);
}

module.exports = {
    listarContas,
    criarContas,
    atualizarContas,
    deletarConta,
    depositoNaConta,
    sacarValorConta,
    transferenciasEntreContas,
    consultarSaldoConta,
    consultarExtratoConta
}