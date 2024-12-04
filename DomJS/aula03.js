// Retorne no console todas as imagens do site

const imgs = document.querySelectorAll('img');
//console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensSomente = document.querySelectorAll('img[src^="imgsExemplo/image"]');
console.log(imagensSomente);

// Selecione todos os links internos (onde o href começa com #)

const linkesInternos = document.querySelectorAll('a[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao

const animaisH2 = document.querySelector('.animais-descricao h2');
console.log(animaisH2);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);

