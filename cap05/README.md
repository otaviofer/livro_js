## LOOPS [**Guia do Aventureiro**]

Se as **Condicionais** são o "coração" da tomada de decisão, as **Estruturas de Repetição (Loops)** são os "músculos" da programação. Elas permitem que o computador execute tarefas repetitivas com uma velocidade que seria impossível para um humano.

---

### 🔄 O Conceito: O que são Loops?

Uma estrutura de repetição permite que um bloco de código seja executado várias vezes até que uma **condição específica** seja atingida. Em vez de escrever a mesma linha de código 10, 100 ou 1.000 vezes, você escreve uma vez e diz ao computador: *"Repita isso enquanto esta regra for verdadeira"*.
Imagine que você encontrou um baú com 5 poções. Para identificar cada uma, você não vai abrir o baú 5 vezes manualmente; você usa o comando `for` para olhar cada item, um por um, até o baú ficar vazio.

### 🚀 Possibilidades e Uso (Onde aplicar?)

Os loops são fundamentais em quase tudo o que você vê hoje:

* **Processamento de dados:** Somar todos os itens de um carrinho de compras.
* **Busca:** Procurar um nome específico dentro de uma lista de contatos.
* **Automação:** Enviar um e-mail para todos os alunos aprovados.
* **Interface:** Gerar as linhas de uma tabela HTML dinamicamente.
* **Jogos:** No seu **Simulador de Corrida**, um loop pode representar cada volta da corrida ou cada competidor na pista.

---

### 🛡️ Novo Item na Mochila: O Anel da Repetição (O `for`)

Imagine que o `for` é um feitiço de área que você conjura sobre um grupo de inimigos ou uma ação que seu personagem precisa repetir (como treinar 10 golpes de espada).O `for` é a estrutura de repetição mais utilizada quando **sabemos exatamente quantas vezes** queremos repetir algo. Ele é dividido em 3 partes fundamentais:

### 📜 A Anatomia do Feitiço `for`:

```javascript
for (inicialização; condição; incremento) {
    // Código que será repetido
}

for (let golpe = 1; golpe <= 10; golpe++) {
    console.log(`Você desferiu o golpe número ${golpe}! ⚔️`);
}

```

1. **`let golpe = 1` (A Preparação):** É o seu ponto de partida. Você começa o treino no primeiro golpe.
2. **`golpe <= 10` (A Condição de Vitória):** Enquanto o seu contador de golpes for menor ou igual a 10, o feitiço continua ativo.
3. **`golpe++` (O Ganho de XP):** A cada execução bem-sucedida, você adiciona +1 ao seu contador.

---

### 💡 Dica de Ouro para sua:

Uma situação clássica de erro em loops é o **"Loop Infinito"**. Isso acontece quando a condição nunca se torna falsa (ex: você esquece de incrementar o contador). O programa "trava" porque o computador fica preso naquela tarefa para sempre.

---

Excelente. Agora que o `for` está na sua mochila, vamos adicionar as outras duas variações de estruturas de repetição. Embora todas repitam código, a diferença está no **momento da tomada de decisão**.

Aqui está o resumo técnico com aquele tempero de 50% de RPG para o seu Guia:

---

### 🔄 O Laço `while` (Enquanto)

O `while` é usado quando você **não sabe exatamente quantas vezes** algo vai se repetir. Ele depende puramente de uma condição ser verdadeira para continuar.

**No contexto de aventura:** Imagine que seu personagem está tentando abrir uma fechadura com uma gazua. Você não sabe se vai conseguir na 1ª ou na 10ª tentativa. Você continua tentando **enquanto** a porta estiver trancada.

```javascript
let portaTrancada = true;
let tentativas = 0;

while (portaTrancada) {
    tentativas++;
    console.log(`Tentativa ${tentativas}: Tentando abrir...`);
    
    // Simulando uma chance de sucesso
    if (tentativas === 3) {
        portaTrancada = false; // A condição muda, o loop para na próxima verificação
    }
}
console.log("Porta aberta!");

```

* **Ponto Chave:** Se a condição for falsa logo de cara (ex: a porta já está aberta), o código dentro do `while` **nunca** é executado. Ele verifica antes de agir.

---

### 🔄 O Laço `do...while` (Faça... enquanto)

Este é o "irmão" do `while`, mas com uma diferença crucial: ele garante que o código seja executado **pelo menos uma vez**, mesmo que a condição seja falsa.

**No contexto de aventura:** Imagine um guerreiro que decide dar um golpe de machado antes mesmo de olhar se o inimigo ainda está de pé. Ele ataca primeiro, e só depois verifica a vida do oponente.

```javascript
let vidaInimigo = 0;

do {
    console.log("Você desfere um golpe de misericórdia!");
    // A verificação acontece SÓ AGORA, depois de ter executado uma vez.
} while (vidaInimigo > 0);

console.log("Combate encerrado.");

```

