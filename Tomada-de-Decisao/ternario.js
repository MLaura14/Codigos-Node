//Neste código o usuário digita como está o sinal de transito e vê os comandos que deve seguir!//

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sinal;
let texto = "mensagem";

rl.question("Digite o sinal (1 = verde, 0 = vermelho): ", (input) => {
  sinal = parseInt(input);

    mensagem = (sinal == 1) ? "Pode passar! :)" : "Pare!!!!";

    console.log(mensagem);

    rl.close();
  });
