// Retorne o url da página atual utilizando o objeto window

const paginaurl = window.location.href;
console.log(paginaurl);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elemmentAtivo = document.querySelector('.ativo');
console.log(elemmentAtivo);

// querySelectorAll seleciona todos
// querySelector só seleciona o primeiro 

// Retorne a linguagem do navegador

const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela 

const largura = window.innerWidth;
console.log(largura);
