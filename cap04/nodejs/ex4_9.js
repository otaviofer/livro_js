/**
 * Entrada: Ler um número (que deve ser uma centena)
 * processamento: Calcular a centena invertida
 * Saída: Exibir o valor final, se o numero não for uma centena, exibir na tela
 */

const prompt = require("prompt-sync")();    // adiciona pacote
const num = Number(prompt("Número (centena): "));   // entrada
if (num < 100 || num >= 1000) {
    console.log("Erro... o número deve ser uma centena: 000 (3 dígitos)");
    return;
}

const  num1 = Math.floor(num/100);  // obtém o 1º número
const sobra = num%100;              // o que sobra (dezena)
const num2 = Math.floor(sobra/10);  // obtém 2º número
const num3 = sobra%10;              // obtém 3º número
console.log(`Invertido: ${num3}${num2}${num1}`);    // exibe o número invertido