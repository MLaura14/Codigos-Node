//o codigo abaixo mostra um menu com os numeros e o usuario escolhe, assim mostrando o nome do dia da semana
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número de 1 a 7: ", function(dia) {

  switch (parseInt(dia)) {
    case 1:
      console.log("Domingo");
      break;

    case 2:
      console.log("Segunda-feira");
      break;

    case 3:
      console.log("Terça-feira");
      break;

    case 4:
      console.log("Quarta-feira");
      break;

    case 5:
      console.log("Quinta-feira");
      break;

    case 6:
      console.log("Sexta-feira");
      break;

    case 7:
      console.log("Sábado");
      break;

    default:
      console.log("Número inválido!");
  }

  rl.close();
});
