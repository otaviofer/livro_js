const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);

    // 1. Variáveis de controle (nossos itens de mochila)
    let divisores = "Divisores do " + num + ": 1"; // Começa com 1 (divisor universal)
    let soma = 1; // Acumulador da soma

    // 2. O Loop de busca (começa em 2, pois o 1 já está na conta)
    // Usamos num / 2 pois nenhum divisor é maior que a metade do número
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            divisores += ", " + i; // Adiciona o divisor à lista
            soma += i;             // Soma o divisor ao total
        }
    }

    // 3. Verificação final
    resp1.innerText = `${divisores} (Soma: ${soma})`;

    if (num === soma) {
        resp2.innerText = `${num} é um Número Perfeito!`;
    } else {
        resp2.innerText = `${num} NÃO é um Número Perfeito.`;
    }
});