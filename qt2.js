/*. Considerando um número inteiro digitado pelo usuário, calcular e exibir o
valor da sua fatorial. Por exemplo, se o usuário digitar 4, temos que a fatorial
é 4 x 3 x 2 x 1, isto é, 24.*/

import readline from "readline"

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question("Digite o valor inteiro!: ", (valor) => {
    var valorFixo = parseInt(valor)
    var valorVariavel = parseInt(valor)
    var valorFinal = 0
    while (valorVariavel > 0) {
        valorVariavel = valorVariavel -1
        var fatorar = parseInt(valorFixo) * parseInt(valorVariavel)
        valorFinal = valorFinal + fatorar    }
    console.log("Valor Fatorado: " + parseInt(valorFinal));
  });
