/*Neste código o usuário digita uma base, e ao final vê
a pontenciação elevada ao quadrado dessa base digitada pelo mesmo!*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numero;

rl.question("Digite um número: " , (input) => {
   numero = parseFloat(input);

     let resultado = Math.sqrt(numero);
    
      console.log("A raiz quadrada é:", resultado);

    rl.close();
});
