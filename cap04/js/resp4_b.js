/**
 * Elaborar um programa que leia a valocidade permitida em uma estrada e a
 * velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba
 * "SEM MULTA". Se a velocidade fot até 20% maior que a permitida, exiba "MULTA LEVE".
 * E, se a velocidade for superior a 20% da velocidade permitida, exiba "MULTA GRAVE".
 */

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const veloPermitida = Number(frm.inPermitida.value);
    const condutor = Number(frm.inCondutor.value);

    const limiteLeve = veloPermitida + (veloPermitida * 0.2);

    /** Uso de operador ternário abaixo: */

    const situacao = condutor <= veloPermitida ? "SEM MULTA": condutor <= limiteLeve ? "MULTA LEVE" : "MULTA GRAVE";
    const corTexto = situacao === "MULTA LEVE" ? "black" : "white";
    const corFundo = situacao === "SEM MULTA" ? "green" : situacao === "MULTA LEVE" ? "yellow" : "red";

    resp.innerText = `${condutor} km - ${situacao}`;
    resp.style.color = corTexto;
    resp.style.backgroundColor = corFundo;

/*
    // Uso do if else tradicional:

    if (condutor <= veloPermitida){
        resp.innerText = `${condutor}km PERMITIDO: "SEM MULTA"`;
        resp.style.color = "white";
        resp.style.backgroundColor = "green";
    }else if(condutor <= limiteLeve){
        resp.innerText = `${condutor}km VELOCIDADE EXCEDIDA: "MULTA LEVE"`;
        resp.style.color = "black";
        resp.style.backgroundColor = "yellow";
    }else{
        resp.innerText = `${condutor}km VELOCIDADE EXCEDIDA: "MULTA GRAVE"`;
        resp.style.color = "white";
        resp.style.backgroundColor = "red";
    }
*/
});