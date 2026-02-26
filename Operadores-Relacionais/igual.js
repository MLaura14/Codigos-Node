/*Neste programa, estamos dentro de um sitema de um confre que só abre com
a senha correta!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let senha;
let senhaCorreta = 1408;

rl.question("Por favor, insira a senha do Cofre:", (input) => {
  let senha = parseInt(input);

  if (senha == senhaCorreta) {
    console.log("Cofre aberto com sucesso!");

  } else {
    console.log("Senha incorreta. Acesso negado :(");
    
  }

  rl.close();
});
