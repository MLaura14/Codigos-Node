//Neste programa o professor digita notas de aluno e adiciona um bonus de um ponto!//
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];
let contador = 0;

function lerNotas() {
  if (contador < 3) {
    rl.question(`Digite a nota do aluno ${contador + 1}: `, (input) => {
      notas.push(parseFloat(input));
      contador++;
      lerNotas();
    });
  } else {
    aplicarBonus();
  }
}

function aplicarBonus() {

  let notasComBonus = notas.map(nota => nota + 1);

  console.log("Notas com bônus:");
  notasComBonus.forEach(nota => {
    console.log(nota);
  });

  rl.close();
}

lerNotas();