* **Ponto Chave:** Mesmo que a `vidaInimigo` seja 0 no início, a mensagem do golpe aparecerá uma vez. No `do...while`, você **age primeiro e pergunta depois**.

---

### 📊 Comparativo para o seu Guia (Checklist de Validação)

| Estrutura | Quando usar? (Estratégia) | Verificação |
| --- | --- | --- |
| **`for`** | Quando você sabe o limite exato (ex: 10 voltas na pista). | Antes de cada repetição. |
| **`while`** | Quando o fim depende de um evento (ex: até o usuário digitar "sair"). | Antes de cada repetição. |
| **`do...while`** | Quando a ação precisa ocorrer ao menos uma vez (ex: exibir um menu). | Após a primeira execução. |

---

Detalhes técnicos que costumam ser "armadilhas de masmorra" para quem está começando:

### 1. O Risco do Loop Infinito

Diferente do `for`, onde o incremento (`i++`) já fica na "assinatura" do comando, no `while` e no `do...while` **você é o responsável por mudar a condição** dentro do bloco de código.

```javascript
let energia = 10;
while (energia > 0) {
    console.log("Caminhando...");
    // Se você esquecer a linha abaixo, o programa trava em um loop infinito!
    energia--; 
}

```

### 2. O Ponto e Vírgula no `do...while`

Um detalhe de sintaxe: o `do...while` é a única estrutura de repetição que exige um ponto e vírgula `;` logo após o parêntese da condição final.

* `while (condicao) { ... }` (Não precisa)
* `do { ... } while (condicao);` (**Precisa!**)

---

### Sobre variáveis (let)

Essa é uma das regras mais importantes da "física" do JavaScript. No nosso **Guia do Aventureiro**, chamamos isso de **Escopo de Magia**.

Imagine que as chaves `{ ... }` de um `do...while`, `if` ou `for` são as **paredes de uma masmorra**.

### 1. O Problema: O Escopo de Bloco

Se você declara uma variável com `let` ou `const` **dentro** das chaves, ela nasce e morre ali dentro. Quem está do lado de fora da masmorra não consegue ver o que aconteceu lá dentro.

**Veja o erro comum:**

```javascript
do {
    let num = Number(prompt("Número: ")); // Variável nasce aqui
} while (num == 0); // ERRO! O while está fora das chaves e não enxerga o 'num'

```

No código acima, o `while` tentaria checar o valor de `num`, mas para ele, essa variável simplesmente **não existe**. O programa travaria com um erro de "ReferenceError".

---

### 2. A Solução: A Variável Global ao Bloco

Para que o `while` (que fica no pé da estrutura) e o resto do seu código consigam acessar o valor, você precisa declarar a variável **um nível acima**, antes de abrir as chaves.

**O jeito certo (como está no seu código):**

```javascript
let num; // 1. Você "reserva o espaço" na mochila do aventureiro (escopo externo)

do {
    num = Number(prompt("Número: ")); // 2. Você apenas preenche o valor lá dentro
} while (num == 0); // 3. Agora o while consegue enxergar o valor de 'num'!

alert(num); // 4. O resto do código também tem acesso.

```

---

### 📝 Para a Mochila:

* **Dentro das chaves:** A variável é "privada" daquele bloco. Útil para contadores de loop como o `let i = 0` (você não precisa do `i` depois que o loop acaba).
* **Fora das chaves:** A variável é "acessível" para aquele bloco e para tudo o que vier depois dele. Essencial quando você quer capturar um dado (como um número ou nome) e usá-lo no resto do programa.

### 💡 Pense assim:

É como um efeito de poção.

* Se você bebe a poção **dentro** de uma sala mágica (bloco), o efeito só dura enquanto você estiver naquela sala.
* Se você já entra na sala **com o efeito** da poção (variável declarada fora), o efeito continua ativo mesmo depois que você sai pela porta dos fundos.

### Break e Continue

Entenda esses dois comandos como "Modificadores de Fluxo". Eles servem para alterar o comportamento de um laço (`for` ou `while`) antes que ele chegue ao fim natural.

### ⛔ `break` (O Interruptor)

O `break` serve para **encerrar o loop imediatamente**. Assim que o código lê essa linha, ele "quebra" as correntes do laço e pula para a primeira linha de código fora dele.

* **Uso em Missões:** Imagine que você está procurando um item em um baú com 100 espaços. Assim que você encontra o item no espaço 5, não faz sentido olhar os outros 95. Você usa o `break` para parar a busca e economizar energia (processamento).

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) break; // Encontrou o que queria? Para tudo!
    console.log(i);     // Vai imprimir apenas: 1, 2, 3, 4
}

```

---

### ⏭️ `continue` (O Atalho)

O `continue` não para o loop todo, ele apenas **pula a volta atual**. Ele diz ao código: "Ignore o que resta nesta volta e vá direto para a próxima repetição".

* **Uso em Missões:** Imagine que você está saqueando uma masmorra, mas decide ignorar todos os baús que estiverem vazios. Se o baú está vazio, você dá um `continue` para ir ao próximo baú sem perder tempo guardando "ar" na mochila.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // Pula a interação número 3
    console.log(i);        // Vai imprimir: 1, 2, 4, 5
}

```

