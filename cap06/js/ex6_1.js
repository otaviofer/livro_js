const frm = document.querySelector("form"); // obtém elementos da página
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];   // declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inPaciente.value;  // obtém nome do paciente
    pacientes.push(nome);               // adiciona o nome ao final do vetor
    let lista = "";                     // string para concatenar pacientes
    // for "tradicional" (inicia em 0, enquanto menor que tamenho do array)
    for(let i=0; i<pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }
    respLista.innerText = lista;    // exibe a lista de pacientes na página
    frm.inPaciente.value = "";      // Limpa conteúdo do campo de formulário
    frm.inPaciente.focus();         // posiciona o cursor no campo
})