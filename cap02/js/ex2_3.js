// cria referência ao form e aos elementos de resposta (pelo seu id '#')
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de evento, acionaddo quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value;    // obtém os dados de entrada
    const preco = Number(frm.inPreco.value);

    const entrada = (preco / 100) * 50;        // calcula o valor da entrada
    const parcela = ((preco / 100) * 50) / 12; // ... e das parcelas

    /*
        Podemos calcular o valor da entrada e parcelas de varias foras:
        const entrada = preco / 2; (considerando ue a entrada é de 50%)
        const parcela = entrada / 12;

        ou ainda...

        const entrada = preco * 0.50; (acredito ser o mais convencional)
        const parcela = (preco * 0.50) / 12;
    */

    resp1.innerText = `Prommoção: ${veiculo}`;   // exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `Parcelas de R$: ${parcela.toFixed(2)}`;

    e.preventDefault();
});