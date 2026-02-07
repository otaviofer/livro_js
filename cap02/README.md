## Informações úteis:

### babeljs.io

O Babel é um transpilador JavaScript. Ele serve como uma "ponte" que traduz o código moderno que você gosta de escrever para um código antigo que os navegadores realmente entendem.
---
O Fluxo de Trabalho

1) Entrada: Você escreve código de última geração (ES6+).
2) Processamento: O Babel analisa a sintaxe e a reescreve.
3) Saída: Um código compatível com navegadores antigos (ES5).

### Como ele funciona na prática?

Imagine que você escreveu este código moderno usando Arrow Functions e Template Strings:

```
// Código Moderno (ES6+)
const saudar = (nome) => {
  console.log(`Olá, ${nome}!`);
};
```
O Babel processa esse arquivo e o transforma em algo assim:

```
// Código Transpilado (ES5) - Funciona em qualquer lugar
var saudar = function saudar(nome) {
  console.log("Olá, " + nome + "!");
};
```

### Por que usar?

- Liberdade: Use arrow functions, destructuring e async/await sem medo.
- Universalidade: Garante que seu site não "quebre" no Safari antigo ou em versões anteriores do Chrome.
- React: É indispensável para quem usa JSX.