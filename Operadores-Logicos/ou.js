/*Neste programa, estamos dentro de um sitema de um cinema
e nele, o usuario digita se é estudante ou não e a sua idade, e vê qual é o seu
tipo de entrada!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let idade;
let estudante;

rl.question("Digite sua Idade: ", (input) => {
  idade = parseInt(input);

  rl.question("Você é estudante? (1 = sim, 0 = não): ", (input) => {
    estudante = parseInt(input);

    if (idade >= 60 || estudante == 1) {
    console.log("Entrada liberada gratuitamente!");

  } else {
    console.log("Entrada Paga!");
    
  }

    rl.close();
  });
});
