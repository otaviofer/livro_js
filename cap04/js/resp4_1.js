const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.inNumero.value);
    const aux = num % 2;

    if (aux == 0){
        resp.innerText = `Número ${num} é Par.`
    }else{
        resp.innerText = `Número ${num} é Ímpar.`
    }
});