/*Neste código o usuário digita 2 números, e assim o programa faz a 
subtração e diz se o resultado é válido ou inválido!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let x;
let y;

rl.question("Digite o primeiro número: ", (input) => {
  x = parseInt(input);

  rl.question("Digite o segundo número: ", (input) => {
    y = parseInt(input);

     if (isNaN(x) || isNaN(y)) {
      console.log("Valor inválido");
    } else {
      let resultado = x - y;

      if (resultado < 0) {
        console.log("Resultado inválido: ", resultado);
      } else {
        console.log("Resultado Válido: ", resultado);
      }
    }
    rl.close();
  });
});
