// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoa = {
    nome: "gabryel",
    sobreNome: "alves",
    idade: 25,
    trabalha: true,    
}

console.log(pessoa.idade);

// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.nomeCompleto = function() {
    return `${this.nome} ${this.sobreNome}`
}

console.log(pessoa.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;
  console.log(carro.preco);
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  var cachorro = {
    raca: "labrador",
    cor: "preto",
    idade: 10,
    latir(alguem) {
        if(alguem === "homem"){
            return "Latir"
        } else { return "Nada"}
    }
  }

console.log(cachorro.latir("homem"))