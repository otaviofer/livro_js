/*
    Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta
    o nº máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. 
    Considere as  seguintes condições: a) cada parcela deve ser de, no mínimo R$20,00; b) o
    número máximo de parcelas permitido é 6.
*/

const prompt = require("prompt-sync")();    // adiciona pacote prompt-sync
const valor = Number(prompt("Valor da compra R$: "));   // lê o valor da compra
const aux = Math.floor(valor/20);    // aux = nº de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;  // operador ternário
const valorParcela = valor / parcelas;  // cálculo do valor da parcela
console.log(`pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);