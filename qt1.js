/*A partir dos lados de um retângulo ou quadrado, digitados pelo usuário,
elaborar uma aplicação que calcule e exiba o valor da área da figura e
informe se esta é um retângulo ou um quadrado. Lembrando que a área é
obtida pela multiplicação da base (L) pela altura (A)*/

import readline from "readline"

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question("Digite o valor, em cm, da base do objeto: ", (valor1) => {
  teclado.question("Digite o valor, em cm, da altura do objeto: ", (valor2) => {
    var area = parseInt(valor1) * parseInt(valor2);
    if (valor1 == valor2) {
        var forma = "Quadrado"
    } else  {
        var forma = "Retângulo"
    }
    console.log("Esse objeto é um " + forma + " e área desse objeto é :" + area + " cm²!");
  });
});
