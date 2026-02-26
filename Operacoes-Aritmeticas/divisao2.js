/*Neste código o usuário digita a quantidade de brindes e de clientes,
para assim o programa calcular quantos brindes vão ser distribuidos e
quantos sobram!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let brindes;
let clientes;

rl.question("Quantidade total de brindes: ", (input) => {
  brindes = parseInt(input);

  rl.question("Quantidade de clientes: ", (input) => {
    clientes = parseInt(input);

     if (isNaN(brindes) || isNaN(clientes) || brindes <= 0 || clientes <= 0) {
      console.log("Informação inválida");
    } else {
      let porCliente = Math.floor(brindes / clientes);
      let sobra = brindes % clientes;

      console.log("Cada cliente recebe:", porCliente, "brindes");
      console.log("Brindes que sobraram:", sobra);
    }
    rl.close();
  });
});
