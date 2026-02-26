/*O codigo abaixo diz se o aluno, baseado em sua nota está aprovado ou reprovado!*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a nota do Aluno: ", (input) => {
  let nota = parseFloat(input);

  if (nota >= 6) {
    console.log("Aluno Aprovado! Glória:)");

  } else {
    console.log("Aluno Reprovado :(");
    
  }

  rl.close();
});
