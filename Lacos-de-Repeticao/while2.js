//O código abaixo mostra os números pares de 1 até 500!//

let i = 1;

while (i <= 500) {
  if (i % 2 === 0) {
    process.stdout.write(i + ", ");
  }
  i++;
}
