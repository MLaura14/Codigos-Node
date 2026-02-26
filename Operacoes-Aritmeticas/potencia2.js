/*Neste código o usuário digita uma base, e ao final vê
a pontenciação elevada ao expoente que ele define e vê se o resultado,
é um valor alto ou baixo!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let base;
let expo;

rl.question("Digite a base: ", (input) => {
  base = parseInt(input);

  rl.question("Digite o expoente: ", (input) => {
    expo = parseInt(input);

     if (isNaN(base) || isNaN(expo)) {
      console.log("Informação inválida");
    } else {
      let resultado = Math.pow(base, expo);
      console.log("Resultado:", resultado);

      if (resultado > 50) {
        console.log("Valor considerado: Alto!");
      } else {
        console.log("Valor considerado: Baixo!");
      }
    }
    rl.close();
  });
});
