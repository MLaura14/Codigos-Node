/*O código abaixo pede ao usuário que digite 5 números inteiros, 
assim ao final ele mostra, dos números digitados pelo usuário, o total de negativos, poisitivos
zeros, ímpares e pares!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 1;

let totalPares = 0;
let totalImpares = 0;
let totalPositivos = 0;
let totalNegativos = 0;
let totalZero = 0;

console.log(`Digite o ${contador}º número inteiro:`);

rl.on("line", (input) => {
  let numero = parseInt(input);

  // par ou ímpar
  if (numero % 2 === 0) {
    totalPares++;
  } else {
    totalImpares++;
  }

  // positivo, negativo ou zero
  if (numero > 0) {
    totalPositivos++;
  } else if (numero < 0) {
    totalNegativos++;
  } else {
    totalZero++;
  }

  do {
    contador++;
  } while (false); // executa uma vez, como no Javinha

  if (contador <= 5) {
    console.log(`Digite o ${contador}º número inteiro:`);
  } else {
    console.log("Total de Pares:", totalPares);
    console.log("Total de Ímpares:", totalImpares);
    console.log("Total de Positivos:", totalPositivos);
    console.log("Total de Negativos:", totalNegativos);
    console.log("Total de Zero:", totalZero);
    rl.close();
  }
});
