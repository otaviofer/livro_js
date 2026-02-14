const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fruta = frm.inFruta.value;
  const num = Number(frm.inNumero.value);

  let imprime = "";
  for (let i = 1; i <= num; i++) {
    if (i <= num) {
      imprime += fruta; // Sempre adiciona a fruta
      if (i < num) {
        imprime += " * "; // Só adiciona a estrela se houver uma próxima fruta
      }
    }
  }

  resp.innerText = imprime;
});

/*
    for (let i = 1; i <= num; i++) {
    if (i <= num){
        imprime = imprime + fruta + " * ";
        if (i === num) { VOCÊ ERROU AQUI
            imprime = imprime + fruta;
        }
    } 
  }
*/
