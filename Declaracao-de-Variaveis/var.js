/*Neste código o usuário coloca a quantidade de seu estoque e quantidade vendida
assim o programa mostra a situação do estoque e os produtos restantes! */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var estoque;
var vendida;

rl.question("Quantidade em estoque: ", (input) => {
  estoque = parseInt(input);

  rl.question("Quantidade vendida: ", (input) => {
    vendida = parseInt(input);

    var restante = estoque - vendida;
    console.log("Produtos restantes: ", restante);

     if (isNaN(restante) || restante < 10) {
      console.log("Situação: Estoque baixo");
    } else {
      console.log("Situação: Estoque normal");
    }
    rl.close();
  });
});
