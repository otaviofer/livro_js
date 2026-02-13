/**
 * Elaborar um programa que lia o nome de um produto e o número de etiquetas
 * a serem impressas desse produto. Exiba as etiquetas com o nome do produto,
 * com no máximo 2 etiquetas por linha.
 */

const prompt = require("prompt-sync")();
console.log("Programa número de etiquetas.");
console.log("-----------------------------");

const produto = prompt("insira um produto: ");  // entradas
const num = Number(prompt("Nº de etiquetas: "));

// cria laço de repetção até num/2 (pois imprime 2 etiquetas por linha)
for (let i=1; i<=num; i++){
    console.log(`${produto.padEnd(30, ".")} ${produto.padEnd(30, ".")}`)
}
if(num % 2 == 1){           // se quantidade solicitada de etiquetas for impar...
    console.log(produto);   // imprime mais uma etiqueta
}