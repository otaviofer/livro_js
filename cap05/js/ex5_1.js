const frm = document.querySelector("form"); // obtém os elementos da pág
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);  // entrada de dados
    let resposta = "";  // variável do tipo string para concatenar a resposta

    // cria um laço de repetção (i começa em 1 e é incrementado até 10)
    for (let i=1; i<=10; i++){
        resposta = resposta + numero + " x " + i + " = " + (numero*i) + "\n";
        // resposta = `${resposta}${numero} x ${i} = ${numero*i}\n`
    }
    // o conteúdo da tag pre é alterado para exibir a tabuada do numero inserido
    resp.innerText = resposta;
});