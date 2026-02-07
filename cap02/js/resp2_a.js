// cria referência ao form e aos elemntos h3 (pelo id '#')
const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value;    // recebe os dados de entrada
    const preco = Number(frm.inPreco.value);

    const desconto = Math.floor(preco) * 2;

    resp1.innerText = `Promoção de ${medicamento}`;         // Exibe a  resposta na tela
    resp2.innerText = `Total R$: ${preco.toFixed(2)}`;
    resp3.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`;

    e.preventDefault();
})