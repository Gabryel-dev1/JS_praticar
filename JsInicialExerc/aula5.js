
// Crie uma função para verificar se um valor é Truthy

function verifica(valor){
    return !!valor;
}
// console.log(verifica(1))


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado){
    return lado*4;
}
//console.log(perimetro(4));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(primeiroNome, sobreNome){
    return primeiroNome + " " + sobreNome;
}
//console.log(nomeCompleto("Gabryel", "Alves"));


// Crie uma função que verifica se um número é par

function ePar(numero){
    var resto = numero % 2;
    if(resto){
        console.log('O numero é impar');
    }else {
        console.log('O numero é Par');
    }
}
//console.log(ePar(17));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado){
    return typeof(dado);
}
//console.log(tipoDado(1235));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function(){
    console.log("Gabryel Alves da Costa");
})



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  