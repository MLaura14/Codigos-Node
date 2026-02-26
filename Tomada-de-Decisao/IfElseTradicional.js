//o codigo abaixo mostra a idade do usuario conforme o numero que ele escolher
const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));
//como aqui ha mais condições entao ele se transforma num ifElse tradicional
if (idade <= 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else if (idade <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
