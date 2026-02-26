//o codigo abaixo compara cada posição com o valor procurado.Quando encontra Mostra a posição.
let numeros = [10, 20, 30, 40, 50];
let procurado = 40;
let encontrou = false;
//Laço de repetição
for (let i = 0; i < numeros.length; i++) {
     //Comparação
    if (numeros[i] === procurado) {
        console.log("Valor encontrado na posição:", i);
        encontrou = true;
        break;
    }
}
if (!encontrou) {
    console.log("Valor não encontrado");
}
