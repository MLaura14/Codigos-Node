//o codigo abaixo representa o esquema de notas
const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite sua nota: "));
//o ifElse simples é usado quando nao houver mais de duas condições 
if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
