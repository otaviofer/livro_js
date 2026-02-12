const frm = document.querySelector("form"); // obtém os elementos da pág
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    let temDivisor = 0;   // declara e inicializa varoável tipo flag
    for(let i=2; i<=num/2; i++){  // percorre todos os possiveis divisores de num
        if(num%i==0){   // se tem um divisor
            temDivisor = 1; // muda o flag
            break;          // sai da repetição
        }
    }
    if (num > 1 && !temDivisor) {    // se num > 1 e não possui divisor
        resp.innerText = `${num} é primo.`
    }else{
        resp.innerText = `${num} Não é primo.`
    }
});

/**

### 🛡️ Caso de Uso: Sistema de Validação de Cupons de Desconto

Imagine que você trabalha para um grande E-commerce (como o Mercado Livre ou a Amazon). Eles lançam uma promoção de "Primeira Compra", mas com regras rígidas.

**O Problema:** O sistema precisa validar se um cupom inserido pelo usuário pode ser aplicado. O cupom tem várias "condições de impedimento" (divisores).

**A Lógica na Empresa:**
Assim como o número primo, o cupom começa como "Válido" (nossa **Flag**). O sistema então executa um loop por uma lista de regras de bloqueio. Se ele bater em **qualquer** regra, o cupom é invalidado na hora.

```javascript
let cupomValido = true; // Nossa "Flag" (ou let statusCupom = 0)

// O sistema percorre uma lista de "impedimentos"
for (let i = 0; i < regrasBloqueio.length; i++) {
    if (usuarioJaUsouEsseCupom(usuario)) {
        cupomValido = false;
        break; // Não preciso checar as outras regras, ele já falhou nesta!
    }
    
    if (valorCompra < valorMinimoDoCupom) {
        cupomValido = false;
        break; // Interrompe o processo para economizar processamento
    }
}

if (cupomValido) {
    aplicarDesconto();
} else {
    exibirErro("Cupom Inválido para esta compra.");
}

```

---

### 🗺️ Por que isso é importante para o seu "Guia do Aventureiro"?

1. **Economia de "Mana" (Processamento):** O `break` que você usou no exercício é vital em empresas. Imagine checar 50 regras de cupom para 1 milhão de usuários simultâneos. Se o cupom falha na 1ª regra e você não usa o `break`, você está gastando dinheiro da empresa com processamento inútil.
2. **Otimização (A Metade do Caminho):** Lembra do `num / 2`? No mundo real, isso se traduz em **filtros prévios**. Se um cliente quer comprar um produto, o sistema primeiro checa se o produto está em estoque. Se não está, ele nem tenta calcular o frete. É a mesma lógica de "não testar divisores desnecessários".
3. **Segurança e Criptografia:** Aqui é onde os números primos realmente brilham. Toda a segurança bancária e de senhas (criptografia RSA) é baseada na dificuldade de encontrar os divisores de números primos gigantescos. Se você for trabalhar com segurança de dados, essa sua lógica de "testar divisores" será o alicerce de tudo.

### 🎒 Atualização na Mochila:

Você acabou de aprender que a lógica de **"Validar por Exclusão"** é um dos itens mais poderosos para um programador profissional. É muito mais eficiente procurar um motivo para **parar** do que tentar provar que tudo está certo até o fim.

**Deseja seguir para o próximo tópico do capítulo ou quer que eu crie um pequeno "Snippet" (código curto) de um desses casos reais para você analisar?**
 */