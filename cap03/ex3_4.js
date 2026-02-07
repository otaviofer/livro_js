/*
    Entrada: Ler o peso de uma ração em kg e quanto um gato consome em gramas/dia
    Processamento: Calcular quantos dias irá durar a ração e quanto sobra da ração em gramas
    Saída: Informar o número de dias e a quantidade de ração que sobrou.
*/

const prompt = require("prompt-sync")();    // adiciona pacote ao programa
const pesoKg = Number(prompt("Informe ração(KG): "));   // entrada de dados
const consumoGr = Number(prompt("Informe o consumo diário(gr): "));

const pesoGr = pesoKg*1000;                     // calcula variável auxiliar pesoGr

const duracao = Math.floor(pesoGr/consumoGr);   // calculo das respostas
const sobra = pesoGr%consumoGr;
console.log(`Duração: ${duracao} dias.`);       // saída de dados
console.log(`Sobras: ${sobra}gr`);

/*
    Operação,O que faz no código
    * 1000,Transforma KG em Gramas.
    Math.floor(),Garante apenas os dias inteiros (ignora quebrados).
    %,Pega a sobra (gramas que restaram no pote).

    1) A Conversão de Unidades: Para que a conta dê certo, as unidades devem ser iguais.
    Como o consumo do gato é em gramas, precisamos converter o saco de ração
    (que está em kg) para gramas.Multiplicamos por $1000$ porque $1\text{ kg} = 1000\text{ g}$.

    2) O Cálculo da Duração (Divisão Inteira): Aqui dividimos o total de ração pelo quanto o gato come por dia.
    O Math.floor() é a peça chave: ele arredonda o resultado sempre para baixo.
    Por que? Se a conta der $7,8$ dias, significa que o gato comeu bem por 7 dias,
    mas no 8º dia a ração acaba antes da janta. Logo, a ração dura apenas 7 dias completos.

    3) O Cálculo da Sobra (Operador de Resto): O símbolo % (módulo) não
    calcula porcentagem aqui. Ele pega o resto da divisão.
    Ele verifica quantas vezes o consumoGr cabe inteiramente dentro do pesoGr.
    O que não couber mais (o que "sobrar" no fundo do saco e não for suficiente
    para uma refeição diária completa) é o valor guardado na variável sobra.
*/