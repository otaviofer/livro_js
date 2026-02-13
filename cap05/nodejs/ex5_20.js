/**
 * Elaborar um programa para uma loja que leia o valor deuma conta e o número
 * de vezes que um cliente deseja parcelar esse valor (em boletos ou carnê). Para
 * facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos,
 * ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada
 * parcela, considerando essa situaçãoç.
 */

const prompt = require("prompt-sync")();
console.log("Programa Cálculo das Parcelas");
console.log("-----------------------------");
const valor = Number(prompt("Valor R$: "));     // entradas
const num = Number(prompt("Nº de parcelas: "));
const valorParcelas = Math.floor(valor/num);    // cálcula o valor sem decimais
const valorFinal = valorParcelas + (valor%num); // cálcula parcela final
for (let i=1; i<num; i++){                      // enquanto i < num
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`);
}
console.log(`${i}ª parcela: R$ ${valorFinal.toFixed(2)}`);  // última parcela