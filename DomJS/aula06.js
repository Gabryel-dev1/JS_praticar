// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img');

console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll('img');
let soma = 0;
imagens.forEach((img) => {
    soma = soma + img.offsetWidth;
});
console.log(soma);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const linksPagina = document.querySelectorAll('a');

linksPagina.forEach((link) => {
    const altura = link.offsetHeight;
    const largura = link.offsetWidth;

    if(altura >= 48 && largura >= 48){
        console.log("O link é maior que o recomendado");
    } else {
        console.log("O link não é maior que o recomendado");
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const tamanhoTela = window.matchMedia('(max-width: 720px)').matches;

if(tamanhoTela){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}
