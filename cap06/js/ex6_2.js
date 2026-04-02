// referência aos elementos da página
const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];   // vetor escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1;   // número aleatório entre 1 e 100
const CHANCES = 6;  // constante com o número maximo de chances

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);  // entrada de dados
    if(numero == sorteado){ // se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
        respDica.style.color = "white";
        respDica.style.background = "green";
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe";
    }else{
        if(erros.includes(numero)){     // se já apostou o número
            alert(`Você já apostou o número ${numero}. Tente outro...`);
        }else{
            erros.push(numero);             // adiciona número ao vetor
            const numErros = erros.length;  // obtém tamanho do vetor
            const numChances = CHANCES - numErros;  // calcula nº chances
            // exibe nº de erros, conteudo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;
            if(numChances == 0){
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe";
                respDica.innerText = `Game Over! Número sorteado: ${sorteado}`;
                // Executa o alerta após um pequeno atraso de 100 milissegundos
                setTimeout(() => {
                    alert("Suas chances acabaram...");
                }, 100);
            }else{
                // usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
            }
        }
    }
    frm.inNumero.value = "";    // limpa os campos de entrada
    frm.inNumero.focus();       // posiciona o cursor nesse campo
});

// Adiciona um ouvinte para o clique do botão "Jogar Novamente"
frm.btNovo.addEventListener("click", () => {
    // Recarrega a página atualizando tudo do zero
    location.reload(); 
});