---

### 🎒 Resumo na Mochila:

* **`break`**: "Cansei, vou embora!" (Sai do loop).
* **`continue`**: "Este aqui não me interessa, próximo!" (Pula para a próxima volta).

---

### 🧮 Contadores e Acumuladores: A Gestão do Inventário

Dentro de um loop ou evento, usamos variáveis para rastrear o progresso. Embora pareçam iguais, elas possuem funções distintas na sua mochila:

* **Contador (`++`):** * **O que é:** Uma variável que aumenta (ou diminui) em um valor **fixo** (geralmente +1).
* **Utilidade:** Serve para saber "Quantas vezes algo aconteceu".
* **Exemplo:** Quantos inimigos foram derrotados ou quantas contas foram cadastradas.


* **Acumulador (`+=`):**
* **O que é:** Uma variável que aumenta em um valor **variável**.
* **Utilidade:** Serve para saber o "Total acumulado de uma grandeza".
* **Exemplo:** O total de ouro (XP) ganho no combate ou o valor total das contas somadas.



---

### ⚠️ Notas de Rodapé: Armadilhas na Masmorra (Erros Comuns)

> **O Gatilho Errado:** > Cuidado ao confundir `submit` com `click`.
> * O **`submit`** pertence ao formulário (`frm`) e é disparado quando enviamos os dados (Enter ou botão de envio). Ele precisa do `e.preventDefault()` para não recarregar a página.
> * O **`click`** pertence ao elemento (`button`, `div`, `img`) e é disparado ao pressionar o botão do mouse. Para botões de "Limpar" ou "Reset", o `click` é o seu melhor aliado.
> 
> 

> **Persistência de Memória:** > Se você declarar seus contadores/acumuladores **dentro** da função do evento, eles serão resetados a cada clique. Para manter o total acumulado durante toda a sessão, declare-os sempre no **escopo global** (fora das funções).

---

### 🎒 Novo Item Adicionado: **O Cálice da Restauração (Lógica de Reset)**

Agora você sabe que para resetar um sistema, não basta limpar a tela (`innerText`); é preciso "limpar a mente" do código, voltando as variáveis lógicas (`let`) ao seu estado zero.

---

### Booleanos (nota)

* **É mais comum usar variaveis tipo booleano no inteiros?**

Essa é uma excelente pergunta de "arquiteto de sistemas"! No código que você viu, o autor usou `0` e `1` (inteiros), mas no **mundo real das empresas**, é muito mais comum — e recomendado — usar **Booleanos** (`true` e `false`).

Aqui está o porquê dessa escolha no seu **Guia do Aventureiro**:

### 1. Clareza e Semântica (A Leitura do Código)

O código deve ser lido como uma história. Quando você usa um booleano, a intenção fica óbvia.

* **Com Inteiro:** `if (temDivisor == 1)` — Você precisa saber que "1" significa "sim".
* **Com Booleano:** `if (temDivisor)` — A leitura é natural: "Se tem divisor...".

### 2. Ocupação na Mochila (Memória)

Antigamente (em linguagens muito antigas como C), usava-se muito o `0` e `1` porque não existia um tipo "booleano" nativo. Hoje, o JavaScript trata o booleano como um tipo primitivo específico para isso. É o item mais leve que você pode carregar na mochila.

### 3. Evitando Erros de "Fogo Amigo"

Usar inteiros pode causar confusão. Se alguém acidentalmente mudar a variável para `2`, o seu `if (temDivisor == 1)` vai falhar, mesmo que o `2` devesse significar que "sim, há divisores". Com `true` e `false`, só existem dois estados possíveis. Não há meio-termo.

---

### 🛡️ Como ficaria o seu programa com Booleanos (O Padrão de Mercado):

Repare como a lógica fica mais limpa:

```javascript
let temDivisor = false; // Começa como falso (status: "puro")

for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
        temDivisor = true; // "Infiltrado encontrado!"
        break;
    }
}

// O "!" significa "NÃO". Lemos: "Se NÃO temDivisor"
if (num > 1 && !temDivisor) {
    resp.innerText = `${num} é primo.`;
}

```

---

### 🎒 Nota para o seu Guia: "Truthy" e "Falsy"

No JavaScript, existe um conceito curioso: o número `0` é considerado "falso" em contextos lógicos, e qualquer outro número (como `1`) é considerado "verdadeiro".

Por isso, se você fizer `if (0)`, o código não entra no bloco. Se fizer `if (1)`, ele entra. Mas, para evitar confusão na sua "equipe de aventureiros", **prefira sempre `true` ou `false**`.

**Resumo da regra de ouro:** * Use **Inteiros** quando precisar **contar** (1, 2, 3...).

* Use **Booleanos** quando precisar de um **interruptor** (Ligado/Desligado, Sim/Não, Sucesso/Falha).