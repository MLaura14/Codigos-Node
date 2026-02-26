/*Neste código o usuário digita idade de 5 pessoas, e vê ao final o total de 
menores e maiores de idade!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 1;
let totalMenor = 0;
let totalMaior = 0;

console.log("Digite a idade da 1º pessoa:");

rl.on("line", (input) => {
  let idade = parseInt(input);

  while (true) {
    if (isNaN(idade) || idade <= 0) {
      console.log("Idade inválida. Digite novamente:");
      break;
    }

    if (idade >= 18) {
      totalMaior++;
    } else {
      totalMenor++;
    }

    contador++;

    if (contador <= 5) {
      console.log(`Digite a idade da ${contador}º pessoa:`);
    } else {
      console.log("Total de Maiores de idade é:", totalMaior);
      console.log("Total de Menores de idade é:", totalMenor);
      rl.close();
    }

    break;
  }
});
