/**
 * Digamos que o número de chinchilhas de uma fazenda triplica a cada ano, após o primeiro ano.
 * Elaborar um programa que leia o número inicial de chinchilhas e anos e informa ano a ano o número
 * médio previsto de chinchilhas da fazenda. O número inicial de chinchilhas deve ser maior ou
 * igual a 2 (um casal).
 * 
 * A Lógica do CálculoValidação: 
 * O número inicial deve ser >= 2.
 * Primeiro Ano: A população é o número inicial.
 * Anos Seguintes: O valor do ano anterior é triplicado (x3).
 */

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numChinchilhas = Number(frm.inNumero.value);
    const anos = Number(frm.inAnos.value);

    // validação de entrada
    if (numChinchilhas < 2){
        alert("A fazenda precisa de pelo menos um casal (2 chinchilas) para começar!");
        return;
    }

    let resposta = "";
    let totalChinchilhas = numChinchilhas;  // o acumulador começa com valor iniciaL

    for(let i=1; i<=anos; i++){
        // no primeiro ano o total é o inicial, nos prox triplica
        if (i > 1) {
            totalChinchilhas *= 3; // O mesmo que: totalChinchilhas = totalChinchilhas * 3
        }

        resposta += `${i}º Ano: ${totalChinchilhas} Chinchilhas\n`
    }
    resp.innerText = resposta;
});

