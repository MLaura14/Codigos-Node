/*Neste programa o usuário coloca o valor do volume de sua caixa e 
vê quais são os cm cúbico, e se sua caixa é grande ou pequena!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let volume;

rl.question("Digite o volume da caixa: ", (input) => {
  volume = parseFloat(input);

     if (isNaN(volume) || volume <= 0) {
      console.log("Volume inválido");
    } else {
      let lado = Math.cbrt(volume);
      console.log("O tamanho aproximado do lado da caixa é: " , lado);

      if (lado >= 10) {
        console.log("Sua Caixa é grande!");
      } else {
        console.log("Sua Caixa é pequena!");
      }
    }
    rl.close();
  })
