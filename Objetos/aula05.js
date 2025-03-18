// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)); // Math.floor arredonda para baixo, e Math.random() gera um numero aleatorio entre 0 e 1 E multiplicando por 951, temos um numero entre 0 e 951, somando 1050, temos um numero entre 1050 e 2000


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
arrayNumeros = numeros.split(', '); // split separa os elementos de uma string em um array, o parametro passado é o separador
arrayNumeros.forEach((numero, index) => {
  arrayNumeros[index] = +numero;
});

console.log(Math.max(...arrayNumeros)); // Math.max retorna o maior numero da lista



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(listaPrecos) {
  let soma = 0;
  listaPrecos.forEach((preco) => {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    soma += preco;
  });
  console.log(soma);
}

limparPreco(listaPrecos);


// Resolução do professor

function limparPreco2(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco2(preco);
});

console.log(soma);

