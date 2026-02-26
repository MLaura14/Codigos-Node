/*Neste código o usuário digita dois valores de sua compra, o programa faz 
a soma, e diz ao usuário se ele pode ou não efetuar a compra!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a;
let b;

rl.question("Digite o primeiro valor: ", (input) => {
  a = parseInt(input);

  rl.question("Digite o segundo valor: ", (input) => {
    b = parseInt(input);

     if (isNaN(a) || isNaN(b)) {
      console.log("Valor inválido");
    } else {
      let soma = a + b;
      console.log("Soma:", soma);

      if (soma > 100) {
        console.log("Limite ultrapassado, compre na próxima vez :(");
      } else {
        console.log("Dentro do limite, pode comprar! :)");
      }
    }
    rl.close();
  });
});
