# Projeto Api Rest de um Banco 

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Junior-Hugos/Projeto-Site/blob/main/LICENSE)

# Sobre o Projeto


Descrição do Projeto:

Este projeto se trata de um sistema bancário desenvolvido em Node.js com o framework Express. Ele permite a criação, atualização e exclusão de contas bancárias, além de permitir depósitos, saques e transferências entre contas. Também é possível consultar o saldo e extrato de uma conta. O projeto inclui validações de senha em diferentes níveis de autenticação para garantir a segurança das operações.

Principais Funcionalidades:

Criação de contas bancárias com validações de CPF e e-mail únicos.
Atualização de informações de conta.
Exclusão de contas com saldo zero.
Realização de depósitos.
Saques com validações de saldo suficiente.
Transferências entre contas.
Consulta de saldo e extrato de contas.

Segurança:

O projeto inclui validações de senha em diferentes níveis para proteger as operações. São utilizadas senhas do banco, senhas de usuários e senhas de consultas.

Estrutura do Código:

O código está dividido em módulos, com controllers que lidam com a lógica de negócios e middlewares que executam validações. O projeto utiliza um banco de dados fictício em memória para armazenar as informações das contas, depósitos, saques e transferências.

# Passos para Executar a Aplicação com Express, date-fns e Nodemon

Pré-requisitos:

Certifique-se de ter o Node.js instalado em seu sistema.

Instalação de Dependências:

Navegue até a pasta raiz do projeto no terminal.
Execute npm install para instalar as dependências do projeto, incluindo o Express, date-fns e nodemon.

Iniciar o Servidor com Nodemon:

Execute npm run dev para iniciar o servidor com nodemon. Certifique-se de que você configurou o script "dev" em seu arquivo package.json para executar o servidor com o nodemon.

Teste as Funcionalidades:

Use um cliente HTTP (como Postman) ou o navegador para testar as funcionalidades da aplicação como mencionado anteriormente.

Persistência de Dados (Opcional):

Se desejar persistência de dados em um banco de dados real, configure um banco de dados e ajuste o código conforme necessário.

Segurança:

A aplicação já inclui validações de senha em diferentes níveis de autenticação. Certifique-se de ajustar essas configurações de segurança de acordo com as necessidades do projeto real.

# Tecnologias utilizadas
![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117)&nbsp;
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)


  

# Autor

<h3>Edmilson Junior</h3>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-357?style=for-the-badge&logo=linkedin&logoColor=ffff)](https://www.linkedin.com/in/edmilsonjunior87/)
