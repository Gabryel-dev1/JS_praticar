// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let RecebimentoTotal = 0;

transacoes.forEach((item) => {
  // console.log(item.valor.substring(3));
  // const numeroLimpo = +item.valor.replace('R$ ', '');

  const numeroLimpo = +item.valor.substring(3);  // + antes da variavel converte para numero

  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numeroLimpo;
  }
  else {
    RecebimentoTotal += numeroLimpo;
  }
  console.log(`Valor convertido de (${item.valor}) para: ${numeroLimpo}`);
});

console.log(`Total de taxas: ${taxaTotal}`);
console.log(`Total de Recebimentos: ${RecebimentoTotal}`);


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(';'));

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

console.log(html.replace(/span/g, 'a'));

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

console.log(transacoes1);

let totalTaxas = 0;

transacoes1.forEach((item) => {
  item = item.toLowerCase().trim();
  if (item.slice(0, 4) === 'taxa') {
    totalTaxas++;
  }
});

console.log(`Total de taxas: ${totalTaxas}`);





