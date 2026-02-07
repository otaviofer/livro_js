/*
    Entrada: Ler nome e as notas de um aluno
    processamento: calcular a média final no aluno
    Saída: informar se  o aluno foi aprovado ou não - usar o 'IF'.
*/

// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita o envio do form
  const nome = frm.inNome.value; // obtém os valores do form
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);

  const media = (nota1 + nota2) / 2; // calcula a média das notas

  resp1.innerText = `Média final: ${media.toFixed(2)}`;
  // cria condições*
  if (media >= 7) {
    // altera o texto e estilo da cor do elemento resp2
    resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a).`;
    resp2.style.backgroundColor = "green";
    resp2.style.color = "white";
  } else if (media >= 4) {
    resp2.innerText = `Atenção ${nome}! Você está em exame!`;
    resp2.style.backgroundColor = "blue";
    resp2.style.color = "white";
  } else {
    resp2.innerText = `Ops ${nome}... Você foi reprovado(a).`;
    resp2.style.backgroundColor = "red";
    resp2.style.color = "white";
  }
});
