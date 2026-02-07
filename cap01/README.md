## Variável

Pense em uma variável como uma caixa etiquetada na memória do seu computador. Em vez de você ter que decorar o endereço exato de onde um dado está guardado (que geralmente é um código maluco como 0x7bff5), você dá um nome amigável a essa "caixa" e coloca algo dentro dela.

Aqui está o que compõe a anatomia de uma variável:

1. O Nome (Identificador)
É o rótulo da caixa. Se você quer guardar a idade de alguém, chama a variável de idade. Isso torna o código legível para humanos.

2. O Valor
É o conteúdo da caixa. Pode ser um número, um texto, uma lista de contatos ou até um comando complexo.

3. O Tipo de Dado
Isso define o que cabe na caixa. Nem toda caixa serve para tudo:

- Inteiro (int): Números sem casas decimais (ex: 25).
- Texto (String): Letras e frases (ex: "Olá, mundo").
- Booleano (bool): Apenas dois estados: verdadeiro ou falso.
- Ponto Flutuante (float/double): Números com vírgula (ex: 1.75).

Como funciona na prática?

> Imagine que estamos criando um jogo simples. Precisamos guardar a pontuação do jogador.
Declaração: Você diz ao computador "Ei, reserve um espaço chamado pontos".
Atribuição: Você coloca um valor lá dentro: pontos = 10.
Manipulação: Se o jogador ganha um bônus, você altera o conteúdo da caixa: pontos = pontos + 5. Agora, a caixa que antes tinha 10, passa a ter 15.
Por que o nome "variável"? Porque o valor contido nela pode variar durante a execução do programa. Se o valor fosse fixo e imutável, chamaríamos de constante.