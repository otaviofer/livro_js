const frm = document.querySelector("form"); // obtém elemento da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();             // evita o envio do form
    const numero = Number(frm.inNumero.value);  // obtém número digitado no form
    const raiz = Math.sqrt(numero); // calcula raíz quadrada do número
    if (Number.isInteger(raiz)) {   // se o valor da raíz for um número inteiro
        resp.innerText = `Raiz: ${raiz}`;   // ...mostra a raíz
    }else{
        resp.innerText = `Não há raíz exata para ${numero}`;    // ...mostra mensagem
    }
});