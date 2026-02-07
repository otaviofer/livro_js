const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);

    const numFracoes = Math.ceil(tempo/15);
    const total = numFracoes * valor;

    /*
        Para obter o valor exato é só usar:
        const numFracoes = tempo/15;
    */

    resp1.innerText = `Valor a pagar R$: ${total.toFixed(2)}`;

    e.preventDefault();
})