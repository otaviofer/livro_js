/**
 * Entrada: Ler o nome e o número de uma fruta
 * Processamento: repetir a exibição do nome da fruta de acordo com o número informado
 * Saída: mostrar na tela o número de frutas separando com "*"
 */

const prompt = require("prompt-sync")();

console.log("\n/****** Programa Repete Fruta ******/ \n");
console.log("--------------------------------------\n");

const fruta = prompt("Insira uma fruta: ");
const num = Number(prompt("Nº de frutas: "));

let imprime = "";

for (let i=1; i <= num; i++){
    if(i <= num) {
        imprime += fruta;
        if (i < num){
            imprime += " * ";
        }
    }
}
console.log(imprime);

