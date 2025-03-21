// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksPagina = document.querySelectorAll('a[href^="#');

function handleLink(event) {
    event.preventDefault();
    linksPagina.forEach((link) =>{
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

linksPagina.forEach((link) => {
    link.addEventListener('click', handleLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const elemetosSite = document.querySelectorAll('body *');

// function handleElemento(event) {
//     console.log(event.currentTarget);
// }

// elemetosSite.forEach((elemento) => {
//     elemento.addEventListener('click', handleElemento);
// })

// console.log(elemetosSite);


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function handleElemento(event) {
//     event.currentTarget.remove();
// }



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
    console.log(event.key);

    if(event.key == 't') {
        console.log('Clicou no T');
        document.documentElement.classList.toggle('textoMaior') //necessario a classe no css textoMaior
    }
  }
  
window.addEventListener('keydown', handleClickT);
  
