// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;

    console.log(cor, marca, portas);
  }
  //console.log(cor, marca, portas);
  // O var deixa vazar de dentro do bloco, o let e o const não 
  
  // Como corrigir o erro abaixo?

  // const estava dentro do bloco do if, impossibilitando da função
  // divide por 2 acessar a variavel dois 
  
  const dois = 2;
  function somarDois(x) {
    //const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  //console.log(somarDois(4));
  //console.log(dividirDois(3));
  
//   O que fazer para total retornar 500?
// mudar de var para let a variavel de implementação do For
  var numero = 50;
  
//   for(var numero = 0; numero < 10; numero++) {
//     console.log(numero);
//   }

for(let numero = 0; numero < 10; numero++) {
         console.log(numero);
      }
  
  const total = 10 * numero;
  console.log(total);
  