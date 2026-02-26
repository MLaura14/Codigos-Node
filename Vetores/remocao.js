//o codigo abaixo o Percorre o vetor procurando o valor, e quando encontrado é removido
let numeros = [10, 20, 30, 40, 50];
let remover = 10;
    //indexOf procura o valor e retorna
let indice = numeros.indexOf(remover);
//verifica se o elemento foi encontrado no vetor.
if (indice !== -1) {
    //splice é usado para remover ou alterar
    numeros.splice(indice, 1);
    console.log("Elemento removido!");
} else {
    console.log("Elemento não encontrado!");
}

console.log(numeros);
