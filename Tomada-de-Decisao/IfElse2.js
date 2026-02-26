/*Este código mostra o valor total em Kg da compra do usuário em uma pescaria, 
com base no valores por quilos pré estabelcidos!*/

const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("Coloque aqui o peso em Kg do seu peixe pescado: ", (input) =>{
   let pesoPeixe = parseFloat(input);
   let precoKg;
   let total;

   if (isNaN(pesoPeixe) || pesoPeixe <= 0) {
    console.log("Peso inválido");

  } else if (pesoPeixe <= 3) {
    precoKg = 25;
    total = pesoPeixe * precoKg;

  } else if (pesoPeixe <= 5) {
	precoKg = 24;
	total = pesoPeixe * precoKg;

  } else if (pesoPeixe <= 10) {
	precoKg = 23;
	total = pesoPeixe * precoKg;

  } else {
	precoKg = 20;
	total = (pesoPeixe * precoKg) + 30;
  }
        
   if (!isNaN(total)) {
    console.log("O Valor total da sua compra de peixe vai ser de: R$ ", total.toFixed(2));
   }
   
   rl.close();
});
