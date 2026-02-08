/*
    Entrada: Ler número de pessoas de uma família e quantidade de peixes obtidos num pesque pague
    Processamento: Caucular o valor a pagar por familia (entrada R$20/pessoa - direito a 1 un por pessoa - Peixe-extra R$12/()
    Saída: Informar o valor a pagar
*/

const prompt = require("prompt-sync")();    // adiciona pacote prompt-sync
const pessoas = Number(prompt("Nº de pessoas: "));  // entradas
const peixe = Number(prompt("Nº de peixes: "));

let pagar;  // declara variavel pagar
if (peixe <= pessoas){      // condição definida para (R$20/pessoa e R$12/peixe 1 por pessoa) processamento
    pagar = pessoas * 20;
}else{
    pagar = (pessoas * 20) + ((peixe - pessoas) * 12);
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`);   // saída

/**
 * Lógica: if (peixe <= pessoas)
           for falso, ou seja, quando a quantidade de peixes é maior que a quantidade de pessoas.
           Isso significa que existem peixes extras.

           Linha 15: Calcula quantos peixes são extras. (peixe - pessoas)
           Porque cada pessoa já tem direito a 1 peixe.
           Então subtraímos os peixes "inclusos".

           ((peixe - pessoas) * 12) Agora calcula o valor dos peixes extras.
 */