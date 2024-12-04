// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((atual) => {
    console.log(atual);
});

// Mostre o texto dos parágrafos no console

paragrafos.forEach((atual) => {
    console.log(atual.innerText);
});


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {  //item e index sem o parenteses, so pode sem quando é um argumento
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {  // tava só => , fatou o parentese vazio: () =>{...} 
  console.log(i++);
});

imgs.forEach(() => i++);