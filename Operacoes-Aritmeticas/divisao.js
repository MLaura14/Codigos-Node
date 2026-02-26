/*Neste código o usuário digita dois números e vê ao final 
a divisão de ambos e o resto da divisão!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a;
let b;

rl.question("Digite o dividendo: ", (input) => {
   a = parseInt(input);

    rl.question("Digite o divisor: ", (input) => {
       b = parseInt(input);

       let quociente = a / b;
       let resto = a % b;

       console.log("O Resultado da Divisão é:", quociente);
       console.log("E o Resto da divisão é:", resto);

    rl.close();
     });
});
