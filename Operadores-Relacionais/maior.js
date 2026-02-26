/*O codigo abaixo mostra um controle de evento baseado na idade para entrada
de convidados*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite sua idade: ", (input) => {
  let idade = parseInt(input);

  if (idade > 16) {
    console.log("Entrada liberada.");

    } else if (idade == 16) {
    console.log("Entrada permitida com autorização.");

  } else {
    console.log("Entrada não permitida.");
    
  }

  rl.close();
});
