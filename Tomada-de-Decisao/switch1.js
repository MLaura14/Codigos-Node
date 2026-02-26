//o codigo abaixo mostra um menu, recebe uma opção digitada pelo usuário e usa switch case para executar uma ação diferente conforme o número escolhido
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== MENU ===");
console.log("1 - Olá");
console.log("2 - Tudo bem?");
console.log("3 - Sair");

rl.question("Escolha uma opção: ", function(opcao) {

  switch (parseInt(opcao)) {
    case 1:
      console.log("Olá, seja bem-vindo!");
      break;

    case 2:
      console.log("Espero que você esteja bem!");
      break;

    case 3:
      console.log("Saindo do programa...");
      break;

    default:
      console.log("Opção inválida!");
  }

  rl.close();
});
