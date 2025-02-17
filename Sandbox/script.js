console.log("Hello Word");


var idade = 26; // Pode ser alterada 
var idade = "idade";
console.log(idade);

let nome = "Kaue"; // Let nao pode ser alterada 
console.log(nome);

const cargo = "Professor"; // Nao recomendado 
console.log(cargo);

/* Exercio 03 */


// CTRL+ K+ c
/* Tipos Primitivos */


const nome_ = "Kaue";
let idade_ = 22;
let mensagem = `Meu nome é ${nome_}, tenho ${idade_} anos.`;  /* para string preciso colocar crase `` */
console.log(mensagem);

console.log(typeof nome_); /* o typeof significa "tipo de e mosstra o tipo primitivo da variavel" */
console.log(typeof idade_); /*  */


let maiorDeIdade = true;
let temFilhos = false;

let tamanho;
console.log(tamanho); /* undefined */

/* Exercicios 3 - Tipos primitivos  */


let a = 10;
let b = "Kaue";
let c = "10"; /* o numero virou uma string pelo fato de esta dentro da aspas duplas */
let d = 20;


console.log(" a + b", a + b);
console.log(" a + c", a + c);
console.log(" a + d", a + d);



/* conversào  */


let n1 = "42";
n1 = Number(n1);
console.log(n1);



