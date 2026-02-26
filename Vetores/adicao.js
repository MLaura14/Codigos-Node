//o codigo abaixo ler os valores do A e B ,soma posiçao por posiçao e mostra o vetor C com o resultado das somas
const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
const TAM = 5;
let a = new Array(TAM);
let b = new Array(TAM);
let c = new Array(TAM);
 
let i = 0;
 
//ler o vetor A
function lerVetorA() {
  if (i < TAM) {
    rl.question(`Digite o ${i + 1}º valor do vetor A: `, (valor) => {
      a[i] = parseInt(valor);
      i++;
      lerVetorA();
    });
  } else {
    i = 0;
    lerVetorB();
  }
}
 
//ler o vetor B
function lerVetorB() {
  if (i < TAM) {
    rl.question(`Digite o ${i + 1}º valor do vetor B: `, (valor) => {
      b[i] = parseInt(valor);
      i++;
      lerVetorB();
    });
  } else {
    somarVetores();
  }
}
 
//somar os vetores
function somarVetores() {
  for (let j = 0; j < TAM; j++) {
    c[j] = a[j] + b[j];
  }
 
  console.log("\nVetor C (soma):");
  for (let j = 0; j < TAM; j++) {
    process.stdout.write(c[j] + " ");
  }
 
  rl.close();
}
 
//Inicia o programa
lerVetorA();
