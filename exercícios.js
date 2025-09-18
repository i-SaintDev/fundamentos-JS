//1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

const texto = 'Olá mundo';
const numero = 42;
const booleano = true;

console.log(texto); //String
console.log(numero); //Number
console.log(booleano); //Boolean

//2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

const primeiroNome = 'Israel';
const ultimoNome = ' Santana Santos';

//Usando o operador +
const nomeCompletoConcatenado = primeiroNome + '' + ultimoNome;
console.log('Usando o operador +', nomeCompletoConcatenado);

//Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings ${nomeCompletoTemplate}`);

//3. Crie uma variável inicializada com um valor de qualter tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel= 'Novo valor';
console.log(minhaVariavel);

//4. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

let fora = 'Fora do bloco';

if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // erro 'dentro is not defined'

//5. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

const estaChovendo = true;

if (estaChovendo) {
    console.log('É melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}