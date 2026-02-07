/*
    Entrada: Ler o salário e tempo de um funcionário na empresa
    Processamento: Calcular o número de quadrilenios que o funcionário tem (a cada
                   quadrilenio o funcionário recebe um acréscimo de 1% no salário)
    Saída: Informar o número de quadrilênios que o funcionário tem direito e o salário final.
*/

const prompt = require("prompt-sync")();    // adiciona o pacote ao programa
const salario = Number(prompt("Informe o salário: "));   // lê os dados de entrada
const tempo = Number(prompt("Informe o tempo de empresa: "));

const quadrilenio = Math.floor(tempo/4);        // calcula os quadrilenios
const acrescimos = salario*quadrilenio/100;   // ... e acréscimos

console.log(`Quadrílênios: ${quadrilenio}`);    // exibe as respostas
console.log(`Salário Final R$: ${(salario+acrescimos).toFixed(2)}`);