const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value); // entrada
  let resposta = `Entre ${numero} e 1: `;
  for (let i = numero; i > 1 ; i--) {
    // repetição
    resposta = resposta + i + ", "; // processamento
  }
  resp.innerText = resposta + "1."; // saída
});
