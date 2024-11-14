// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 21;
var x;
x = 21;

if(minhaIdade > x){
    //console.log("Idade maior");
} else if(minhaIdade === x){
    //console.log("Idade igual");
} else {console.log("Idade menor")}


// Qual valor é retornado na seguinte expressão? falso
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log("brasil maior que china");
} else if(brasil === china){
    console.log("brasil e china igual");
} else {console.log("brasil menor que china")}

//console.log(brasil === china);

// O que irá aparecer no console? falso gato e gato
if(('Gato' === 'gato') && (5 > 2)) {
  //console.log('Verdadeiro');
} else {
  //console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // a ultima verdadeira Cão
} else {
  console.log('Falso');
}