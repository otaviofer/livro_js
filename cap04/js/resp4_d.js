/**
 * Elaborar um programa que leia três lados e verifique se eles podem formar ou não
 * triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois.
 * Caso possam formar um triângulo, exiba também qual o típo do triãngulo: Equilátero (3 lados iguais),
 * Isóceles (2 lados iguais) e Escaleno (3 lados diferentes).
 * 
 * Lógica para formar um triângulo:
 * A < B + C
 * B < A + C
 * C < A + B
 * 
 * Se qualquer uma dessas falhar → NÃO forma triângulo.
 */

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    // Verificação se forma triângulo
    if( ladoA < ladoB + ladoC &&
        ladoB < ladoA + ladoC &&
        ladoC < ladoA + ladoB){

            resp1.innerText = `Os lados podem formar um triângulo`;

            if (ladoA === ladoB && ladoB === ladoC) {
            resp2.innerText = "Tipo: Equilátero";
            } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
                resp2.innerText = "Tipo: Isósceles";
            } else {
                resp2.innerText = "Tipo: Escaleno";
        }
    } else {
        resp1.innerText = "Os lados NÃO podem formar um triângulo";
        resp2.innerText = "";
    }
});

/**
 *  '===' é o operador de comparação estrita (strict equality).
    Ele compara:
    ✅ Valor
    ✅ Tipo
    Ou seja: só retorna true se forem exatamente iguais.
 */