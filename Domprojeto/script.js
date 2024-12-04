// Adicione a classe ativo a todos os itens do menu

const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach((item) => {
    item.classList.add('Ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuItens.forEach((item) => {
    item.classList.remove('Ativo')
});

menuItens[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img');

imagens.forEach((img) =>{
    console.log(img.getAttribute('alt'));
})

// Modifique o href do link externo no menu

const links = document.querySelector('.menu a[href^="https://"]');

console.log(links.getAttribute('href')); //Vendo qual link tá

links.setAttribute('href', 'https://www.google.com/maps');

console.log(links.getAttribute('href')); //Vendo se mudou 



