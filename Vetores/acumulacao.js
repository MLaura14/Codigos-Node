/*Neste programa, entramos em um caixa de supermercado de autoatendimento,
assim o usuário digita os valores dos produtos e ve quanto tem que pagar ao final!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let precos = [];
let total = 0;
let i = 0;

console.log(`Digite o preço do seu ${i + 1}º produto:`);

rl.on("line", (input) => {
  let preco = parseFloat(input);

  if (isNaN(preco)) {
    console.log("Digite um valor válido (Faça assim, ex: 10.50)");
    return;
  }

  precos[i] = preco;
  total += preco;
  i++;

  if (i < 5) {
    console.log(`Digite o preço do seu ${i + 1}º produto:`);
  } else {
    console.log(`O Valor total da sua compra é de: R$ ${total.toFixed(2)}`);
    rl.close();
  }
});
