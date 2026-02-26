/*Neste código o usuário digita uma base, e ao final vê
a pontenciação elevada ao quadrado dessa base digitada pelo mesmo!*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let base;

rl.question("Digite a base: " , (input) => {
   base = parseFloat(input);

     let resultado = Math.pow(base, 2);
    
      console.log("O resultado da potência elevada ao quadrado é:", resultado);

    rl.close();
});
