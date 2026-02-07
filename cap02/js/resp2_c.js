/*
    Entrada: ler a descrição e preço de um prouto de supermercado
    Processamento: calcular o desconto comprando 3 unidades (3ª un. 50% desconto)
    Saída: Exibir a descrição, valor do desconto e apreseentar o valor da 3ª unidade na tela
*/

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const produto3 = preco * 0.50
    const total = (preco * 2) + produto3;

    resp1.innerText = `${produto} - Promoção: Leve 3 por apenas R$: ${total.toFixed(2)}`;
    resp2.innerText = `O 3º produto sai por apenas R$: ${produto3.toFixed(2)}`;

    console.log(produto);   // testar nas ferramentas do desenvolvedor
    console.log(preco);
    console.log(produto3);
    console.log(total);

    e.preventDefault();
})