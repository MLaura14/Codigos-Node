//O codigo abaixo só permite dirigir se for maior de idade e tiver carteira.
let idade = 20;
let temCarteira = true;
//o E serve para garantir que duas regras sejam atendidas ao mesmo tempo antes de permitir dirigir.
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}
