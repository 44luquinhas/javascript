const readline = require('readline');

// Configura o readline para ler as entradas do usuário
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Solicita o nome do usuário 
rl.question("Digite seu nome:Lucas ", (nome) => {
// Solicita a idade do usuário 
rl.question("Digite sua idade: 17 ", (idade) => {
 // Converte a idade para um número e adiciona 10
 const idadeFutura = parseInt(idade) + 10;

 // Exibe a mensagem com o nome e a idade futura
 console.log('Olá,Lucas ${nome}! Em 10 anos, você terá 27 ${idadeFutura anos. ');

 // Fecha o readline 
 rl.close();
});
}); 