/*Neste código o usuário digita o preço do produtos e a quantidade,
e asim ele ve se sua compra é grande ou pequena!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let preco;
let quantidade;

rl.question("Preço do produto: ", (input) => {
  preco = parseFloat(input);

  rl.question("Quantidade: ", (input) => {
    quantidade = parseInt(input);

     if (isNaN(preco) || isNaN(quantidade) || preco <= 0 || quantidade <= 0) {
      console.log("Informação inválida");
    } else {
      let total = preco * quantidade;
      console.log("Total:", total);

      if (total >= 300) {
        console.log("Compra grande!");
      } else {
        console.log("Compra simples!");
      }
    }
    rl.close();
  });
});
