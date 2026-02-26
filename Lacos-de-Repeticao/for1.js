// o codigo abaixo cria uma estrutura de repetiçao para calcular a tabuada
const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 //mostra a pergunta e a espera da resposta do usuario
rl.question('Entre com o número: ', (input) => {
  const n = parseInt(input);
  //verifica se o numero é valido
  if (isNaN(n)) {
    console.log('Por favor, digite um número válido.');
    rl.close();
    return;
  }
 
  for (let i = 1; i <= 10; i++) {
    const r = i * n;
    console.log(`${i} x ${n} = ${r}`);
  }
 
  rl.close();
});
