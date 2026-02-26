/*Neste código o usuário digita dois números e vê ao final 
a multiplicação de ambos!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a;
let b;

rl.question("Digite o primeiro número: ", (input) => {
  a = parseInt(input);

  rl.question("Digite o segundo número: ", (input) => {
    b = parseInt(input);

    let resultado = a * b;
    console.log("O Resultado da multiplicação é:", resultado);

    rl.close();
  });
});
